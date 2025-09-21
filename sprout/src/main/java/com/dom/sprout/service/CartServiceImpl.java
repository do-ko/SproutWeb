package com.dom.sprout.service;

import com.dom.sprout.dao.*;
import com.dom.sprout.dto.CartResponse;
import com.dom.sprout.entity.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final UserRepository userRepository;
    private final CartItemRepository cartItemRepository;
    private final ItemRepository itemRepository;

    @Override
    public CartResponse getCart(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();

        List<CartItem> cartItems = cartItemRepository.findByUser(user);
        int total = cartItems.stream().map(CartItem::getCount).reduce(0, Integer::sum);

        return CartResponse.builder()
                .total(total)
                .items(cartItems)
                .build();
    }

    @Override
    @Transactional
    public CartResponse addItemToCart(String email, Long itemId) {
        User user = userRepository.findByEmail(email).orElseThrow();

        Item item = itemRepository.findById(itemId).orElseThrow(() -> new NoSuchElementException("Item with id: " + itemId + " not found"));
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(new CartItemId(user.getId(), item.getId()));

        cartItemOptional.ifPresentOrElse(cartItem -> {
                    cartItem.setCount(cartItem.getCount() + 1);
                    cartItemRepository.save(cartItem);
                },
                () -> {
                    CartItem cartItem = new CartItem();
                    cartItem.setUser(user);
                    cartItem.setItem(item);
                    cartItem.setCount(1);
                    cartItemRepository.save(cartItem);
                });

        List<CartItem> cartItems = cartItemRepository.findByUser(user);
        int total = cartItems.stream().map(CartItem::getCount).reduce(0, Integer::sum);

        return CartResponse.builder()
                .items(cartItems)
                .total(total)
                .build();
    }

    @Override
    @Transactional
    public CartResponse removeItemFromCart(String email, Long itemId) {
        User user = userRepository.findByEmail(email).orElseThrow();

        Item item = itemRepository.findById(itemId).orElseThrow(() -> new NoSuchElementException("Item with id: " + itemId + " not found"));
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(new CartItemId(user.getId(), item.getId()));

        cartItemOptional.ifPresent(cartItem -> {
            if (cartItem.getCount() <= 1) {
                cartItemRepository.delete(cartItem);
            } else {
                cartItem.setCount(cartItem.getCount() - 1);
                cartItemRepository.save(cartItem);
            }
        });

        List<CartItem> cartItems = cartItemRepository.findByUser(user);
        int total = cartItems.stream().map(CartItem::getCount).reduce(0, Integer::sum);

        return CartResponse.builder()
                .items(cartItems)
                .total(total)
                .build();
    }

    @Override
    @Transactional
    public void clearCart(String email) {
        User user = userRepository.findByEmail(email).orElseThrow();
        cartItemRepository.deleteCartItemByUser(user);
    }
}
