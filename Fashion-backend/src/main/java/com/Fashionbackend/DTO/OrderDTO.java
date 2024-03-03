package com.Fashionbackend.DTO;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDTO {
    @Id
    private int oid;
    private int pid;
    private int quantity;
}
