package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class VolunteerConsultListBo implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("new_id")
    private Integer volunteerConsultListId;

    @JsonProperty("title")
    private String volunteerConsultListTitle;

    @JsonProperty("picture")
    private String volunteerConsultListImg;

    @JsonProperty("content")
    private String volunteerConsultListContent;

    @JsonProperty("publish_time")
    private String volunteerConsultListTime;


}
