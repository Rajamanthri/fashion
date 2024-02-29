package com.Fashionbackend.Entity;

import jakarta.persistence.Entity;
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
    private int Cid;
    private String address;
    private int mobile;
    private String ShippingMethod;

}
