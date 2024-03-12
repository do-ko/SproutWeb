package com.dom.sprout.dao;

import com.dom.sprout.entity.PlantTagId;
import com.dom.sprout.entity.PlantTags;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantTagsRepository extends JpaRepository<PlantTags, PlantTagId> {
}
