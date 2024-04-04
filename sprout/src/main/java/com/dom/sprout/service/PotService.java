package com.dom.sprout.service;

import com.dom.sprout.entity.Pot;

import java.util.List;

public interface PotService {
    List<Pot> findAll();

    Pot findById(int id);

    Pot save(Pot pot);

    void deleteById(int id);
}
