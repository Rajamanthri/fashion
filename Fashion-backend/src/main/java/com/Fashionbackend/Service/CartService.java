package com.Fashionbackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Fashionbackend.DTO.CartDTO;
import com.Fashionbackend.DTO.ProductDTO;
import com.Fashionbackend.Entity.Cart;
import com.Fashionbackend.Entity.Product;

@Service

public class CartService {

    @Autowired
    private CartDTO cartDTO;

    @Autowired
    private ProductDTO productDTO;

    public void addToCart(Integer productId){
    //    Product product = productDTO.findById(productId).get();

    }
    
}
