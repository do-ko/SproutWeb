package com.dom.sprout.rest;

import com.dom.sprout.config.JwtService;
import com.dom.sprout.entity.Plant;
import com.dom.sprout.service.PlantService;
import com.dom.sprout.service.PlantTagsSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.List;

import static java.nio.file.Paths.get;

@RestController
@RequestMapping("/api/plants")
public class PlantController {
    private PlantService plantService;
    private PlantTagsSevice plantTagsSevice;

    @Autowired
    public PlantController(PlantService plantService, PlantTagsSevice plantTagsSevice) {
        this.plantService = plantService;
        this.plantTagsSevice = plantTagsSevice;
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
    public ResponseEntity<Plant> addTagToPlant(@RequestBody AddTagToPlantRequest request){
        return ResponseEntity.ok(plantTagsSevice.addTagToPlant(request));
    }

}
