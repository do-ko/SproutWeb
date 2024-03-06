package com.dom.sprout.entity;

public class CartItemPlant {
    private int user_id;
    private Plant plant;
    private int count;

    public CartItemPlant(int user_id, Plant plant, int count) {
        this.user_id = user_id;
        this.plant = plant;
        this.count = count;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public Plant getPlant() {
        return plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
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
                ", plant=" + plant +
                ", count=" + count +
                '}';
    }
}
