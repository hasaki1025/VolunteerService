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
public class UserChange {

    private String telephone;

    @JsonProperty("avatar")
    private String image;

    private String email;

    private String sex;

    @JsonProperty("uId")
    private Integer userId;

    private String name;

    private String password;

    public UserChange(){}

    public UserChange(UserChangeSelf userChangeSelf,Integer uid){
        this.email = userChangeSelf.getEmail();
        this.sex = userChangeSelf.getSex();
        this.image = userChangeSelf.getImage();
        this.telephone = userChangeSelf.getTelephone();
        this.userId = uid;
    }
}
