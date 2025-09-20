package com.dom.sprout.auth;

import com.dom.sprout.constants.ValidationConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthenticationRequest {

    @Schema(description = "Unique email for the new user", example = "sprout@email.com")
    @NotBlank(message = "Email must not be empty or contain only whitespaces")
    @Email(message = "Email must be in a correct format")
    private String email;

    @Schema(description = "Password with at least {min} characters", example = "Password123!")
    @NotBlank(message = "Password must not be empty or contain only whitespaces")
    @Size(min = ValidationConstants.USER_PASSWORD_MIN_LENGTH,
            max = ValidationConstants.USER_PASSWORD_MAX_LENGTH,
            message = "Password has to have between {min} and {max} characters")
    private String password;
}
