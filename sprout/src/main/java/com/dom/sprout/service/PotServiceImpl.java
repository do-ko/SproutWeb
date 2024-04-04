package com.dom.sprout.service;

import com.dom.sprout.dao.PotRepository;
import com.dom.sprout.entity.Pot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PotServiceImpl implements PotService {
    private final PotRepository potRepository;

    @Autowired
    public PotServiceImpl(PotRepository potRepository) {
        this.potRepository = potRepository;
    }

    @Override
    public List<Pot> findAll() {
        return potRepository.findAll();
    }

    @Override
    public Pot findById(int id) {
        Optional<Pot> result = potRepository.findById(id);
        return result.orElse(null);

    }

    @Override
    public Pot save(Pot pot) {
        return potRepository.save(pot);
    }

    @Override
    public void deleteById(int id) {
        potRepository.deleteById(id);
    }
}
