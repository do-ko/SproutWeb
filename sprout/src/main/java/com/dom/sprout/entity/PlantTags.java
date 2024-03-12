package com.dom.sprout.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "plant_tag")
@IdClass(PlantTagId.class)
public class PlantTags {

    @Id
    @ManyToOne
    @JoinColumn(name = "tag_id", referencedColumnName = "id")
    private Tag tag;

    @Id
    @ManyToOne
    @JoinColumn(name = "plant_id", referencedColumnName = "id")
    @JsonBackReference
    private Plant plant;

    public PlantTags(Tag tag, Plant plant) {
        this.tag = tag;
        this.plant = plant;
    }

    public PlantTags() {

    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    public Plant getPlant() {
        return plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    @Override
    public String toString() {
        return "PlantTags{" +
                "tag=" + tag +
                ", plant=" + plant +
                '}';
    }
}
