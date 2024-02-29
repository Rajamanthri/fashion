package com.Fashionbackend.Entity;

<<<<<<< Updated upstream
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
=======
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
    private int pid;

    private String pname;

    private int pstock;

    private long pprize;

    private String ptype;

    private String pimg;

}
