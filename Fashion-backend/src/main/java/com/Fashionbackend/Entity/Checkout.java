package com.Fashionbackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Checkout {
    @Id
    @GeneratedValue

    private int cid;
    private String address;
    private int mobile;
    private String shippingmethod;

}
