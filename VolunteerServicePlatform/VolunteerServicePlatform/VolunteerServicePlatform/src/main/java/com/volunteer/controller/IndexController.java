package com.volunteer.controller;

import cn.hutool.jwt.JWTException;
import com.qiniu.storage.model.DefaultPutRet;
import com.volunteer.pojo.dto.VolunteerConsultCommentAdd;
import com.volunteer.pojo.vo.Result;
import com.volunteer.service.user.UserService;
import com.volunteer.util.QiniuUploadUtil;
import com.volunteer.util.VolunteerJWTUtil;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/30 18:47
 */
@RestController
@CrossOrigin
@RequestMapping("/common")
public class IndexController {

    @Autowired
    private UserService userService;

    @Autowired
    private QiniuUploadUtil qiniuUploadUtil;

    @GetMapping("/notice")
    @ApiOperation(value = "获取公告列表")
    public Result getNotices() {
        return Result.success("获取成功", userService.getAllNotices());
    }

    @GetMapping("/news")
    @ApiOperation(value = "获取资讯信息列表")
    public Result getNews() {
        return Result.success("获取成功", userService.getAllNews());
    }

    @GetMapping("/news/comment")
    @ApiOperation(value = "获取资讯评论")
    public Result getNewsComment(Integer newId) {
        return Result.success("获取成功", userService.getAllNewsComment(newId));
    }

    @PostMapping("/news/comment")
    @ApiOperation(value = "给资讯评论")
    public Result addNewsComment(@RequestBody VolunteerConsultCommentAdd volunteerConsultCommentAdd, HttpServletRequest request) {
        try {
            return Result.success("评论成功", userService.commentNews(volunteerConsultCommentAdd, request));
        } catch (JWTException e) {
            return Result.tokenOutTime();
        } catch (RuntimeException e) {
            return Result.fail("评论失败");
        }
    }

    @GetMapping("/home")
    @ApiOperation(value = "获取首页数据")
    public Result getIndexData() {
        return Result.success("获取成功", userService.getIndexData());
    }

    @PostMapping("/file")
    @ApiOperation(value = "上传图片")
    public Result loadFile(@RequestParam(value = "file", required = true) MultipartFile file, HttpServletRequest request) {
        String token = request.getHeader("token");
        Integer id = null;
        try {
            id = VolunteerJWTUtil.getId(token);
        }catch (Exception e){
            try {
                id = VolunteerJWTUtil.getAdminId(token);
            }catch (Exception e1){
                return Result.tokenOutTime();
            }
        }
        String originalFilename = file.getOriginalFilename();
        DefaultPutRet upload = qiniuUploadUtil.upload(file);
        String hash = upload.hash;
        return Result.success("上传成功", qiniuUploadUtil.getUrl() + hash);
    }

    @GetMapping("/rankList")
    public Result getRankList(){
        return Result.success("获取成功",userService.getRankList());
    }
}