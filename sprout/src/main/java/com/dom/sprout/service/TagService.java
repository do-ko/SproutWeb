package com.dom.sprout.service;

import com.dom.sprout.dto.CreateTagRequest;
import com.dom.sprout.dto.EditTagRequest;
import com.dom.sprout.entity.Tag;

import java.util.List;


public interface TagService {
    List<Tag> findAll();
    Tag findById(Long id);
    Tag createNewTag(CreateTagRequest request);
    Tag editTag(EditTagRequest request);
    void deleteById(Long id);
}
