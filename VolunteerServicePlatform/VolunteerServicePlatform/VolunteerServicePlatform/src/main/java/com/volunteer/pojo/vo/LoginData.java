package com.volunteer.pojo.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 18:47
 */
@Data
@ToString
public class LoginData {

    @JsonProperty("user_info")
    private Object userInfo;

    private String token;

}
