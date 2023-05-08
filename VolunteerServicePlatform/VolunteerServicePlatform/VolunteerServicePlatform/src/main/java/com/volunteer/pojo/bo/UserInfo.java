package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 21:53
 */
@Data
public class UserInfo {

    @JsonProperty("u_id")
    private Integer userId;

    private String username;

    private String password;

    private String email;

    private String sex;

    private String name;

    @JsonProperty("avatar")
    private String image;

    private String telephone;
}
