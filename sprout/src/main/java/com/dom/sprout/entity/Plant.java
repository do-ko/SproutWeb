package com.dom.sprout.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Plants")
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plant_id")
    private Integer plantId;

    @Column(name = "plant_name", nullable = false)
    private String plantName;

    @Column(name = "price", nullable = false, precision = 2)
    private Double price;

    public Plant(String plantName, Double price) {
        this.plantName = plantName;
        this.price = price;
    }

    public Plant() {

    }

    public Integer getPlantId() {
        return plantId;
    }

    public void setPlantId(Integer plantId) {
        this.plantId = plantId;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Plant{" +
                "plantId=" + plantId +
                ", plantName='" + plantName + '\'' +
                ", price=" + price +
                '}';
    }
}
