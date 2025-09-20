//package com.dom.sprout.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "pot_cart")
//@IdClass(CartItemId.class)
//public class CartPots {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private User user;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "pot_id", referencedColumnName = "id")
//    private Pot item;
//
//    @Column(name = "count")
//    private Integer count;
//
//    public CartPots() {
//    }
//
//    public CartPots(User user, Pot item, Integer count) {
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
//    public Pot getItem() {
//        return item;
//    }
//
//    public void setItem(Pot item) {
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
//        return "CartPots{" +
//                "user=" + user +
//                ", item=" + item +
//                ", count=" + count +
//                '}';
//    }
//}
