package com.dom.sprout.rest;

import com.dom.sprout.entity.Ground;
import com.dom.sprout.entity.Pot;
import com.dom.sprout.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.nio.file.Paths.get;

@RestController
@RequestMapping("/api/pots")
public class PotController {
    private PotService potService;
    private PotTagsService potTagsService;

    @Autowired
    public PotController(PotService potService, PotTagsService potTagsService) {
        this.potService = potService;
        this.potTagsService = potTagsService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public List<Pot> findAll(){
        return potService.findAll();
    }

    @GetMapping("/{id}")
    public Pot findById(@PathVariable int id){
        return potService.findById(id);
    }

    @PostMapping("")
    public Pot addPot(@RequestBody Pot pot) {
        pot.setId(0);
        Pot potDb = potService.save(pot);
        potDb.setImgName("pot_" + potDb.getId());
        potService.save(potDb);
        return potDb;
    }

    @PutMapping("")
    public Pot updatePot(@RequestBody Pot pot){
        return potService.save(pot);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        potService.deleteById(id);
    }

    @PostMapping("/tag")
    public ResponseEntity<Pot> addTagToGround(@RequestBody AddTagToItemRequest request){
        return ResponseEntity.ok(potTagsService.addTagToPot(request));
    }
}
