package com.ecommerceApp.product;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
public class product {

@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

   
    
    private String name;
   
    private int quantity;
  
    private String description;
   
    private double price;
  
    private String category;
  
    private String Image;
    
}
