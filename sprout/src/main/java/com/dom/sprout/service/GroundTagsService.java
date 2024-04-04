package com.dom.sprout.service;

import com.dom.sprout.dao.GroundRepository;
import com.dom.sprout.dao.GroundTagsRepository;
import com.dom.sprout.dao.TagRepository;
import com.dom.sprout.entity.Ground;
import com.dom.sprout.entity.GroundTags;
import com.dom.sprout.entity.Tag;
import com.dom.sprout.rest.AddTagToItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroundTagsService {
    private final GroundTagsRepository groundTagsRepository;
    private final GroundRepository groundRepository;
    private final TagRepository tagRepository;

    @Autowired
    public GroundTagsService(GroundTagsRepository groundTagsRepository, GroundRepository groundRepository, TagRepository tagRepository) {
        this.groundTagsRepository = groundTagsRepository;
        this.groundRepository = groundRepository;
        this.tagRepository = tagRepository;
    }

    public Ground addTagToGround(AddTagToItemRequest request) {
        Ground ground = groundRepository.findById(request.getItem_id()).orElseThrow();
        Tag tag = tagRepository.findById(request.getTag_id()).orElseThrow();
        GroundTags groundTags = new GroundTags(tag, ground);
        groundTagsRepository.save(groundTags);
        return groundRepository.findById(request.getItem_id()).orElseThrow();
    }
}
