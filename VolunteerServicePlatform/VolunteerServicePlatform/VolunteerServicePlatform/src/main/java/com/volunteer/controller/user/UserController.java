package com.volunteer.controller.user;

import cn.hutool.jwt.JWTException;
import com.volunteer.pojo.dto.UserChangeSelf;
import com.volunteer.pojo.dto.UserLogin;
import com.volunteer.pojo.dto.UserRegister;
import com.volunteer.pojo.vo.LoginData;
import com.volunteer.pojo.vo.Result;
import com.volunteer.service.user.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/29 2:01
 */
@RequestMapping("/common/user")
@RestController
@CrossOrigin
@Api(value = "用户相关接口")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/test")
    @ApiOperation(value = "/s.json",httpMethod = "GET")
    public Result test(){
        return Result.success("成功");
    }

    @PostMapping("/register")
    @ApiOperation(value = "/userRegister.json",httpMethod = "POST",response = Result.class,notes = "用户注册")
    @ApiImplicitParam(value = "用户注册，传json",dataType = "UserRegister.class")
    public Result userRegister( @RequestBody UserRegister userRegister){
        return userService.register(userRegister)?Result.success("注册成功"):Result.fail("该用户已存在");
    }

    @PostMapping("/login")
    @ApiOperation(value = "/userLogin.json",httpMethod = "POST",response = Result.class)
    @ApiImplicitParam(value = "用户登录，传json",dataType = "UserLogin.class")
    public Result userLogin(@RequestBody UserLogin userLogin){
        LoginData user = userService.login(userLogin);
        return null == user?Result.fail("用户名或密码错误"):Result.success("登录成功",user);
    }

    @PostMapping("/changeInfo")
    @ApiOperation(value = "修改用户信息")
    public Result changeInfo(@RequestBody UserChangeSelf userChangeSelf, HttpServletRequest request){
        try {
            return Result.success("修改成功",userService.changeInfo(userChangeSelf,request));
        }catch (JWTException e){
            return Result.tokenOutTime();
        }catch (RuntimeException e){
            return Result.fail("修改失败");
        }
    }
}
