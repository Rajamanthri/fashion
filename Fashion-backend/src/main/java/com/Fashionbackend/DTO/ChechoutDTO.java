package com.Fashionbackend.DTO;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CheckoutDTO {
    @Id
    private int Cid;
    private String address;
    private int mobile;
    private String ShippingMethod;
}
