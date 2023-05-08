package com.volunteer.util;

import cn.hutool.jwt.JWT;
import cn.hutool.jwt.JWTUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 16:42
 */
public class VolunteerJWTUtil {

    private static String code = "volunteer";

    public static String getToken(int uid){
        Map<String, Object> map = new HashMap<String, Object>() {
            private static final long serialVersionUID = 1L;
            {
                put("uid", uid);
                put("expire_time", System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 15);
            }
        };
        String token = JWTUtil.createToken(map, code.getBytes());
        return token;
    }

    public static String getAdminToken(int uid){
        Map<String, Object> map = new HashMap<String, Object>() {
            private static final long serialVersionUID = 1L;
            {
                put("aid", uid);
                put("expire_time", System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 15);
            }
        };

        return JWTUtil.createToken(map, code.getBytes());
    }

    public static Integer getId(String token){
        JWT jwt = JWTUtil.parseToken(token);
        Integer uid = (int) jwt.getPayload("uid");
        return uid;
    }

    public static int getAdminId(String token){
        JWT jwt = JWTUtil.parseToken(token);
        int aid = (int) jwt.getPayload("aid");
        return aid;
    }
}
