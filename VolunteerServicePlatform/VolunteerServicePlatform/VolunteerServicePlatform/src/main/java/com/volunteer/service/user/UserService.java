package com.volunteer.service.user;

import com.volunteer.pojo.bo.IndexDataBo;
import com.volunteer.pojo.bo.IndexNotices;
import com.volunteer.pojo.bo.UsersRankList;
import com.volunteer.pojo.bo.VolunteerConsultListBo;
import com.volunteer.pojo.dto.UserChangeSelf;
import com.volunteer.pojo.dto.UserLogin;
import com.volunteer.pojo.dto.UserRegister;
import com.volunteer.pojo.dto.VolunteerConsultCommentAdd;
import com.volunteer.pojo.po.Users;
import com.volunteer.pojo.po.VolunteerConsultComment;
import com.volunteer.pojo.vo.LoginData;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description 用户登录注册及基本信息管理
 * @date 2023/1/29 2:02
 */
public interface UserService {

    public boolean register(UserRegister userRegister);


    public LoginData login(UserLogin userLogin);

    List<IndexNotices> getAllNotices();

    List<VolunteerConsultListBo> getAllNews();

    List<VolunteerConsultComment> getAllNewsComment(Integer newId);

    VolunteerConsultComment commentNews(VolunteerConsultCommentAdd volunteerConsultCommentAdd, HttpServletRequest request);

    IndexDataBo getIndexData();

    Users changeInfo(UserChangeSelf userChangeSelf, HttpServletRequest request);

    List<UsersRankList> getRankList();
}
