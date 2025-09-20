//package com.dom.sprout.entity;
//
//import com.fasterxml.jackson.annotation.JsonBackReference;
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "pot_tag")
//@IdClass(TagId.class)
//public class PotTags {
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "tag_id", referencedColumnName = "id")
//    private Tag tag;
//
//    @Id
//    @ManyToOne
//    @JoinColumn(name = "pot_id", referencedColumnName = "id")
//    @JsonBackReference
//    private Pot item;
//
//    public PotTags(Tag tag, Pot pot) {
//        this.tag = tag;
//        this.item = pot;
//    }
//
//    public PotTags() {
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
//    public Pot getItem() {
//        return item;
//    }
//
//    public void setItem(Pot pot) {
//        this.item = pot;
//    }
//
//    @Override
//    public String toString() {
//        return "PotTags{" +
//                "tag=" + tag +
//                ", pot=" + item +
//                '}';
//    }
//}
