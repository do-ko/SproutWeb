package com.dom.sprout.service;

import com.dom.sprout.dao.GroundRepository;
import com.dom.sprout.entity.Ground;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroundServiceImpl implements GroundService {
    private final GroundRepository groundRepository;

    @Autowired
    public GroundServiceImpl(GroundRepository groundRepository) {
        this.groundRepository = groundRepository;
    }

    @Override
    public List<Ground> findAll() {
        return groundRepository.findAll();
    }

    @Override
    public Ground findById(int id) {
        Optional<Ground> result = groundRepository.findById(id);
        return result.orElse(null);

    }

    @Override
    public Ground save(Ground ground) {
        return groundRepository.save(ground);
    }

    @Override
    public void deleteById(int id) {
        groundRepository.deleteById(id);
    }
}
