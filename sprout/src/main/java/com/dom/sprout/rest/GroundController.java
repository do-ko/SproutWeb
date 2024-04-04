package com.dom.sprout.rest;

import com.dom.sprout.entity.Ground;
import com.dom.sprout.entity.Plant;
import com.dom.sprout.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.nio.file.Paths.get;

@RestController
@RequestMapping("/api/grounds")
public class GroundController {
    private GroundService groundService;
    private GroundTagsService groundTagsService;

    @Autowired
    public GroundController(GroundService groundService, GroundTagsService groundTagsService) {
        this.groundService = groundService;
        this.groundTagsService = groundTagsService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public List<Ground> findAll(){
        return groundService.findAll();
    }

    @GetMapping("/{id}")
    public Ground findById(@PathVariable int id){
        return groundService.findById(id);
    }

    @PostMapping("")
    public Ground addGround(@RequestBody Ground ground) {
        ground.setId(0);
        Ground groundDb = groundService.save(ground);
        groundDb.setImgName("ground_" + groundDb.getId());
        groundService.save(groundDb);
        return groundDb;
    }

    @PutMapping("")
    public Ground updateGround(@RequestBody Ground ground){
        return groundService.save(ground);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        groundService.deleteById(id);
    }

    @PostMapping("/tag")
    public ResponseEntity<Ground> addTagToGround(@RequestBody AddTagToItemRequest request){
        return ResponseEntity.ok(groundTagsService.addTagToGround(request));
    }
}
