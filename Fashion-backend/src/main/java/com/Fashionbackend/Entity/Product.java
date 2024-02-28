package com.Fashionbackend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    @Column(name = "P_id")
    private long pid;
    @Column(name = "Pname")
    private String pname;
    @Column(name = "PinStock")
    private int pstock;
    @Column(name = "Pprize")
    private long pprize;
    @Column(name = "Ptype")
    private String ptype;
    @Column(name = "Ppic")
    private String pimg;

}
