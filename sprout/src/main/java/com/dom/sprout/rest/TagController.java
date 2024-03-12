package com.dom.sprout.rest;

import com.dom.sprout.entity.Plant;
import com.dom.sprout.entity.Tag;
import com.dom.sprout.service.PlantService;
import com.dom.sprout.service.TagService;
import com.dom.sprout.service.TagServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tags")
public class TagController {
    private final TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("")
    public List<Tag> findAll(){
        return tagService.findAll();
    }

    @GetMapping("/{id}")
    public Tag findById(@PathVariable int id){
        return tagService.findById(id);
    }

    @PostMapping("")
    public Tag addTag(@RequestBody Tag tag) {
        tag.setId(0);
        return tagService.save(tag);
    }

    @PutMapping("")
    public Tag updateTag(@RequestBody Tag tag){
        return tagService.save(tag);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        tagService.deleteById(id);
    }

}
