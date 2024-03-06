package com.dom.sprout.rest;

import com.dom.sprout.config.JwtService;
import com.dom.sprout.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;
    private final JwtService jwtService;


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity<CartResponse> getCart(@RequestHeader("Authorization") String token){
        String email = jwtService.extractUsername(token.substring(7));
        return ResponseEntity.ok(cartService.getCart(email));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<CartResponse> addItemToCart(@RequestHeader("Authorization") String token, @RequestBody AddItemRequest request){
        String email = jwtService.extractUsername(token.substring(7));
        return ResponseEntity.ok(cartService.addItemToCart(email, request));
    }

//    @GetMapping("/test")
//    public void test(@RequestHeader("Authorization") String token){
//        String email = jwtService.extractUsername(token.substring(7));
//        System.out.println(email);
//    }
}
