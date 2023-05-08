package com.volunteer.pojo.po;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("u_id")
    private Integer userId;

    @JsonProperty("username")
    private String username;

    private String password;

    @JsonProperty("name")
    private String name;

    @JsonIgnore
    private String identityNum;

    @JsonProperty("avatar")
    private String image;

    @JsonIgnore
    private Double serverTime;

    private String sex;

    private String telephone;

    private String email;


}
