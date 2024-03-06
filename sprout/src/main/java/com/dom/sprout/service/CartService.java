package com.dom.sprout.service;

import com.dom.sprout.dao.CartPlantsRepository;
import com.dom.sprout.dao.PlantRepository;
import com.dom.sprout.dao.UserRepository;
import com.dom.sprout.entity.*;
import com.dom.sprout.rest.AddItemRequest;
import com.dom.sprout.rest.CartResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartPlantsRepository cartPlantsRepository;
    private final UserRepository userRepository;
    private final PlantRepository plantRepository;

    public CartResponse getCart(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        List<CartPlants> cartPlants = cartPlantsRepository.findByUser(user);
        List<CartItemPlant> plants = new ArrayList<>();
        int total = 0;
        for (CartPlants plant : cartPlants) {
            plants.add(new CartItemPlant(plant.getUser().getId(), plant.getItem(), plant.getCount()));
            total += plant.getCount();
        }

        return CartResponse.builder()
                .plants(plants)
                .total(total)
                .build();
    }

    public CartResponse addItemToCart(String email, AddItemRequest request) {
        User user = userRepository.findByEmail(email).orElseThrow();
        if (request.getType().name().equals("PLANT")) {
            Plant plant = plantRepository.findById(request.getId()).orElseThrow();
            Optional<CartPlants> cartPlant = cartPlantsRepository.findById(new CartItemId(user.getId(), plant.getId()));
            cartPlant.ifPresentOrElse(
                    value -> {
                        value.setCount(value.getCount() + 1);
                        cartPlantsRepository.save(value);
                    },
                    () -> {
                        CartPlants newItem = new CartPlants(user, plant, 1);
                        cartPlantsRepository.save(newItem);
                    }
            );
        }

        List<CartPlants> cartPlants = cartPlantsRepository.findByUser(user);
        List<CartItemPlant> plants = new ArrayList<>();
        int total = 0;
        for (CartPlants plantItem : cartPlants) {
            plants.add(new CartItemPlant(plantItem.getUser().getId(), plantItem.getItem(), plantItem.getCount()));
            total += plantItem.getCount();
        }
        return CartResponse.builder()
                .plants(plants)
                .total(total)
                .build();
    }
}
