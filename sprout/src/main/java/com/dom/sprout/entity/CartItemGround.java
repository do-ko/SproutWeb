package com.dom.sprout.entity;

public class CartItemGround {
    private int user_id;
    private Ground ground;
    private int count;

    public CartItemGround(int user_id, Ground ground, int count) {
        this.user_id = user_id;
        this.ground = ground;
        this.count = count;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public Ground getGround() {
        return ground;
    }

    public void setGround(Ground ground) {
        this.ground = ground;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "CartItemPlant{" +
                "user_id=" + user_id +
                ", ground=" + ground +
                ", count=" + count +
                '}';
    }
}
