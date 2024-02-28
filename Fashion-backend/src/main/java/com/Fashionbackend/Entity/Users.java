package com.Fashionbackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
<<<<<<< Updated upstream:Fashion-backend/src/main/java/com/Fashionbackend/Entity/Users.java
public class Users {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private  int contact;
    private int role;
    private String Address;
=======
public class Order {
    @Id
    
    private long oid;
    private long pid;
    private String color;
    private String size;
    private int quantity;
>>>>>>> Stashed changes:Fashion-backend/src/main/java/com/Fashionbackend/Entity/Order.java
}
