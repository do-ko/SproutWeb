package com.dom.sprout.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cart_item")
@Data
public class CartItem {

    @EmbeddedId
    private CartItemId id;

    @MapsId("userId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @MapsId("itemId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @Column(name = "count")
    private Integer count;
}
