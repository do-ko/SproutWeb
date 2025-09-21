package com.dom.sprout.service;

import com.dom.sprout.dao.ItemRepository;
import com.dom.sprout.dto.CreateItemRequest;
import com.dom.sprout.dto.EditItemRequest;
import com.dom.sprout.entity.Item;
import com.dom.sprout.entity.Tag;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{

    private final ItemRepository itemRepository;
    private final TagService tagService;

    @Override
    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    @Override
    public Item findById(Long id) {
        return itemRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Item with id: " + id + " not found."));
    }

    @Override
    @Transactional
    public Item addNewItem(CreateItemRequest request) {
        Item item = new Item();
        item.setName(request.getName());
        item.setPrice(request.getPrice());
        item.setItemType(request.getItemType());
        Item itemDb = itemRepository.save(item);
        itemDb.setImgName("item_" + itemDb.getId());
        return itemRepository.save(itemDb);
    }

    @Override
    @Transactional
    public Item editItem(EditItemRequest request) {
        Item item = findById(request.getId());
        item.setName(request.getName());
        item.setPrice(request.getPrice());
        return itemRepository.save(item);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        itemRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Item addTagToItem(Long itemId, Long tagId) {
        Item item = findById(itemId);
        Tag tag = tagService.findById(tagId);

        item.getTags().add(tag);

        return itemRepository.save(item);
    }
}
