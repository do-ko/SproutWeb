//package com.dom.sprout.rest;
//
//import com.dom.sprout.dto.AddTagToItemRequest;
//import com.dom.sprout.entity.Ground;
//import com.dom.sprout.service.GroundService;
//import io.swagger.v3.oas.annotations.Operation;
//import io.swagger.v3.oas.annotations.tags.Tag;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/grounds")
//@RequiredArgsConstructor
//@Tag(name = "Grounds")
//public class GroundController {
//
//    private final GroundService groundService;
////    private final GroundTagsService groundTagsService;
//
//    @Operation(summary = "Get all grounds",
//            description = "Returns a list with all grounds.")
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping("")
//    public List<Ground> findAll() {
//        return groundService.findAll();
//    }
//
//    @Operation(summary = "Get a ground by id",
//            description = "Returns a ground by id.")
//    @GetMapping("/{id}")
//    public Ground findById(@PathVariable int id) {
//        return groundService.findById(id);
//    }
//
//    @Operation(summary = "Create new ground",
//            description = "Creates a new ground.")
//    @PostMapping("")
//    public Ground addGround(@RequestBody Ground ground) {
//        ground.setId(0);
//        Ground groundDb = groundService.save(ground);
//        groundDb.setImgName("ground_" + groundDb.getId());
//        groundService.save(groundDb);
//        return groundDb;
//    }
//
//    @Operation(summary = "Edits a ground",
//            description = "Updates ground information.")
//    @PutMapping("")
//    public Ground updateGround(@RequestBody Ground ground) {
//        return groundService.save(ground);
//    }
//
//    @Operation(summary = "Delete a ground",
//            description = "Deletes a plant by ground.")
//    @DeleteMapping("/{id}")
//    public void deleteById(@PathVariable int id) {
//        groundService.deleteById(id);
//    }
//
////    @Operation(summary = "Add tag",
////            description = "Adds tag to a ground.")
////    @PostMapping("/tag")
////    public ResponseEntity<Ground> addTagToGround(@RequestBody AddTagToItemRequest request) {
////        return ResponseEntity.ok(groundTagsService.addTagToGround(request));
////    }
//}
