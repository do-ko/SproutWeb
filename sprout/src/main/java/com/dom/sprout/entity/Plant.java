package com.dom.sprout.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Plants")
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "plant_name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "imgName")
    private String imgName;

    @JsonIgnore
    @OneToMany(mappedBy = "item")
    private List<CartPlants> users;

//    @JsonIgnore
    @OneToMany(mappedBy = "plant")
    @JsonManagedReference
    private List<PlantTags> tags;

    public Plant(String name, Double price, String imgName) {
        this.name = name;
        this.price = price;
        this.imgName = imgName;
    }

    @Override
    public String toString() {
        return "Plant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", imgName='" + imgName + '\'' +
                '}';
    }
}
