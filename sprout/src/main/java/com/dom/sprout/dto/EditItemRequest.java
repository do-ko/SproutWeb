package com.dom.sprout.dto;

import com.dom.sprout.constants.ValidationConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class EditItemRequest {
    @Schema(description = "Item id", example = "1")
    @NotNull(message = "Item id is required")
    private Long id;

    @Schema(description = "Item name with at most {max} characters", example = "Aloe Vera")
    @NotBlank(message = "Item name must not be empty or contain only whitespaces")
    @Size(max = ValidationConstants.ITEM_NAME_MAX_LENGTH,
            message = "Item name has to have at most {max} characters")
    private String name;

    @NotNull(message = "Item price is required")
    @DecimalMin(value = "0.01", inclusive = true, message = "Price must be ≥ 0.01")
    @DecimalMax(value = "1000000", message = "Price must be ≤ 1000000")
    @Digits(integer = 10, fraction = 2)
    @Schema(
            description = "Item price",
            example = "12.34",
            minimum = "0.01",
            maximum = "1000000",
            multipleOf = 0.01
    )
    private BigDecimal price;
}
