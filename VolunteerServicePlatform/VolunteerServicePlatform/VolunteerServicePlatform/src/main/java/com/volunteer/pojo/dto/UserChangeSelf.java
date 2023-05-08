package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 14:20
 */
@Data
public class UserChangeSelf {

    private String telephone;

    @JsonProperty("avatar")
    private String image;

    private String email;

    private String sex;

    private String name;
}
