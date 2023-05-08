package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 19:26
 */
@Data
public class UserCommentInfo {

    @JsonProperty("avatar")
    private String image;

    private String content;

    @JsonProperty("c_id")
    private Integer commentId;

    @JsonProperty("username")
    private String username;
}
