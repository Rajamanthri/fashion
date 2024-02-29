package com.Fashionbackend.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long oid;
    private long pid;
    private String color;
    private String size;
    private int quantity;

}
