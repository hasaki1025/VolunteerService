package com.volunteer.pojo.po;

import lombok.Data;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 12:19
 */
@Data
public class ActivityComment {

    private Integer activityCommentId;

    private Integer activityId;

    private Integer userId;

    private String activityCommentContent;
}
