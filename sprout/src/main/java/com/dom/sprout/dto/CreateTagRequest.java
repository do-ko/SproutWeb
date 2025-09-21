package com.dom.sprout.dto;

import com.dom.sprout.constants.ValidationConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateTagRequest {
    @Schema(description = "Tag name with at most {max} characters", example = "Wet")
    @NotBlank(message = "Tag name must not be empty or contain only whitespaces")
    @Size(max = ValidationConstants.TAG_NAME_MAX_LENGTH,
            message = "Tag name has to have at most {max} characters")
    private String tagName;
}
