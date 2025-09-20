package com.dom.sprout.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "item")
@Data
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "imgName")
    private String imgName;

    @Enumerated(EnumType.STRING)
    private ItemType itemType;

    @ManyToMany
    @JoinTable(
            name = "item_tags",
            joinColumns = @JoinColumn(name = "item_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "tag_id", nullable = false),
            uniqueConstraints = @UniqueConstraint(columnNames = {"item_id", "tag_id"})
    )
    private Set<Tag> tags = new HashSet<>();
}
