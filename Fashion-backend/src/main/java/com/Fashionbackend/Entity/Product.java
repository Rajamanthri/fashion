package com.Fashionbackend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
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