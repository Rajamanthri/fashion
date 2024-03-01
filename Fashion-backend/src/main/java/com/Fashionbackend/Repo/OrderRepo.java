package com.Fashionbackend.Repo;

import com.Fashionbackend.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Integer> {
}
