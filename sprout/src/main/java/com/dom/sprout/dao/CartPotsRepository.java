package com.dom.sprout.dao;

import com.dom.sprout.entity.CartItemId;
import com.dom.sprout.entity.CartPots;
import com.dom.sprout.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartPotsRepository extends JpaRepository<CartPots, CartItemId> {
    List<CartPots> findByUser(User user);

    void deleteCartPotsByUser(User user);
}
