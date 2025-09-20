//package com.dom.sprout.entity;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "plant_tag")
//@IdClass(TagId.class)
//public class PlantTags {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "tag_id", referencedColumnName = "id")
//    private Tag tag;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "plant_id", referencedColumnName = "id")
//    @JsonBackReference
//    private Plant item;
//
//    public PlantTags(Tag tag, Plant plant) {
//        this.tag = tag;
//        this.item = plant;
//    }
//
//    public PlantTags() {
//
//    }
//
//    public Tag getTag() {
//        return tag;
//    }
//
//    public void setTag(Tag tag) {
//        this.tag = tag;
//    }
//
//    public Plant getItem() {
//        return item;
//    }
//
//    public void setItem(Plant plant) {
//        this.item = plant;
//    }
//
//    @Override
//    public String toString() {
//        return "PlantTags{" +
//                "tag=" + tag +
//                ", plant=" + item +
//                '}';
//    }
//}
