package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 0:24
 */
@Data
public class ActivityJoin {

    @JsonProperty("id")
    private Integer id;

    @JsonProperty("service_time")
    private Double serviceTime;

}
