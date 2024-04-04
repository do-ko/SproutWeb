package com.dom.sprout.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ground_cart")
@IdClass(CartItemId.class)
public class CartGrounds {

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "ground_id", referencedColumnName = "id")
    private Ground item;

    @Column(name = "count")
    private Integer count;

    public CartGrounds() {
    }

    public CartGrounds(User user, Ground item, Integer count) {
        this.user = user;
        this.item = item;
        this.count = count;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Ground getItem() {
        return item;
    }

    public void setItem(Ground item) {
        this.item = item;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "CartGrounds{" +
                "user=" + user +
                ", item=" + item +
                ", count=" + count +
                '}';
    }
}
