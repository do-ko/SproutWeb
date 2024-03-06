package com.dom.sprout.dao;

import com.dom.sprout.entity.Plant;
import com.dom.sprout.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}
