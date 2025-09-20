//package com.dom.sprout.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import jakarta.persistence.*;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Data
//@NoArgsConstructor
//@Entity
//@Table(name = "Pots")
//public class Pot {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Integer id;
//
//    @Column(name = "pot_name", nullable = false)
//    private String name;
//
//    @Column(name = "price", nullable = false)
//    private Double price;
//
//    @Column(name = "imgName")
//    private String imgName;
//
////    @JsonIgnore
////    @OneToMany(mappedBy = "item")
////    private List<CartPots> users;
//
//    //    @JsonIgnore
//    @OneToMany(mappedBy = "item")
//    @JsonManagedReference
//    private List<PotTags> tags;
//
//    public Pot(String name, Double price, String imgName) {
//        this.name = name;
//        this.price = price;
//        this.imgName = imgName;
//    }
//
//    @Override
//    public String toString() {
//        return "Pot{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", price=" + price +
//                ", imgName='" + imgName + '\'' +
//                '}';
//    }
//}
