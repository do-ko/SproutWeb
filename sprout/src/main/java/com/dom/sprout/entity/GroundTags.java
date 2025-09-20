//package com.dom.sprout.entity;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "ground_tag")
//@IdClass(TagId.class)
//public class GroundTags {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "tag_id", referencedColumnName = "id")
//    private Tag tag;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "ground_id", referencedColumnName = "id")
//    @JsonBackReference
//    private Ground item;
//
//    public GroundTags(Tag tag, Ground ground) {
//        this.tag = tag;
//        this.item = ground;
//    }
//
//    public GroundTags() {
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
//    public Ground getItem() {
//        return item;
//    }
//
//    public void setItem(Ground ground) {
//        this.item = ground;
//    }
//
//    @Override
//    public String toString() {
//        return "GroundTags{" +
//                "tag=" + tag +
//                ", ground=" + item +
//                '}';
//    }
//}
