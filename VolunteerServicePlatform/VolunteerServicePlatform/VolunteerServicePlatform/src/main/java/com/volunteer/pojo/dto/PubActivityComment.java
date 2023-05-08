package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 12:25
 */
@Data
public class PubActivityComment {

    @JsonProperty("cid")
    private Integer cid;

    @JsonProperty("content")
    private String content;
}
