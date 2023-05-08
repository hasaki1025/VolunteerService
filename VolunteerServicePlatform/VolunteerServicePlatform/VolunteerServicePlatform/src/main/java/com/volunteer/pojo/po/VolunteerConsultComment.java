package com.volunteer.pojo.po;

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
public class VolunteerConsultComment implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("c_id")
    private Integer volunteerConsultCommentId;

    private String username;

    private String avatar;

    private String content;


}
