package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 22:36
 */
@Data
public class ActivityAdd {

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

    @JsonProperty("description")
    private String introduce;

    @JsonProperty("contact_person")
    private String contact;

    @JsonProperty("contact_telephone")
    private String contactTelephone;

}
