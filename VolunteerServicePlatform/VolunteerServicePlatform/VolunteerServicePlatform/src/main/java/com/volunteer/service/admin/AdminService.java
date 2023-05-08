package com.volunteer.service.admin;

import com.volunteer.pojo.bo.JoinActivity;
import com.volunteer.pojo.bo.UserInfo;
import com.volunteer.pojo.dto.*;
import com.volunteer.pojo.po.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 10:02
 */
public interface AdminService {

    public Object login(RootLogin rootLogin);

    UserInfo changeUserInfo(UserChange userChange);

    boolean deleteUser(Integer uid);

    boolean deleteActivity(Integer cid);

    boolean changeActivityInfo(ActivityChange activityChange);

    ActivityType addTag(ActivityTagAdd activityTagAdd);

    List<ActivityType> getAllActivityType();

    boolean changeActivityType(ActivityType activityType);

    boolean deleteActivityTag(Integer tid);

    List<JoinActivity> getAllActivityJoins();

    boolean auditActivity(ActivityAudit activityAudit);

    boolean signActivity(Integer jId);

    boolean deleteActivityJoin(Integer jId);

    JoinActivity changeActivityJoin(ActivityJoinChange activityJoinChange);

    boolean addNotice(IndexNoticeAdd indexNoticeAdd);

    boolean updateNotice(IndexNotice indexNotice);

    boolean deleteNotices(Integer nId);

    boolean addConsult(VolunteerConsultListAdd volunteerConsultListAdd);

    boolean deleteNews(Integer newId);

    boolean updateNews(VolunteerConsultList volunteerConsultList);

    IndexRotainChart addRoundImage(IndexRotainChartAdd indexRotainChart);

    List<IndexRotainChart> getAllRoundImages();

    boolean deleteRoundImage(Integer pId);

    IndexRotainChart updateRoundImages(IndexRotainChart indexRotainChart);

    List<Users> getUserList();

    boolean changeUserPassword(UserChangePassword userChangePassword, HttpServletRequest request);

    boolean addActivity(ActivityAdd activityAdd);

    Users addUser(UserRegister userRegister);
}
