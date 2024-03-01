package com.Fashionbackend.Repo;

import com.Fashionbackend.Entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRepo extends JpaRepository<Checkout,Integer> {
}
