package com.volunteer.service.user.impl;

import com.volunteer.mapper.*;
import com.volunteer.pojo.bo.*;
import com.volunteer.pojo.dto.UserChangeSelf;
import com.volunteer.pojo.dto.UserLogin;
import com.volunteer.pojo.dto.UserRegister;
import com.volunteer.pojo.dto.VolunteerConsultCommentAdd;
import com.volunteer.pojo.po.Users;
import com.volunteer.pojo.po.VolunteerConsultComment;
import com.volunteer.pojo.vo.LoginData;
import com.volunteer.service.ActivityService;
import com.volunteer.service.user.UserService;
import com.volunteer.util.VolunteerJWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 2:05
 */
@Service("userService")
@Scope("singleton")
public class UserServiceImpl implements UserService {

    @Autowired
    private UsersMapper usersMapper;

    @Autowired
    private IndexNoticeMapper indexNoticeMapper;

    @Autowired
    private ActivityService activityService;

    @Autowired
    private ActivityTypeMapper activityTypeMapper;

    @Autowired
    private VolunteerConsultListMapper volunteerConsultListMapper;

    @Autowired
    private VolunteerConsultCommentMapper volunteerConsultCommentMapper;

    @Autowired
    private IndexRotainChartMapper indexRotainChartMapper;

    @Override
    public boolean register(UserRegister userRegister) {
        Integer check = usersMapper.selectIdByUsername(userRegister.getUsername());
        if (null == check || check == 0){
            boolean insert = usersMapper.insert(userRegister);
            return insert;
        }
        return false;
    }

    @Override
    public LoginData login(UserLogin userLogin) {
        Users user = usersMapper.selectUser(userLogin.getUsername(),userLogin.getPassword());
        if (user == null){
            return null;
        }
        String token = VolunteerJWTUtil.getToken(user.getUserId());
        LoginData loginData = new LoginData();
        loginData.setUserInfo(user);
        loginData.setToken(token);
        return loginData;
    }

    @Override
    public List<IndexNotices> getAllNotices() {
        return indexNoticeMapper.getAll();
    }

    @Override
    public List<VolunteerConsultListBo> getAllNews() {
        return volunteerConsultListMapper.getAll();
    }

    @Override
    public List<VolunteerConsultComment> getAllNewsComment(Integer newId) {
        return volunteerConsultCommentMapper.getAll(newId);
    }

    @Override
    public VolunteerConsultComment commentNews(VolunteerConsultCommentAdd volunteerConsultCommentAdd, HttpServletRequest request) {
        String token = (String) request.getHeader("token");
        Integer id = VolunteerJWTUtil.getId(token);
        boolean insert = volunteerConsultCommentMapper.insert(id,volunteerConsultCommentAdd.getNewId(),volunteerConsultCommentAdd.getContent());
        if (!insert){
            throw new RuntimeException();
        }
        Integer vcId = volunteerConsultCommentMapper.selectLastId();
        return volunteerConsultCommentMapper.getConsultCommentById(vcId);
    }

    @Override
    public IndexDataBo getIndexData() {
        List<ActivityBo> allActivities = activityService.getAllActivities();
        IndexDataBo indexDataBo = new IndexDataBo();
        indexDataBo.setActivities(allActivities);
        indexDataBo.setRecommend(allActivities);
        indexDataBo.setTags(activityTypeMapper.getAll());
        indexDataBo.setRoundImages(indexRotainChartMapper.getAllUrl());
        return indexDataBo;
    }

    @Override
    public Users changeInfo(UserChangeSelf userChangeSelf, HttpServletRequest request) {
        String token = (String) request.getHeader("token");
        Integer id = VolunteerJWTUtil.getId(token);
        if (!usersMapper.changeUserSelfInfo(
                userChangeSelf.getEmail(),
                userChangeSelf.getSex(),
                userChangeSelf.getImage(),
                userChangeSelf.getTelephone(),
                userChangeSelf.getName(),
                id)) {
            throw new RuntimeException();
        }
        Users users = usersMapper.selectUserById(id);
        return users;
    }

    @Override
    public List<UsersRankList> getRankList() {
        return usersMapper.getRankList();
    }
}
