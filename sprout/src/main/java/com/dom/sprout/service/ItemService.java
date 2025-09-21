package com.dom.sprout.service;

import com.dom.sprout.dto.CreateItemRequest;
import com.dom.sprout.dto.EditItemRequest;
import com.dom.sprout.entity.Item;

import java.util.List;

public interface ItemService {
    List<Item> findAll();

    Item findById(Long id);

    Item addNewItem(CreateItemRequest request);

    Item editItem(EditItemRequest request);

    void deleteById(Long id);

    Item addTagToItem(Long itemId, Long tagId);
}
