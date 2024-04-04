package com.dom.sprout.rest;

import com.dom.sprout.entity.Plant;
import com.dom.sprout.service.PlantService;
import com.dom.sprout.service.PlantTagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.nio.file.Paths.get;

@RestController
@RequestMapping("/api/plants")
public class PlantController {
    private PlantService plantService;
    private PlantTagsService plantTagsService;

    @Autowired
    public PlantController(PlantService plantService, PlantTagsService plantTagsService) {
        this.plantService = plantService;
        this.plantTagsService = plantTagsService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public List<Plant> findAll(){
        return plantService.findAll();
    }

    @GetMapping("/{id}")
    public Plant findById(@PathVariable int id){
        return plantService.findById(id);
    }

    @PostMapping("")
    public Plant addPlant(@RequestBody Plant plant) {
        plant.setId(0);
        Plant plantDb = plantService.save(plant);
        plantDb.setImgName("plant_" + plantDb.getId());
        plantService.save(plantDb);
        return plantDb;
    }

    @PutMapping("")
    public Plant updatePlant(@RequestBody Plant plant){
        return plantService.save(plant);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
//        Plant plant = plantService.findById(id);
        plantService.deleteById(id);
    }

    @PostMapping("/tag")
    public ResponseEntity<Plant> addTagToPlant(@RequestBody AddTagToItemRequest request){
        return ResponseEntity.ok(plantTagsService.addTagToPlant(request));
    }

}
