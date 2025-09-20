package com.dom.sprout.service;

import com.dom.sprout.dao.*;
import com.dom.sprout.entity.*;
import com.dom.sprout.dto.CartItemRequest;
import com.dom.sprout.dto.CartResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartPlantsRepository cartPlantsRepository;
    private final CartGroundsRepository cartGroundsRepository;
    private final CartPotsRepository cartPotsRepository;
    private final UserRepository userRepository;
    private final PlantRepository plantRepository;
    private final GroundRepository groundRepository;
    private final PotRepository potRepository;

    public CartResponse getCart(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        List<CartPlants> cartPlants = cartPlantsRepository.findByUser(user);
        List<CartGrounds> cartGrounds = cartGroundsRepository.findByUser(user);
        List<CartPots> cartPots = cartPotsRepository.findByUser(user);

        List<CartItemPlant> plants = new ArrayList<>();
        List<CartItemGround> grounds = new ArrayList<>();
        List<CartItemPot> pots = new ArrayList<>();

        int total = 0;
        for (CartPlants plant : cartPlants) {
            plants.add(new CartItemPlant(plant.getUser().getId(), plant.getItem(), plant.getCount()));
            total += plant.getCount();
        }

        for (CartGrounds ground : cartGrounds) {
            grounds.add(new CartItemGround(ground.getUser().getId(), ground.getItem(), ground.getCount()));
            total += ground.getCount();
        }

        for (CartPots pot : cartPots) {
            pots.add(new CartItemPot(pot.getUser().getId(), pot.getItem(), pot.getCount()));
            total += pot.getCount();
        }

        return CartResponse.builder()
                .plants(plants)
                .grounds(grounds)
                .pots(pots)
                .total(total)
                .build();
    }

    public CartResponse addItemToCart(String email, CartItemRequest request) {
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
        } else if (request.getType().name().equals("GROUND")) {
            Ground ground = groundRepository.findById(request.getId()).orElseThrow();
            Optional<CartGrounds> cartGround = cartGroundsRepository.findById(new CartItemId(user.getId(), ground.getId()));
            cartGround.ifPresentOrElse(
                    value -> {
                        value.setCount(value.getCount() + 1);
                        cartGroundsRepository.save(value);
                    },
                    () -> {
                        CartGrounds newItem = new CartGrounds(user, ground, 1);
                        cartGroundsRepository.save(newItem);
                    }
            );
        } else if (request.getType().name().equals("POT")) {
            Pot pot = potRepository.findById(request.getId()).orElseThrow();
            Optional<CartPots> cartPot = cartPotsRepository.findById(new CartItemId(user.getId(), pot.getId()));
            cartPot.ifPresentOrElse(
                    value -> {
                        value.setCount(value.getCount() + 1);
                        cartPotsRepository.save(value);
                    },
                    () -> {
                        CartPots newItem = new CartPots(user, pot, 1);
                        cartPotsRepository.save(newItem);
                    }
            );
        }

        List<CartPlants> cartPlants = cartPlantsRepository.findByUser(user);
        List<CartGrounds> cartGrounds = cartGroundsRepository.findByUser(user);
        List<CartPots> cartPots = cartPotsRepository.findByUser(user);
        List<CartItemPlant> plants = new ArrayList<>();
        List<CartItemGround> grounds = new ArrayList<>();
        List<CartItemPot> pots = new ArrayList<>();


        int total = 0;
        for (CartPlants plant : cartPlants) {
            plants.add(new CartItemPlant(plant.getUser().getId(), plant.getItem(), plant.getCount()));
            total += plant.getCount();
        }

        for (CartGrounds ground : cartGrounds) {
            grounds.add(new CartItemGround(ground.getUser().getId(), ground.getItem(), ground.getCount()));
            total += ground.getCount();
        }

        for (CartPots pot : cartPots) {
            pots.add(new CartItemPot(pot.getUser().getId(), pot.getItem(), pot.getCount()));
            total += pot.getCount();
        }

        return CartResponse.builder()
                .plants(plants)
                .grounds(grounds)
                .pots(pots)
                .total(total)
                .build();
    }

    public CartResponse removeItemFromCart(String email, CartItemRequest request) {
        User user = userRepository.findByEmail(email).orElseThrow();
        if (request.getType().name().equals("PLANT")) {
            Plant plant = plantRepository.findById(request.getId()).orElseThrow();
            Optional<CartPlants> cartPlant = cartPlantsRepository.findById(new CartItemId(user.getId(), plant.getId()));
            cartPlant.ifPresentOrElse(
                    value -> {
                        if (value.getCount() == 1) {
                            cartPlantsRepository.delete(value);
                        } else {
                            value.setCount(value.getCount() - 1);
                            cartPlantsRepository.save(value);
                        }
                    },
                    () -> {
                    }
            );
        } else if (request.getType().name().equals("GROUND")) {
            Ground ground = groundRepository.findById(request.getId()).orElseThrow();
            Optional<CartGrounds> cartGround = cartGroundsRepository.findById(new CartItemId(user.getId(), ground.getId()));
            cartGround.ifPresentOrElse(
                    value -> {
                        if (value.getCount() == 1) {
                            cartGroundsRepository.delete(value);
                        } else {
                            value.setCount(value.getCount() - 1);
                            cartGroundsRepository.save(value);
                        }
                    },
                    () -> {
                    }
            );
        } else if (request.getType().name().equals("POT")) {
            Pot pot = potRepository.findById(request.getId()).orElseThrow();
            Optional<CartPots> cartPot = cartPotsRepository.findById(new CartItemId(user.getId(), pot.getId()));
            cartPot.ifPresentOrElse(
                    value -> {
                        if (value.getCount() == 1) {
                            cartPotsRepository.delete(value);
                        } else {
                            value.setCount(value.getCount() - 1);
                            cartPotsRepository.save(value);
                        }
                    },
                    () -> {
                    }
            );
        }

        List<CartPlants> cartPlants = cartPlantsRepository.findByUser(user);
        List<CartGrounds> cartGrounds = cartGroundsRepository.findByUser(user);
        List<CartPots> cartPots = cartPotsRepository.findByUser(user);
        List<CartItemPlant> plants = new ArrayList<>();
        List<CartItemGround> grounds = new ArrayList<>();
        List<CartItemPot> pots = new ArrayList<>();


        int total = 0;
        for (CartPlants plant : cartPlants) {
            plants.add(new CartItemPlant(plant.getUser().getId(), plant.getItem(), plant.getCount()));
            total += plant.getCount();
        }

        for (CartGrounds ground : cartGrounds) {
            grounds.add(new CartItemGround(ground.getUser().getId(), ground.getItem(), ground.getCount()));
            total += ground.getCount();
        }

        for (CartPots pot : cartPots) {
            pots.add(new CartItemPot(pot.getUser().getId(), pot.getItem(), pot.getCount()));
            total += pot.getCount();
        }

        return CartResponse.builder()
                .plants(plants)
                .grounds(grounds)
                .pots(pots)
                .total(total)
                .build();
    }

    @Transactional
    public void clearCart(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        cartPlantsRepository.deleteCartPlantsByUser(user);
        cartGroundsRepository.deleteCartGroundsByUser(user);
        cartPotsRepository.deleteCartPotsByUser(user);
    }
}
