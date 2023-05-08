package com.volunteer.controller;

import cn.hutool.jwt.JWTException;
import com.volunteer.pojo.dto.ActivityJoin;
import com.volunteer.pojo.dto.PubActivityComment;
import com.volunteer.pojo.vo.Result;
import com.volunteer.service.ActivityService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/30 18:46
 */
@RestController
@RequestMapping("/common")
@CrossOrigin
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities")
    @ApiOperation(value = "/allActivities.json",httpMethod = "GET",response = Result.class,notes = "获取所有活动信息")
    public Result getAllActivities(){
        return Result.success("获取成功",activityService.getAllActivities());
    }

    @GetMapping("/activities/click")
    @ApiOperation(value = "/activitiesClick.json",httpMethod = "POST",response = Result.class,notes = "点击活动，记录点击")
    public Result activitiesClick(Integer cid){
        Integer clickCount = activityService.clickActivity(cid);
        return null == clickCount?Result.fail("该活动不存在"):Result.success("点击成功",clickCount);
    }

    @PostMapping("/activities")
    @ApiOperation(value = "/activitiesJoin.json",httpMethod = "POST",response = Result.class,notes = "报名活动")
    public Result activitiesJoin(@RequestBody ActivityJoin activityJoin, HttpServletRequest request){
        try {
            return activityService.join(activityJoin,request)?Result.success("报名成功"):Result.fail("报名失败");
        }catch (JWTException e){
            return Result.tokenOutTime();
        }
    }

    @PostMapping("/activities/comment")
    @ApiOperation(value = "/activitiesComment.json",httpMethod = "POST",response = Result.class,notes = "发布评论")
    public Result activitiesComment(@RequestBody PubActivityComment activityComment, HttpServletRequest request){
        try {
            return Result.success("评论成功",activityService.publishComment(activityComment,request));
        }catch (JWTException e){
            return Result.tokenOutTime();
        }catch (RuntimeException e){
            return Result.fail("评论失败");
        }
    }

    @GetMapping("/activities/comment")
    @ApiOperation(value = "/activitiesComment.json",httpMethod = "POST",response = Result.class,notes = "发布评论")
    public Result allActivitiesComment(Integer cid){
        return Result.success("获取成功",activityService.getAllComments(cid));
    }

}
