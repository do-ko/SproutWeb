package com.dom.sprout.service;

import com.dom.sprout.dao.*;
import com.dom.sprout.entity.*;
import com.dom.sprout.dto.AddTagToItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PotTagsService {
    private final PotTagsRepository potTagsRepository;
    private final PotRepository potRepository;
    private final TagRepository tagRepository;

    @Autowired
    public PotTagsService(PotTagsRepository potTagsRepository, PotRepository potRepository, TagRepository tagRepository) {
        this.potTagsRepository = potTagsRepository;
        this.potRepository = potRepository;
        this.tagRepository = tagRepository;
    }

    public Pot addTagToPot(AddTagToItemRequest request) {
        Pot pot = potRepository.findById(request.getItem_id()).orElseThrow();
        Tag tag = tagRepository.findById(request.getTag_id()).orElseThrow();
        PotTags potTags = new PotTags(tag, pot);
        potTagsRepository.save(potTags);
        return potRepository.findById(request.getItem_id()).orElseThrow();
    }
}
