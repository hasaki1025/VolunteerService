package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 0:04
 */
@Data
public class VolunteerConsultCommentAdd {

    @JsonProperty("newId")
    private Integer newId;

    private String content;
}
