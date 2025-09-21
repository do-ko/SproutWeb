package com.dom.sprout.service;

import com.dom.sprout.dto.CartResponse;

public interface CartService {
    CartResponse getCart(String email);
    CartResponse addItemToCart(String email, Long itemId);
    CartResponse removeItemFromCart(String email, Long itemId);
    void clearCart(String email);
}
