package com.dom.sprout.rest;

import com.dom.sprout.dto.AddTagToItemRequest;
import com.dom.sprout.entity.Pot;
import com.dom.sprout.service.PotService;
import com.dom.sprout.service.PotTagsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/pots")
@Tag(name = "Pots")
public class PotController {

    private final PotService potService;
    private final PotTagsService potTagsService;

    @Operation(summary = "Get all pots",
            description = "Returns a list with all pots.")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public List<Pot> findAll() {
        return potService.findAll();
    }

    @Operation(summary = "Get a pot by id",
            description = "Returns a pot by id.")
    @GetMapping("/{id}")
    public Pot findById(@PathVariable int id) {
        return potService.findById(id);
    }

    @Operation(summary = "Create new pot",
            description = "Creates a new pot.")
    @PostMapping("")
    public Pot addPot(@RequestBody Pot pot) {
        pot.setId(0);
        Pot potDb = potService.save(pot);
        potDb.setImgName("pot_" + potDb.getId());
        potService.save(potDb);
        return potDb;
    }

    @Operation(summary = "Edits a pot",
            description = "Updates pot information.")
    @PutMapping("")
    public Pot updatePot(@RequestBody Pot pot) {
        return potService.save(pot);
    }

    @Operation(summary = "Delete a pot",
            description = "Deletes a pot by id.")
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id) {
        potService.deleteById(id);
    }

    @Operation(summary = "Add tag",
            description = "Adds tag to a pot.")
    @PostMapping("/tag")
    public ResponseEntity<Pot> addTagToGround(@RequestBody AddTagToItemRequest request) {
        return ResponseEntity.ok(potTagsService.addTagToPot(request));
    }
}
