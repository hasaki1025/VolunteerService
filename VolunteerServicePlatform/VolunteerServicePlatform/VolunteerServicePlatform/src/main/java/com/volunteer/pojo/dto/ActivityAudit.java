package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/2 22:02
 */
@Data
public class ActivityAudit {

    @JsonProperty("jId")
    private Integer jId;

    private Boolean status;

    private String reply;
}
