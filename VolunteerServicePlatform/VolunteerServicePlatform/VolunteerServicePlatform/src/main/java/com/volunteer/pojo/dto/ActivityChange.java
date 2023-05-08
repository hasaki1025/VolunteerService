package com.volunteer.pojo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 14:47
 */
@Data
public class ActivityChange {

    private Integer aid;

    @JsonProperty("tag")
    private String type;

    @JsonProperty("a_num")
    private String activityCode;

    @JsonProperty("activity_name")
    private String activityName;

    @JsonProperty("time")
    private String activityTime;

    @JsonProperty("need_num")
    private Integer activityCountAll;

    @JsonProperty("contact_person")
    private String contact;

    @JsonProperty("contact_telephone")
    private String contactTelephone;

    @JsonProperty("description")
    private String introduce;

    @JsonProperty("picture")
    private String image;


}
