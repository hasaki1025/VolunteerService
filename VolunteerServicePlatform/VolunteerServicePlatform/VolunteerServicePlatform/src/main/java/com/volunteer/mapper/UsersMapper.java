package com.volunteer.mapper;

import com.volunteer.pojo.bo.UserInfo;
import com.volunteer.pojo.bo.UsersRankList;
import com.volunteer.pojo.dto.UserChange;
import com.volunteer.pojo.dto.UserRegister;
import com.volunteer.pojo.po.Users;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
public interface UsersMapper{

    public boolean insert(UserRegister userRegister);

    Integer selectId(String username, String password);

    Users selectUser(@Param("username") String username,@Param("password") String password);

    Integer selectIdByUsername(String username);


    @Update("UPDATE\n" +
            "\tusers\n" +
            "SET \n" +
            "\ttelephone = #{telephone},\n" +
            "\timage = #{image},\n" +
            "\temail = #{email},\n" +
            "\tsex =  #{sex},\n" +
            "\tNAME = #{name},\n" +
            "\tpassword = #{password}\n" +
            "WHERE\n" +
            "\tuser_id = #{userId}")
    boolean changeUserInfo(UserChange userChange);

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`users` \n" +
            "WHERE `user_id` = #{uid}")
    boolean delete(Integer uid);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`users` \n" +
            "SET\n" +
            "  `server_time` = server_time + \n" +
            "\tIF(1,\n" +
            "\t\t(SELECT\n" +
            "\t\t\tservice_time\n" +
            "\t\tFROM\n" +
            "\t\t\tservice_join_list\n" +
            "\t\tWHERE\n" +
            "\t\t\tservice_join_list_id = #{jId}\n" +
            "\t\t\t),0)\n" +
            "WHERE `user_id` = IF(1,\n" +
            "\t\t(SELECT\n" +
            "\t\t\tuser_id\n" +
            "\t\tFROM\n" +
            "\t\t\tservice_join_list\n" +
            "\t\tWHERE\n" +
            "\t\t\tservice_join_list_id = #{jId}\n" +
            "\t\t\t),0)")
    void addServerTime(Integer jId);

    @Update("UPDATE\n" +
            "            users\n" +
            "            SET\n" +
            "            server_time = server_time +\n" +
            "            IF(\n" +
            "            (SELECT is_sign \n" +
            "            FROM service_join_list \n" +
            "            WHERE service_join_list_id = #{jId}) = #{status},0,\n" +
            "            IF(\n" +
            "            ((SELECT is_sign \n" +
            "            FROM service_join_list\n" +
            "            WHERE service_join_list_id = #{jId})= TRUE),\n" +
            "            IF(1,(SELECT -1 * service_time FROM service_join_list WHERE service_join_list_id = #{jId}),0), \n" +
            "            IF(1,(SELECT  service_time FROM service_join_list WHERE service_join_list_id = #{jId}),0)\n" +
            "            )\n" +
            "            )\n" +
            "            WHERE\n" +
            "            user_id = IF(1,(SELECT user_id FROM service_join_list WHERE service_join_list_id = #{jId}),0)")
    boolean changeServiceTime(@Param("status") Boolean status,@Param("jId") Integer jId);

    @Select("SELECT \n" +
            "  `user_id` AS \"userId\",\n" +
            "  `password`,\n" +
            "  `username`,\n" +
            "  `image`,\n" +
            "  `sex`,\n" +
            "  `telephone`,\n" +
            "  `email` ,\n" +
            "  `name` \n" +
            "FROM\n" +
            "  `volunteer_system`.`users` ")
    List<Users> getUserList();

    @Select("SELECT \n" +
            "  `password`\n" +
            "FROM\n" +
            "  `volunteer_system`.`users` \n" +
            "WHERE \n" +
            "   user_id = #{uid}")
    String selectPass(@Param("uid") Integer uid);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`users` \n" +
            "SET\n" +
            "  `password` = #{newPassword}\n" +
            "WHERE `user_id` = #{uid} ")
    boolean changePassword(@Param("newPassword") String newPassword,@Param("uid") Integer uid);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`users` \n" +
            "set\n" +
            "  `image` = #{image},\n" +
            "  `sex` = #{sex},\n" +
            "  `telephone` = #{telephone},\n" +
            "  `name` = #{name},\n" +
            "  `email` = #{email}\n" +
            "WHERE `user_id` = #{uid}")
    boolean changeUserSelfInfo(@Param("email") String email,
                               @Param("sex") String sex,
                               @Param("image") String image,
                               @Param("telephone") String telephone,
                               @Param("name") String name,
                               @Param("uid") Integer uid);

    @Select("        SELECT\n" +
            "            `user_id` as \"userId\",\n" +
            "            `password` as \"password\",\n" +
            "            `username` as \"username\",\n" +
            "            `identity_num` as \"identityNum\",\n" +
            "            `image` as \"image\",\n" +
            "            `server_time` as \"serverTime\",\n" +
            "            `sex` as \"sex\",\n" +
            "            `telephone` as \"telephone\",\n" +
            "            `email` as \"email\",\n" +
            "            `name` as \"name\"\n" +
            "        FROM\n" +
            "            `volunteer_system`.`users`\n" +
            "        WHERE\n" +
            "            user_id = #{id}")
    Users selectUserById(Integer id);

    @Select("SELECT \n" +
            "  `user_id` AS \"userId\",\n" +
            "  `password`,\n" +
            "  `username`,\n" +
            "  `image`,\n" +
            "  `server_time`,\n" +
            "  `sex`,\n" +
            "  `telephone`,\n" +
            "  `email`,\n" +
            "  `name` \n" +
            "FROM\n" +
            "  `volunteer_system`.`users` \n" +
            "WHERE\n" +
            "   user_id = #{userId}")
    UserInfo getUserInfo(@Param("userId") Integer userId);

    @Select("SELECT LAST_INSERT_ID();")
    Integer getLastId();

    @Select("SELECT \n" +
            "  `user_id` AS \"userId\",\n" +
            "  `password`,\n" +
            "  `username`,\n" +
            "  `image`,\n" +
            "  `server_time` AS \"serviceTime\",\n" +
            "  `sex`,\n" +
            "  `telephone`,\n" +
            "  `email`,\n" +
            "  `name` \n" +
            "FROM\n" +
            "  `volunteer_system`.`users` \n" +
            "ORDER BY server_time DESC\n" )
    List<UsersRankList> getRankList();
}
