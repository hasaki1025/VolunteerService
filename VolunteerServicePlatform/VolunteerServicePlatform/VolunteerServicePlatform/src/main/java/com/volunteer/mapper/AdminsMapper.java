package com.volunteer.mapper;

import com.volunteer.pojo.po.Admins;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
public interface AdminsMapper {

    public Admins select(@Param("username") String username,@Param("password") String password);

    @Select("SELECT admin_password FROM admins WHERE admin_id = #{aid}")
    String selectPass(Integer aid);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`admins` \n" +
            "SET\n" +
            "  `admin_password` = #{newPassword} \n" +
            "WHERE `admin_id` = #{aid} ")
    boolean changePassword(@Param("newPassword") String newPassword,@Param("aid") Integer aid);
}
