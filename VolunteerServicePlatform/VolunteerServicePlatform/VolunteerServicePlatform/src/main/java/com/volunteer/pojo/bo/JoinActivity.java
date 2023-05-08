package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/2 21:20
 */
@Data
public class JoinActivity {

    @JsonProperty("j_id")
    private Integer serviceJoinListId;

    @JsonProperty("a_num")
    private String activityCode;

    @JsonProperty("activity_name")
    private String activityName;

    @JsonProperty("tag")
    private String activityTypeName;

    @JsonProperty("time")
    private String activityTime;

    private String username;

    private String name;

    @JsonProperty("service_time")
    private Double serviceTime;

    private String sex;

    private String telephone;

    @JsonProperty("join_time")
    private String registerTime;

    @JsonProperty("status")
    private boolean isSign;

    @JsonProperty("audit")
    private boolean isExam;

    @JsonProperty("audit_text")
    private String examContent;

}
