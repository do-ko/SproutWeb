//package com.dom.sprout.rest;
//
//import com.dom.sprout.dto.AddTagToItemRequest;
//import com.dom.sprout.entity.Plant;
//import com.dom.sprout.service.PlantService;
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.tags.Tag;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/plants")
//@RequiredArgsConstructor
//@Tag(name = "Plants")
//public class PlantController {
//
//    private final PlantService plantService;
////    private final PlantTagsService plantTagsService;
//
//    @Operation(summary = "Get all plants",
//            description = "Returns a list with all plants.")
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("")
//    public List<Plant> findAll() {
//        return plantService.findAll();
//    }
//
//    @Operation(summary = "Get a plant by id",
//            description = "Returns a plant by id.")
//    @GetMapping("/{id}")
//    public Plant findById(@PathVariable int id) {
//        return plantService.findById(id);
//    }
//
//    @Operation(summary = "Create new plant",
//            description = "Creates a new plant.")
//    @PostMapping()
//    public Plant addPlant(@RequestBody Plant plant) {
//        plant.setId(0);
//        Plant plantDb = plantService.save(plant);
//        plantDb.setImgName("plant_" + plantDb.getId());
//        plantService.save(plantDb);
//        return plantDb;
//    }
//
//    @Operation(summary = "Edits a plant",
//            description = "Updates plant information.")
//    @PutMapping("")
//    public Plant updatePlant(@RequestBody Plant plant) {
//        return plantService.save(plant);
//    }
//
//    @Operation(summary = "Delete a plant",
//            description = "Deletes a plant by id.")
//    @DeleteMapping("/{id}")
//    public void deleteById(@PathVariable int id) {
//        plantService.deleteById(id);
//    }
//
////    @Operation(summary = "Add tag",
////            description = "Adds tag to a plant.")
////    @PostMapping("/tag")
////    public ResponseEntity<Plant> addTagToPlant(@RequestBody AddTagToItemRequest request) {
////        return ResponseEntity.ok(plantTagsService.addTagToPlant(request));
////    }
//
//}
