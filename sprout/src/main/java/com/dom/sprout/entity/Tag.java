package com.dom.sprout.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "tagName")
    private String tagName;

    @JsonIgnore
    @OneToMany(mappedBy = "tag")
    private List<PlantTags> plants;

    @JsonIgnore
    @OneToMany(mappedBy = "tag")
    private List<GroundTags> grounds;

    public Tag(String tagName) {
        this.tagName = tagName;
    }

    @Override
    public String toString() {
        return "Tag{" +
                "id=" + id +
                ", tagName='" + tagName + '\'' +
                '}';
    }
}
