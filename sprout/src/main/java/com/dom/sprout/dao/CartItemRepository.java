package com.dom.sprout.dao;

import com.dom.sprout.entity.CartItem;
import com.dom.sprout.entity.CartItemId;
import com.dom.sprout.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, CartItemId> {
    List<CartItem> findByUser(User user);
    void deleteCartItemByUser(User user);
}
