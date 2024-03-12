package com.dom.sprout.entity;

import java.io.Serializable;
import java.util.Objects;

public class PlantTagId implements Serializable {

    private int plant;
    private int tag;

    public PlantTagId() {
    }

    public PlantTagId(int plant, int tag) {
        this.plant = plant;
        this.tag = tag;
    }

    public int getPlant() {
        return plant;
    }

    public void setPlant(int plant) {
        this.plant = plant;
    }

    public int getTag() {
        return tag;
    }

    public void setTag(int tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "PlantTagId{" +
                "plant=" + plant +
                ", tag=" + tag +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlantTagId that = (PlantTagId) o;
        return plant == that.plant && tag == that.tag;
    }

    @Override
    public int hashCode() {
        return Objects.hash(plant, tag);
    }
}
