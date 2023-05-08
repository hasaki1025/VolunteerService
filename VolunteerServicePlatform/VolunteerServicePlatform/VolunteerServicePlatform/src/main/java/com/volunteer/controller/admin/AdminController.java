package com.volunteer.controller.admin;

import com.volunteer.pojo.dto.*;
import com.volunteer.pojo.po.ActivityType;
import com.volunteer.pojo.po.IndexNotice;
import com.volunteer.pojo.po.IndexRotainChart;
import com.volunteer.pojo.po.VolunteerConsultList;
import com.volunteer.pojo.vo.Result;
import com.volunteer.service.admin.AdminService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 19:54
 */
@RequestMapping("/back")
@RestController
@CrossOrigin
@Api(value = "用户相关接口")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/user/login")
    @ApiOperation(value = "管理员登录")
    public Result login(@RequestBody RootLogin rootLogin, HttpServletResponse response){
        Object res = adminService.login(rootLogin);
        return null == res?Result.fail("用户名或密码错误"):Result.success("登录成功",res);
    }

    @PostMapping("/user/changeInfo")
    @ApiOperation(value = "修改用户信息")
    public Result changeUserInfo(@RequestBody UserChange userChange){
        try {
            return Result.success("修改成功",adminService.changeUserInfo(userChange));
        }catch (RuntimeException e){
            return Result.fail("修改失败");
        }
    }

    @DeleteMapping("/user")
    @ApiOperation(value = "删除用户")
    public Result deleteUser(Integer uid){
        return adminService.deleteUser(uid)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @DeleteMapping("/activity")
    @ApiOperation(value = "删除活动")
    public Result deleteActivity(Integer cId){
        return adminService.deleteActivity(cId)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @PostMapping("/activity")
    @ApiOperation(value = "添加活动")
    public Result addActivity(@RequestBody ActivityAdd activityAdd){
        return adminService.addActivity(activityAdd)?Result.success("添加成功"):Result.fail("添加失败");
    }

    @PostMapping("/activity/changeInfo")
    @ApiOperation(value = "修改活动信息")
    public Result updateActivity(@RequestBody ActivityChange activityChange){
        return adminService.changeActivityInfo(activityChange)?Result.success("修改成功"):Result.fail("修改失败");
    }

    @PostMapping("/activity/tags/add")
    @ApiOperation(value = "添加活动标签")
    public Result addActivity(@RequestBody ActivityTagAdd activityTagAdd){
        try {
            return Result.success("添加成功",adminService.addTag(activityTagAdd));
        }catch (RuntimeException e){
            return Result.fail("添加失败");
        }
    }

    @GetMapping("/activity/tags")
    @ApiOperation(value = "获取活动标签")
    public Result allActivityTags(){
        return Result.success("获取成功",adminService.getAllActivityType());
    }

    @PostMapping("/activity/tags/changeName")
    @ApiOperation(value = "修改活动标签名")
    public Result changeActivityTag(@RequestBody ActivityType activityType){
        boolean result = adminService.changeActivityType(activityType);
        return result?Result.success("修改成功"):Result.fail("修改失败");
    }

    @DeleteMapping("/activity/tags")
    @ApiOperation(value = "删除活动标签")
    public Result deleteActivityTag(Integer tid){
        return adminService.deleteActivityTag(tid)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @GetMapping("/joins")
    @ApiOperation(value = "获取报名活动列表")
    public Result getActivityJoins(){
        return Result.success("获取成功",adminService.getAllActivityJoins());
    }

    @PostMapping("/joins/audit")
    @ApiOperation(value = "参加活动审核")
    public Result auditActivity(@RequestBody ActivityAudit activityAudit){
        return adminService.auditActivity(activityAudit)?Result.success("审核成功"):Result.fail("审核失败");
    }

    @PostMapping("/joins/sign")
    @ApiOperation(value = "活动签到")
    public Result signActivity(@RequestBody ActivitySign activitySign){
        return adminService.signActivity(activitySign.getJId())?Result.success("签到成功"):Result.fail("签到失败");
    }

    @DeleteMapping("/joins")
    @ApiOperation(value = "删除报名记录")
    public Result deleteActivityJoin(Integer jId){
        return adminService.deleteActivityJoin(jId)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @PostMapping("/joins/changeInfo")
    @ApiOperation(value = "修改信息")
    public Result changeActivityJoin(@RequestBody ActivityJoinChange activityJoinChange){
        try {
            return Result.success("修改成功",adminService.changeActivityJoin(activityJoinChange));
        }catch (RuntimeException e){
            return Result.fail("修改失败");
        }
    }

    @PostMapping("/notices")
    @ApiOperation(value = "新增公告")
    public Result addNotices(@RequestBody IndexNoticeAdd indexNoticeAdd){
        return adminService.addNotice(indexNoticeAdd)?Result.success("添加成功"):Result.fail("添加失败");
    }


    @PostMapping("/notices/changeInfo")
    @ApiOperation(value = "修改公告")
    public Result updateNotices(@RequestBody IndexNotice indexNotice){
        return adminService.updateNotice(indexNotice)?Result.success("修改成功"):Result.fail("修改失败");
    }

    @DeleteMapping("/notices")
    @ApiOperation(value = "删除公告")
    public Result deleteNotes(Integer nId){
        return adminService.deleteNotices(nId)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @PostMapping("/news")
    @ApiOperation(value = "添加资讯")
    public Result addNews(@RequestBody VolunteerConsultListAdd volunteerConsultListAdd){
        return adminService.addConsult(volunteerConsultListAdd)?Result.success("添加成功"):Result.fail("添加失败");
    }

    @DeleteMapping("/news")
    @ApiOperation(value = "删除资讯")
    public Result deleteNews(Integer newId){
        return adminService.deleteNews(newId)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @PostMapping("/news/changeInfo")
    @ApiOperation(value = "修改资讯")
    public Result updateNews(@RequestBody VolunteerConsultList volunteerConsultList){
        return adminService.updateNews(volunteerConsultList)?Result.success("修改成功"):Result.fail("修改失败");
    }

    @PostMapping("/round-images")
    @ApiOperation(value = "添加轮播图")
    public Result addRoundImage(@RequestBody IndexRotainChartAdd indexRotainChart){
        try {
            return Result.success("添加成功",adminService.addRoundImage(indexRotainChart));
        }catch (RuntimeException e){
            return Result.fail("添加失败");
        }
    }

    @GetMapping("/round-images")
    @ApiOperation(value = "查看轮播图")
    public Result getRoundImage(){
        return Result.success("获取成功",adminService.getAllRoundImages());
    }

    @DeleteMapping("/round-images")
    @ApiOperation(value = "删除轮播图")
    public Result deleteRoundImage(Integer pId){
        return adminService.deleteRoundImage(pId)?Result.success("删除成功"):Result.fail("删除失败");
    }

    @PostMapping("/round-images/change")
    @ApiOperation(value = "更新轮播图")
    public Result updateRoundImage(@RequestBody IndexRotainChart indexRotainChart){
        try {
            return Result.success("修改成功",adminService.updateRoundImages(indexRotainChart));
        }catch (RuntimeException e){
            return Result.fail("修改失败");
        }
    }

    @GetMapping("/user")
    @ApiOperation("获取用户列表")
    public Result getAllUserList(){
        return Result.success("获取成功",adminService.getUserList());
    }

    @PostMapping("/user/changePass")
    @ApiOperation("修改密码")
    public Result changePassword(@RequestBody UserChangePassword userChangePassword, HttpServletRequest request){
        try {
            return adminService.changeUserPassword(userChangePassword,request)?Result.success("修改成功"):Result.fail("原本密码错误，修改失败");
        }catch (RuntimeException e){
            return Result.tokenOutTime();
        }
    }

    @PostMapping("/user/add")
    @ApiOperation(value = "/userRegister.json",httpMethod = "POST",response = Result.class,notes = "用户注册")
    @ApiImplicitParam(value = "用户注册，传json",dataType = "UserRegister.class")
    public Result userRegister(@RequestBody UserRegister userRegister){
        try {
            return Result.success("新增成功",adminService.addUser(userRegister));
        }catch (RuntimeException e){
            return Result.fail("该用户已存在");
        }
    }
}
