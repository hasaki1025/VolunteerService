package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/2 23:08
 */
@Data
public class ActivityJoinChange {

    @JsonProperty("jId")
    private Integer jId;

    @JsonProperty("status")
    private Boolean status;

    @JsonProperty("join_time")
    private String registerTime;

    @JsonProperty("service_time")
    private Double serverTime;
}
