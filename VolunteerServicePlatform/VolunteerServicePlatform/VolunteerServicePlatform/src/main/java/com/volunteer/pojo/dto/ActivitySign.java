package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/2 22:40
 */
@Data
public class ActivitySign {

    @JsonProperty("jId")
    private Integer jId;
}
