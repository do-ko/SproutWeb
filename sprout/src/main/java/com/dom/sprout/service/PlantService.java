package com.dom.sprout.service;

import com.dom.sprout.entity.Plant;

import java.util.List;
import java.util.Optional;

public interface PlantService {
    List<Plant> findAll();
    Plant findById(int id);
    Plant save(Plant plant);
    void deleteById(int id);
}
