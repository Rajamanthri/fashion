package com.Fashionbackend.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    @Id
    private int productId;

    private String pname;

    private int pstock;

    private long pprize;

    private String ptype;

    private String pimg;

}
