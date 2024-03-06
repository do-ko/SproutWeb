package com.dom.sprout.rest;

import com.dom.sprout.config.JwtService;
import com.dom.sprout.entity.Plant;
import com.dom.sprout.service.PlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plants")
public class PlantController {
    private PlantService plantService;

    @Autowired
    public PlantController(PlantService plantService) {
        this.plantService = plantService;
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
    public Plant addPlant(@RequestBody Plant plant){
        plant.setId(0);
        return plantService.save(plant);
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

}
