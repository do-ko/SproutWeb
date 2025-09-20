//package com.dom.sprout.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "plant_cart")
//@IdClass(CartItemId.class)
//public class CartPlants {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private User user;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "plant_id", referencedColumnName = "id")
//    private Plant item;
//
//    @Column(name = "count")
//    private Integer count;
//
//    public CartPlants() {
//    }
//
//    public CartPlants(User user, Plant item, Integer count) {
//        this.user = user;
//        this.item = item;
//        this.count = count;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Plant getItem() {
//        return item;
//    }
//
//    public void setItem(Plant item) {
//        this.item = item;
//    }
//
//    public Integer getCount() {
//        return count;
//    }
//
//    public void setCount(Integer count) {
//        this.count = count;
//    }
//
//    @Override
//    public String toString() {
//        return "CartPlants{" +
//                "user=" + user +
//                ", item=" + item +
//                ", count=" + count +
//                '}';
//    }
//}
