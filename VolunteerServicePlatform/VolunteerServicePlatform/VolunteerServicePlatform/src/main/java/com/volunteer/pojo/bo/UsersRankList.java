package com.volunteer.pojo.bo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/2/7 12:28
 */
@Data
public class UsersRankList extends UserInfo{

    @JsonProperty("service_time")
    private Double serviceTime;
}
