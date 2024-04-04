package com.dom.sprout.rest;

import com.dom.sprout.entity.CartItemGround;
import com.dom.sprout.entity.CartItemPlant;
import com.dom.sprout.entity.CartPlants;
import com.dom.sprout.entity.Plant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartResponse {
    private int total;
    private List<CartItemPlant> plants;
    private List<CartItemGround> grounds;

}
