package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 21:59
 */
@Data
public class ActivityJoinInfo {

    @JsonProperty("j_id")
    private Integer joinId;

    @JsonProperty("a_num")
    private String activityNum;

    @JsonProperty("activity_name")
    private String activityName;

    @JsonProperty("tag")
    private String type;

    private String time;

    private String username;

    private String name;

    @JsonProperty("service_time")
    private Double serviceTime;

    private String sex;

    private String telephone;

    @JsonProperty("join_time")
    private String joinTime;

    @JsonProperty("status")
    private Boolean isSign;

    @JsonProperty("audit")
    private Boolean isCheck;

    @JsonProperty("audit_text")
    private String content;
}
