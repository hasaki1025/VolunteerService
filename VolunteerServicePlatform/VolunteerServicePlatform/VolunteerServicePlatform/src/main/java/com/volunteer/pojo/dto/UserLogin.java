package com.volunteer.pojo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 12:38
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLogin {

    private String username;

    private String password;

}
