package com.volunteer.pojo.dto;

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
public class IndexNoticeAdd implements Serializable {

    @JsonProperty("title")
    private String indexNoticeTitle;

    @JsonProperty("picture")
    private String indexNoticeImg;

    @JsonProperty("publish_time")
    private String indexNoticeTime;

    @JsonProperty("content")
    private String indexNoticeContent;


}
