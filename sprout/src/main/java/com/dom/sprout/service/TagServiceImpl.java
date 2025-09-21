package com.dom.sprout.service;

import com.dom.sprout.dao.TagRepository;
import com.dom.sprout.dto.CreateTagRequest;
import com.dom.sprout.dto.EditTagRequest;
import com.dom.sprout.entity.Tag;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagService {
    private final TagRepository tagRepository;

    @Autowired
    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public List<Tag> findAll() {
        return tagRepository.findAll();
    }

    @Override
    public Tag findById(Long id) {
        return tagRepository.findById(id).orElseThrow(() -> new RuntimeException("Tag with id: " + id + " not found"));
    }

    @Override
    @Transactional
    public Tag createNewTag(CreateTagRequest request) {
        Tag tag = new Tag();
        tag.setTagName(request.getTagName());
        return tagRepository.save(tag);
    }

    @Override
    @Transactional
    public Tag editTag(EditTagRequest request) {
        Tag tag = findById(request.getId());
        tag.setTagName(request.getTagName());
        return tagRepository.save(tag);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        tagRepository.deleteById(id);
    }
}
