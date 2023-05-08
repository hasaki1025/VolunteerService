package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/5 0:11
 */
@Data
public class IndexDataBo {

    private List<String> tags;

    @JsonProperty("round_images")
    private List<String> roundImages;

    private List<ActivityBo> activities;

    private List<ActivityBo> recommend;
}
