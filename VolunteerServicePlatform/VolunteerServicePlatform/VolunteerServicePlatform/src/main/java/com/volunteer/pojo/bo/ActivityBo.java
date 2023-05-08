package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.volunteer.config.CustomDateConfig;
import lombok.Data;

import java.util.Date;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/30 18:49
 */
@Data
public class ActivityBo {

    @JsonProperty("a_id")
    private Integer activityId;

    @JsonProperty("a_num")
    private String activityCode;

    @JsonProperty("tag")
    private String type;

    @JsonProperty("activity_name")
    private String activityName;

    @JsonProperty("picture")
    private String activityImg;

    @JsonProperty("time")
    private String activityTime;

    @JsonProperty("need_num")
    private Integer activityCountAll;

    @JsonProperty("left_num")
    private Integer activityCountRest;

    @JsonProperty("description")
    private String introduce;

    @JsonProperty("contact_person")
    private String contact;

    @JsonProperty("contact_telephone")
    private String contactTelephone;

    @JsonProperty("late_click_time")
    @JsonSerialize(using = CustomDateConfig.class)
    private Date lastClickTime;

    @JsonProperty("click_times")
    private Integer clickCount;
}
