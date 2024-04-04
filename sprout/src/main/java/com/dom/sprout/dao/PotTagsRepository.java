package com.dom.sprout.dao;

import com.dom.sprout.entity.PotTags;
import com.dom.sprout.entity.TagId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PotTagsRepository extends JpaRepository<PotTags, TagId> {
}
