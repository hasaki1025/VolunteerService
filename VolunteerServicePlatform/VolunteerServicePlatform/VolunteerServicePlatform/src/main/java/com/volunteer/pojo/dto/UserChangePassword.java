package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/4 16:24
 */
@Data
public class UserChangePassword {

    @JsonProperty("pre_pass")
    private String prePassword;

    @JsonProperty("new_pass")
    private String newPassword;

    @JsonProperty("confirm_pass")
    private String confirmPassword;
}
