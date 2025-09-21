package com.dom.sprout.rest;

import com.dom.sprout.dto.AddTagToItemRequest;
import com.dom.sprout.dto.CreateItemRequest;
import com.dom.sprout.dto.EditItemRequest;
import com.dom.sprout.entity.Item;
import com.dom.sprout.entity.ItemType;
import com.dom.sprout.service.ItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/items")
@Tag(name = "Items")
public class ItemController {

    private final ItemService itemService;

    @Operation(summary = "Get all items",
            description = "Returns a list with all items of selected category.")
    @GetMapping
    public ResponseEntity<?> getAllItems(@RequestParam(required = false) ItemType itemType) {
        return ResponseEntity.ok(itemService.findAll());
    }

    @Operation(summary = "Get a item by id",
            description = "Returns an item by id.")
    @GetMapping("/{id}")
    public Item findById(@PathVariable Long id) {
        return itemService.findById(id);
    }

    @Operation(summary = "Create new item",
            description = "Creates a new item.")
    @PostMapping()
    public Item addItem(@Valid @RequestBody CreateItemRequest request) {
        return itemService.addNewItem(request);
    }

    @Operation(summary = "Edits an item",
            description = "Updates item information.")
    @PutMapping()
    public Item updateItem(@Valid @RequestBody EditItemRequest request) {
        return itemService.editItem(request);
    }

    @Operation(summary = "Delete an item",
            description = "Deletes an item by id.")
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        itemService.deleteById(id);
    }

    @Operation(summary = "Add tag",
            description = "Adds tag to an item.")
    @PostMapping("/tag")
    public ResponseEntity<Item> addTagToPlant(@RequestBody AddTagToItemRequest request) {
        return ResponseEntity.ok(itemService.addTagToItem(request.getItemId(), request.getTagId()));
    }

}
