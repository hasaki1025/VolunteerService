package com.volunteer.pojo.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description 用户注册类
 * @date 2023/1/29 11:16
 */
@Data
@ApiModel(description = "用户注册")
public class UserRegister {

    @ApiModelProperty(value = "用户名",required = true)
    private String username;

    @ApiModelProperty(value = "密码",required = true)
    private String password;

    @ApiModelProperty(value = "电话号码",required = true)
    private String telephone;

    @ApiModelProperty(value = "邮箱",required = true)
    private String email;

    @ApiModelProperty(value = "性别",required = true)
    private String sex;

    @ApiModelProperty(value = "姓名",required = true)
    private String name;

}
