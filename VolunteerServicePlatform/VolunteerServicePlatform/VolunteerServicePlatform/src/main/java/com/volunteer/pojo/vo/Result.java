package com.volunteer.pojo.vo;

import lombok.Data;
import lombok.ToString;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 2:07
 */
@Data
@ToString
public class Result {

    private String code;

    private String msg;

    private Object data;

    private static Result result;

    public static Result success(String msg) {
        Result result = new Result();
        result.setCode("200");
        result.setMsg(msg);
        return result;
    }

    public static Result success(String msg, Object data) {
        Result result = new Result();
        result.setCode("200");
        result.setMsg(msg);
        result.setData(data);
        return result;
    }

    public static Result fail(String msg) {
        Result result = new Result();
        result.setCode("500");
        result.setMsg(msg);
        return result;
    }

    public static Result tokenOutTime() {
        if (result == null) {
            result = new Result();
            result.setCode("500");
            result.setMsg("token已过期，请重新登录");
        }
        return result;
    }
}


