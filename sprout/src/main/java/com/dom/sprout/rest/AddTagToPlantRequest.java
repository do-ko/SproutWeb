package com.dom.sprout.rest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddTagToPlantRequest {
    private Integer tag_id;
    private Integer plant_id;
}
