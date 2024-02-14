package com.dom.sprout.service;

import com.dom.sprout.dao.PlantRepository;
import com.dom.sprout.entity.Plant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlantServiceImpl implements PlantService {
    private final PlantRepository plantRepository;

    @Autowired
    public PlantServiceImpl(PlantRepository plantRepository){
        this.plantRepository=plantRepository;
    }

    @Override
    public List<Plant> findAll() {
        return plantRepository.findAll();
    }

    @Override
    public Plant findById(int id) {
        Optional<Plant> result = plantRepository.findById(id);
        return result.orElse(null);

    }

    @Override
    public Plant save(Plant plant) {
        return plantRepository.save(plant);
    }

    @Override
    public void deleteById(int id) {
        plantRepository.deleteById(id);
    }
}
