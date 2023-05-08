package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 13:23
 */
@Data
public class ActivityCommentInfo {

    @JsonProperty("avatar")
    private String image;

    @JsonProperty("c_id")
    private Integer activityCommentId;

    @JsonProperty("username")
    private String username;

    @JsonProperty("content")
    private String content;
}
