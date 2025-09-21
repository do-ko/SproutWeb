package com.dom.sprout.rest;

import com.dom.sprout.dto.CreateTagRequest;
import com.dom.sprout.dto.EditTagRequest;
import com.dom.sprout.entity.Tag;
import com.dom.sprout.service.TagService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tags")
@io.swagger.v3.oas.annotations.tags.Tag(name = "Tags")
public class TagController {

    private final TagService tagService;

    @Operation(summary = "Get all tags",
            description = "Returns a list with all tags.")
    @GetMapping("")
    public List<Tag> findAll() {
        return tagService.findAll();
    }

    @Operation(summary = "Get a tag by id",
            description = "Returns a tag by id.")
    @GetMapping("/{id}")
    public Tag findById(@PathVariable Long id) {
        return tagService.findById(id);
    }

    @Operation(summary = "Create new tag",
            description = "Creates a new tag.")
    @PostMapping("")
    public Tag addTag(@Valid @RequestBody CreateTagRequest request) {
        return tagService.createNewTag(request);
    }

    @Operation(summary = "Edits a tag",
            description = "Updates tag information.")
    @PutMapping("")
    public Tag updateTag(@Valid @RequestBody EditTagRequest request) {
        return tagService.editTag(request);
    }

    @Operation(summary = "Delete a tag",
            description = "Deletes a tag by id.")
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        tagService.deleteById(id);
    }

}
