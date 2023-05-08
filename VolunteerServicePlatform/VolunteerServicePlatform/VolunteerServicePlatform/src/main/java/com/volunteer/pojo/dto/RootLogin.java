package com.volunteer.pojo.dto;

import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 20:23
 */
@Data
public class RootLogin {

    private String username;

    private String password;

    private String role;
}
