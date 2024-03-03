package com.Fashionbackend.DTO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Fashionbackend.Entity.Cart;

@Repository

public interface CartDTO extends CrudRepository<Integer, Cart>{

    
} 