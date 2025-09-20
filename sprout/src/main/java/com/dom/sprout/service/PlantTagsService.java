//package com.dom.sprout.service;
//
//import com.dom.sprout.dao.PlantRepository;
//import com.dom.sprout.dao.PlantTagsRepository;
//import com.dom.sprout.dao.TagRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class PlantTagsService {
//    private final PlantTagsRepository plantTagsRepository;
//    private final PlantRepository plantRepository;
//    private final TagRepository tagRepository;
//
//    @Autowired
//    public PlantTagsService(PlantTagsRepository plantTagsRepository, PlantRepository plantRepository, TagRepository tagRepository) {
//        this.plantTagsRepository = plantTagsRepository;
//        this.plantRepository = plantRepository;
//        this.tagRepository = tagRepository;
//    }
//
////    public Plant addTagToPlant(AddTagToItemRequest request) {
////        Plant plant = plantRepository.findById(request.getItem_id()).orElseThrow();
////        Tag tag = tagRepository.findById(request.getTag_id()).orElseThrow();
////        PlantTags plantTags = new PlantTags(tag, plant);
////        plantTagsRepository.save(plantTags);
////        return plantRepository.findById(request.getItem_id()).orElseThrow();
////    }
//}
