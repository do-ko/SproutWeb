package com.dom.sprout.rest;

import com.dom.sprout.config.JwtService;
import com.dom.sprout.dto.CartItemRequest;
import com.dom.sprout.dto.CartResponse;
import com.dom.sprout.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@Tag(name = "Cart")
public class CartController {

    private final CartService cartService;
    private final JwtService jwtService;

    @Operation(summary = "Get cart",
            description = "Returns a cart for a specified user.")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity<CartResponse> getCart(@RequestHeader("Authorization") String token){
        String email = jwtService.extractUsername(token.substring(7));
        return ResponseEntity.ok(cartService.getCart(email));
    }

    @Operation(summary = "Add item to cart",
            description = "Adds item to cart.")
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<CartResponse> addItemToCart(@RequestHeader("Authorization") String token, @RequestBody CartItemRequest request){
        String email = jwtService.extractUsername(token.substring(7));
        return ResponseEntity.ok(cartService.addItemToCart(email, request));
    }

    @Operation(summary = "Remove item from cart",
            description = "Removes item from cart.")
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/remove")
    public ResponseEntity<CartResponse> removeItemFromCart(@RequestHeader("Authorization") String token, @RequestBody CartItemRequest request){
        String email = jwtService.extractUsername(token.substring(7));
        return ResponseEntity.ok(cartService.removeItemFromCart(email, request));
    }

    @Operation(summary = "Clear cart",
            description = "Clears items from cart.")
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/clear")
    public ResponseEntity<?> clearCart(@RequestHeader("Authorization") String token){
        String email = jwtService.extractUsername(token.substring(7));
        cartService.clearCart(email);
        return ResponseEntity.noContent().build();
    }
}
