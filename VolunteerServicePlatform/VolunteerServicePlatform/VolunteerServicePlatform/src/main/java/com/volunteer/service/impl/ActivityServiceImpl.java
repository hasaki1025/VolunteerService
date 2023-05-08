package com.volunteer.service.impl;

import com.volunteer.mapper.ActivityCommentMapper;
import com.volunteer.mapper.ActivityMapper;
import com.volunteer.mapper.ServiceJoinListMapper;
import com.volunteer.pojo.bo.ActivityBo;
import com.volunteer.pojo.bo.ActivityCommentInfo;
import com.volunteer.pojo.dto.ActivityJoin;
import com.volunteer.pojo.dto.PubActivityComment;
import com.volunteer.pojo.po.ServiceJoinList;
import com.volunteer.service.ActivityService;
import com.volunteer.util.VolunteerJWTUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/30 21:08
 */
@Service("activityService")
public class ActivityServiceImpl implements ActivityService {

    private Logger log = LoggerFactory.getLogger(ActivityServiceImpl.class);
    @Autowired
    private ActivityMapper activityMapper;

    @Autowired
    private ServiceJoinListMapper serviceJoinListMapper;

    @Autowired
    private ActivityCommentMapper activityCommentMapper;

    @Override
    public List<ActivityBo> getAllActivities() {
        return activityMapper.getAllActivities();
    }

    @Override
    public Integer clickActivity(Integer cid) {
        Integer check = activityMapper.checkActivity(cid);
        if (null == check){
            return null;
        }
        activityMapper.clickActivity(cid);
        return activityMapper.getClickCount(cid);
    }

    @Override
    public boolean join(ActivityJoin activityJoin, HttpServletRequest request) {
        String token = (String) request.getHeader("token");
        Integer id = VolunteerJWTUtil.getId(token);
        ServiceJoinList serviceJoinList = new ServiceJoinList();
        serviceJoinList.setServiceTime(activityJoin.getServiceTime());
        serviceJoinList.setUserId(id);
        serviceJoinList.setActivityId(activityJoin.getId());
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String format = simpleDateFormat.format(date);
        serviceJoinList.setRegisterTime(format);
        return serviceJoinListMapper.insert(serviceJoinList);
    }

    @Override
    public ActivityCommentInfo publishComment(PubActivityComment pubActivityComment, HttpServletRequest request) {
        String token = (String) request.getHeader("token");
        Integer id = VolunteerJWTUtil.getId(token);
        boolean insert = activityCommentMapper.insert(pubActivityComment.getCid(),id,pubActivityComment.getContent());
        if (!insert){
            throw new RuntimeException();
        }
        Integer lastId = activityCommentMapper.getLastCommentId();
        return activityCommentMapper.getComment(lastId);
    }

    @Override
    public List<ActivityCommentInfo> getAllComments(Integer cid) {
        return activityCommentMapper.getAllActivityComments(cid);
    }
}
