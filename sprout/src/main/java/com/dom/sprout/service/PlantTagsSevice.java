package com.dom.sprout.service;

import com.dom.sprout.dao.PlantRepository;
import com.dom.sprout.dao.PlantTagsRepository;
import com.dom.sprout.dao.TagRepository;
import com.dom.sprout.entity.Plant;
import com.dom.sprout.entity.PlantTags;
import com.dom.sprout.entity.Tag;
import com.dom.sprout.rest.AddTagToPlantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlantTagsSevice {
    private final PlantTagsRepository plantTagsRepository;
    private final PlantRepository plantRepository;
    private final TagRepository tagRepository;
    @Autowired
    public PlantTagsSevice(PlantTagsRepository plantTagsRepository, PlantRepository plantRepository, TagRepository tagRepository) {
        this.plantTagsRepository = plantTagsRepository;
        this.plantRepository = plantRepository;
        this.tagRepository = tagRepository;
    }

    public Plant addTagToPlant(AddTagToPlantRequest request){
        Plant plant = plantRepository.findById(request.getPlant_id()).orElseThrow();
        Tag tag = tagRepository.findById(request.getTag_id()).orElseThrow();
        PlantTags plantTags = new PlantTags(tag, plant);
        plantTagsRepository.save(plantTags);
        return plantRepository.findById(request.getPlant_id()).orElseThrow();
    }
}
