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
public class IndexNotice implements Serializable {

    private static final long serialVersionUID = 1L;

    @JsonProperty("nId")
    private Integer indexNoticeId;

    @JsonProperty("title")
    private String indexNoticeTitle;

    @JsonProperty("picture")
    private String indexNoticeImg;

    @JsonProperty("content")
    private String indexNoticeContent;


}
