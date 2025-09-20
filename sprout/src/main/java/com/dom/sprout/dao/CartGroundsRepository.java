//package com.dom.sprout.dao;
//
//import com.dom.sprout.entity.CartGrounds;
//import com.dom.sprout.entity.CartItemId;
//import com.dom.sprout.entity.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public interface CartGroundsRepository extends JpaRepository<CartGrounds, CartItemId> {
//    List<CartGrounds> findByUser(User user);
//    void deleteCartGroundsByUser(User user);
//}
