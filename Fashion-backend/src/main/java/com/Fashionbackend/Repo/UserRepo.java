package com.Fashionbackend.Repo;

import com.Fashionbackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {

}