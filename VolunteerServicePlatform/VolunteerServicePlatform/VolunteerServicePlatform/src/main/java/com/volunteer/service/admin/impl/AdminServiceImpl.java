package com.volunteer.service.admin.impl;

import com.volunteer.mapper.*;
import com.volunteer.pojo.bo.JoinActivity;
import com.volunteer.pojo.bo.UserInfo;
import com.volunteer.pojo.dto.*;
import com.volunteer.pojo.po.*;
import com.volunteer.pojo.vo.LoginData;
import com.volunteer.service.admin.AdminService;
import com.volunteer.service.user.UserService;
import com.volunteer.util.VolunteerJWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 10:02
 */
@Service("adminService")
public class AdminServiceImpl implements AdminService {

    private static String manager = "manager";
    private static String user = "normal";

    @Autowired
    private UserService userService;

    @Autowired
    private AdminsMapper adminsMapper;

    @Autowired
    private UsersMapper usersMapper;

    @Autowired
    private ActivityMapper activityMapper;

    @Autowired
    private ActivityTypeMapper activityTypeMapper;

    @Autowired
    private ServiceJoinListMapper serviceJoinListMapper;

    @Autowired
    private IndexNoticeMapper indexNoticeMapper;

    @Autowired
    private VolunteerConsultListMapper volunteerConsultListMapper;

    @Autowired
    private IndexRotainChartMapper indexRotainChartMapper;

    @Override
    public Object login(RootLogin rootLogin) {
        if (rootLogin.getRole().equals(manager)){
            Admins admins = adminsMapper.select(rootLogin.getUsername(),rootLogin.getPassword());
            if (admins == null){
                return null;
            }
            String token = VolunteerJWTUtil.getAdminToken(admins.getAdminId());
            LoginData loginData = new LoginData();
            loginData.setToken(token);
            loginData.setUserInfo(admins);
            return token;
        } else if (rootLogin.getRole().equals(user)) {
            return userService.login(new UserLogin(rootLogin.getUsername(),rootLogin.getPassword()));
        }else {
            return null;
        }
    }

    @Override
    public UserInfo changeUserInfo(UserChange userChange) {
        if (!usersMapper.changeUserInfo(userChange)) {
            throw new RuntimeException();
        }
        return usersMapper.getUserInfo(userChange.getUserId());
    }

    @Override
    public boolean deleteUser(Integer uid) {
        return usersMapper.delete(uid);
    }

    @Override
    public boolean deleteActivity(Integer cid) {
        return activityMapper.delete(cid);
    }

    @Override
    public boolean changeActivityInfo(ActivityChange activityChange) {
        Integer typeId = activityTypeMapper.getId(activityChange.getType());
        if (typeId == null || typeId.equals(0)){
            activityTypeMapper.insert(activityChange.getType());
            typeId = activityTypeMapper.getId(activityChange.getType());
        }
        return activityMapper.updateActivity(activityChange.getAid(),
                activityChange.getActivityCode(),
                activityChange.getActivityCountAll(),
                activityChange.getContact(),
                activityChange.getContactTelephone(),
                activityChange.getIntroduce(),
                activityChange.getImage(),
                activityChange.getActivityName(),
                activityChange.getActivityTime(),
                typeId);
    }

    @Override
    public ActivityType addTag(ActivityTagAdd activityTagAdd) {
        boolean insert = activityTypeMapper.insert(activityTagAdd.getTag());
        if (!insert) {
            throw new RuntimeException();
        }
        Integer id = activityTypeMapper.getLastId();
        ActivityType activityType = activityTypeMapper.selectById(id);
        return activityType;
    }

    @Override
    public List<ActivityType> getAllActivityType() {
        return activityTypeMapper.selectAll();
    }

    @Override
    public boolean changeActivityType(ActivityType activityType) {
        return activityTypeMapper.update(activityType);
    }

    @Override
    public boolean deleteActivityTag(Integer tid) {
        return activityTypeMapper.delete(tid);
    }

    @Override
    public List<JoinActivity> getAllActivityJoins() {
        return serviceJoinListMapper.getAll();
    }

    @Override
    public boolean auditActivity(ActivityAudit activityAudit) {
        if(serviceJoinListMapper.judge(activityAudit.getJId(),activityAudit.getStatus())){
            if (activityAudit.getStatus()){
                if(activityMapper.check(activityAudit.getJId()) &&
                        serviceJoinListMapper.auditActivity(activityAudit.getJId(), activityAudit.getStatus(), activityAudit.getReply())) {
                    return activityMapper.reduce(activityAudit.getJId());
                }
            }else{
                serviceJoinListMapper.auditActivity(activityAudit.getJId(), activityAudit.getStatus(), activityAudit.getReply());
                return activityMapper.cancel(activityAudit.getJId());
            }
        }
        return serviceJoinListMapper.auditActivity(activityAudit.getJId(), activityAudit.getStatus(), activityAudit.getReply());
    }

    @Override
    public boolean signActivity(Integer jId) {
        if (serviceJoinListMapper.signActivity(jId)) {
            usersMapper.addServerTime(jId);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteActivityJoin(Integer jId) {
        return serviceJoinListMapper.delete(jId);
    }

    @Override
    @Transactional(rollbackFor = RuntimeException.class)
    public JoinActivity changeActivityJoin(ActivityJoinChange activityJoinChange) {
        boolean changeServerTime = usersMapper.changeServiceTime(activityJoinChange.getStatus(),activityJoinChange.getJId());
        if (!changeServerTime){
            throw new RuntimeException();
        }
        boolean update = serviceJoinListMapper.update(activityJoinChange.getJId(), activityJoinChange.getStatus(), activityJoinChange.getRegisterTime(), activityJoinChange.getServerTime());
        if(!update){
            throw new RuntimeException();
        }
        return serviceJoinListMapper.selectById(activityJoinChange.getJId());
    }

    @Override
    public boolean addNotice(IndexNoticeAdd indexNoticeAdd) {
        return indexNoticeMapper.addNotice(indexNoticeAdd.getIndexNoticeTitle(),indexNoticeAdd.getIndexNoticeImg(),indexNoticeAdd.getIndexNoticeContent(),indexNoticeAdd.getIndexNoticeTime());
    }

    @Override
    public boolean updateNotice(IndexNotice indexNotice) {
        return indexNoticeMapper.update(indexNotice.getIndexNoticeId(),indexNotice.getIndexNoticeTitle(),indexNotice.getIndexNoticeImg(),indexNotice.getIndexNoticeContent());
    }

    @Override
    public boolean deleteNotices(Integer nId) {
        return indexNoticeMapper.delete(nId);
    }

    @Override
    public boolean addConsult(VolunteerConsultListAdd volunteerConsultListAdd) {
        return volunteerConsultListMapper.create(volunteerConsultListAdd.getVolunteerConsultListTitle(),
                volunteerConsultListAdd.getVolunteerConsultListContent(),
                volunteerConsultListAdd.getVolunteerConsultListImg(),
                volunteerConsultListAdd.getVolunteerConsultListTime());
    }

    @Override
    public boolean deleteNews(Integer newId) {
        return volunteerConsultListMapper.delete(newId);
    }

    @Override
    public boolean updateNews(VolunteerConsultList volunteerConsultList) {
        return volunteerConsultListMapper.update(volunteerConsultList.getVolunteerConsultListId(),
                volunteerConsultList.getVolunteerConsultListTitle(),
                volunteerConsultList.getVolunteerConsultListImg(),
                volunteerConsultList.getVolunteerConsultListTime(),
                volunteerConsultList.getVolunteerConsultListContent());
    }

    @Override
    public IndexRotainChart addRoundImage(IndexRotainChartAdd indexRotainChart) {
        if (!indexRotainChartMapper.add(indexRotainChart.getPictureValue())) {
            throw new RuntimeException();
        }
        Integer id = indexRotainChartMapper.getLastId();
        return indexRotainChartMapper.selectById(id);
    }

    @Override
    public List<IndexRotainChart> getAllRoundImages() {
        return indexRotainChartMapper.getAll();
    }

    @Override
    public boolean deleteRoundImage(Integer pId) {
        return indexRotainChartMapper.delete(pId);
    }

    @Override
    public IndexRotainChart updateRoundImages(IndexRotainChart indexRotainChart) {
        if (!indexRotainChartMapper.update(indexRotainChart.getPictureId(),indexRotainChart.getPictureValue())) {
            throw new RuntimeException();
        }
        return indexRotainChartMapper.selectById(indexRotainChart.getPictureId());
    }

    @Override
    public List<Users> getUserList() {
        return usersMapper.getUserList();
    }

    @Override
    public boolean changeUserPassword(UserChangePassword userChangePassword, HttpServletRequest request) {
        String token = (String) request.getHeader("token");
        Integer uid = null;
        Integer aid = null;
        try {
            uid = VolunteerJWTUtil.getId(token);
        }catch (Exception e) {
            try {
                aid = VolunteerJWTUtil.getAdminId(token);
            } catch (Exception e1) {
                throw new RuntimeException();
            }
        }
        if(uid != null){
            String userPass = usersMapper.selectPass(uid);
            if(userChangePassword.getPrePassword().equals(userPass) && userChangePassword.getConfirmPassword().equals(userChangePassword.getNewPassword())){
                return usersMapper.changePassword(userChangePassword.getNewPassword(),uid);
            }
        }else if(aid != null){
            String adminPass = adminsMapper.selectPass(aid);
            if(userChangePassword.getPrePassword().equals(adminPass) && userChangePassword.getConfirmPassword().equals(userChangePassword.getNewPassword())){
                return adminsMapper.changePassword(userChangePassword.getNewPassword(),aid);
            }
        }


        return false;
    }

    @Override
    public boolean addActivity(ActivityAdd activityAdd) {
        Integer typeId = activityTypeMapper.getId(activityAdd.getType());
        if (typeId == null || typeId.equals(0)){
            activityTypeMapper.insert(activityAdd.getType());
            typeId = activityTypeMapper.getId(activityAdd.getType());
        }
        return activityMapper.insert(activityAdd.getActivityCode(),
                activityAdd.getActivityName(),
                activityAdd.getActivityImg(),
                activityAdd.getActivityTime(),
                activityAdd.getActivityCountAll(),
                activityAdd.getContact(),
                activityAdd.getContactTelephone(),
                typeId,
                activityAdd.getIntroduce());
    }

    @Override
    public Users addUser(UserRegister userRegister) {
        boolean register = userService.register(userRegister);
        if (!register){
            throw new RuntimeException();
        }
        Integer uid = usersMapper.getLastId();
        return usersMapper.selectUserById(uid);
    }
}
