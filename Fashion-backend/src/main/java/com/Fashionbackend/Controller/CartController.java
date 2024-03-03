package com.Fashionbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.Fashionbackend.Service.CartService;

@RestController

public class CartController {
    @Autowired
    private CartService cartService;

    // @PreAuthorize("hasRole('User')")
    @GetMapping("/addToCart/{productId}")

    public void addToCart(@PathVariable(name = "productId") Integer productId){
        
    }
}
