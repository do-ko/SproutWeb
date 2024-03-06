package com.dom.sprout.entity;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

public class CartItemId implements Serializable {
    private int user;
    private int item;


    public CartItemId(int user, int item) {
        this.user = user;
        this.item = item;
    }

    public CartItemId() {
    }

    @Override
    public String toString() {
        return "CartItemId{" +
                "user=" + user +
                ", item=" + item +
                '}';
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public int getItem() {
        return item;
    }

    public void setItem(int item) {
        this.item = item;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartItemId that = (CartItemId) o;
        return user == that.user && item == that.item;
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, item);
    }
}
