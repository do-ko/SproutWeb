//package com.dom.sprout.dao;
//
//import com.dom.sprout.entity.CartItemId;
//import com.dom.sprout.entity.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//
//public interface CartPlantsRepository extends JpaRepository<CartPlants, CartItemId> {
//    List<CartPlants> findByUser(User user);
//    void deleteCartPlantsByUser(User user);
//}
