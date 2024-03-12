package com.dom.sprout.service;

import com.dom.sprout.entity.Tag;

import java.util.List;


public interface TagService {
    List<Tag> findAll();
    Tag findById(int id);
    Tag save(Tag tag);
    void deleteById(int id);
}
