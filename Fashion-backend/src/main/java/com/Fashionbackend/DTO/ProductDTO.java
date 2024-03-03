package com.Fashionbackend.DTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
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


