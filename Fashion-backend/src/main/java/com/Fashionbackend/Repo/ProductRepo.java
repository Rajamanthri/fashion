package com.Fashionbackend.Repo;

import com.Fashionbackend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Integer> {
}
