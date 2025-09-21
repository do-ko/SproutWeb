package com.dom.sprout.rest;

import com.dom.sprout.config.JwtService;
import com.dom.sprout.dto.CartResponse;
import com.dom.sprout.entity.User;
import com.dom.sprout.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@Tag(name = "Cart")
public class CartController {
    private final CartService cartService;

    @Operation(summary = "Get cart",
            description = "Returns a cart for a specified user.")
    @GetMapping()
    public ResponseEntity<CartResponse> getCart(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(cartService.getCart(user.getEmail()));
    }

    @Operation(summary = "Add item to cart",
            description = "Adds item to cart.")
    @PostMapping("/add/{itemId}")
    public ResponseEntity<CartResponse> addItemToCart(@AuthenticationPrincipal User user,
                                                      @PathVariable Long itemId) {
        return ResponseEntity.ok(cartService.addItemToCart(user.getEmail(), itemId));
    }

    @Operation(summary = "Remove item from cart",
            description = "Removes item from cart.")
    @PostMapping("/remove/{itemId}")
    public ResponseEntity<CartResponse> removeItemFromCart(@AuthenticationPrincipal User user,
                                                           @PathVariable Long itemId) {
        return ResponseEntity.ok(cartService.removeItemFromCart(user.getEmail(), itemId));
    }

    @Operation(summary = "Clear cart",
            description = "Clears items from cart.")
    @DeleteMapping("/clear")
    public ResponseEntity<?> clearCart(@AuthenticationPrincipal User user) {
        cartService.clearCart(user.getEmail());
        return ResponseEntity.noContent().build();
    }
}
