package com.volunteer.service;

import com.volunteer.pojo.bo.ActivityBo;
import com.volunteer.pojo.bo.ActivityCommentInfo;
import com.volunteer.pojo.dto.ActivityJoin;
import com.volunteer.pojo.dto.PubActivityComment;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/30 19:58
 */
public interface ActivityService {

    List<ActivityBo> getAllActivities();

    public Integer clickActivity(Integer cid);

    boolean join(ActivityJoin activityJoin, HttpServletRequest request);

    ActivityCommentInfo publishComment(PubActivityComment activityComment, HttpServletRequest request);

    List<ActivityCommentInfo> getAllComments(Integer cid);
}
