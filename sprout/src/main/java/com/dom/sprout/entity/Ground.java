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
//@Table(name = "Grounds")
//public class Ground {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
//    private Integer id;
//
//    @Column(name = "ground_name", nullable = false)
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
////    private List<CartGrounds> users;
//
////    //    @JsonIgnore
////    @OneToMany(mappedBy = "item")
////    @JsonManagedReference
////    private List<GroundTags> tags;
//
//    public Ground(String name, Double price, String imgName) {
//        this.name = name;
//        this.price = price;
//        this.imgName = imgName;
//    }
//
//    @Override
//    public String toString() {
//        return "Ground{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", price=" + price +
//                ", imgName='" + imgName + '\'' +
//                '}';
//    }
//}
