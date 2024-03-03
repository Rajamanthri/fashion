package com.Fashionbackend.Entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    @GeneratedValue
    private int id;
    private String name;

    private int quantity;

    private String description;

    private double price;

    private String category;

    private String Image;

}
