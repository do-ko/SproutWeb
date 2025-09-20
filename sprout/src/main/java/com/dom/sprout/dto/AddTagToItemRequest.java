package com.dom.sprout.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddTagToItemRequest {
    private Integer tag_id;
    private Integer item_id;
}
