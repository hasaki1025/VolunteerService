package com.volunteer.mapper;

import com.volunteer.pojo.bo.JoinActivity;
import com.volunteer.pojo.po.ServiceJoinList;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
public interface ServiceJoinListMapper{

    @Insert("INSERT INTO service_join_list(\n" +
            "\tactivity_id,user_id,service_time,telephone,register_time\n" +
            ")\n" +
            "SELECT #{activityId},#{userId},#{serviceTime},telephone,#{registerTime} FROM users WHERE user_id = #{userId}")
    boolean insert(ServiceJoinList serviceJoinList);

    @Select("SELECT\n" +
            "sjl.service_join_list_id \"serviceJoinListId\",\n" +
            "a.`activity_code` \"activityCode\",\n" +
            "a.`activity_name` \"activityName\",\n" +
            "act.`activity_type_name` \"activityTypeName\",\n" +
            "a.`activity_time` \"activityTime\",\n" +
            "u.`username` \"username\",\n" +
            "u.`name` \"name\",\n" +
            "sjl.`service_time` \"serviceTime\",\n" +
            "u.`sex` \"sex\",\n" +
            "u.`telephone` \"telephone\",\n" +
            "sjl.`register_time` \"registerTime\",\n" +
            "sjl.`is_sign` \"isSign\",\n" +
            "sjl.`is_exam` \"isExam\",\n" +
            "sjl.`exam_content` \"examContent\"\n" +
            "FROM\n" +
            "service_join_list sjl,activity a,users u,activity_type act\n" +
            "WHERE\n" +
            "sjl.`activity_id` = a.`activity_id`\n" +
            "AND\n" +
            "sjl.`user_id` = u.`user_id`\n" +
            "AND\n" +
            "a.`activity_type_id` = act.`activity_type_id`")
    List<JoinActivity> getAll();

    @Update("UPDATE \n" +
            "  `volunteer_system`.`service_join_list` \n" +
            "SET\n" +
            "  `is_exam` = #{status},\n" +
            "  `exam_content` = #{reply} \n" +
            "WHERE `service_join_list_id` = #{jId} ;")
    boolean auditActivity(@Param("jId") Integer jId,@Param("status") Boolean status,@Param("reply") String reply);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`service_join_list` \n" +
            "SET\n" +
            "  `is_sign` = TRUE\n" +
            "WHERE `service_join_list_id` = #{jId}")
    boolean signActivity(Integer jId);

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`service_join_list` \n" +
            "WHERE `service_join_list_id` = #{jid}")
    boolean delete(Integer jid);

    @Select("SELECT \n" +
            "  `service_time`\n" +
            "FROM\n" +
            "  `volunteer_system`.`service_join_list` \n" +
            "WHERE\n" +
            "\tservice_join_list_id = #{jId}")
    Double getServiceTime(Integer jId);

    @Update("UPDATE \n" +
            "           `volunteer_system`.`service_join_list`\n" +
            "           SET\n" +
            "             `service_time` = #{serverTime},\n" +
            "            `is_sign` = #{status},\n" +
            "            `register_time` = #{registerTime}\n" +
            "            WHERE `service_join_list_id` = #{jId}")
    boolean update(@Param("jId") Integer jId,@Param("status") Boolean status,@Param("registerTime") String registerTime,@Param("serverTime") Double serverTime);

    @Select("SELECT\n" +
            "           sjl.service_join_list_id \"serviceJoinListId\",\n" +
            "           a.`activity_code` \"activityCode\",\n" +
            "           a.`activity_name` \"activityName\",\n" +
            "           act.`activity_type_name` \"activityTypeName\",\n" +
            "           a.`activity_time` \"activityTime\",\n" +
            "           u.`username` \"username\",\n" +
            "           u.`name` \"name\",\n" +
            "           sjl.`service_time` \"serviceTime\",\n" +
            "           u.`sex` \"sex\",\n" +
            "           u.`telephone` \"telephone\",\n" +
            "           sjl.`register_time` \"registerTime\",\n" +
            "           sjl.`is_sign` \"isSign\",\n" +
            "           sjl.`is_exam` \"isExam\",\n" +
            "           sjl.`exam_content` \"examContent\"\n" +
            "           FROM\n" +
            "            service_join_list sjl,activity a,users u,activity_type act\n" +
            "            WHERE\n" +
            "            sjl.`activity_id` = a.`activity_id`\n" +
            "            AND\n" +
            "            sjl.`user_id` = u.`user_id`\n" +
            "            AND\n" +
            "            a.`activity_type_id` = act.`activity_type_id`\n" +
            "            AND\n" +
            "            sjl.`service_join_list_id` = #{jId}")
    JoinActivity selectById(@Param("jId") Integer jId);

    @Select("SELECT\n" +
            "    IF(is_exam = #{status},FALSE,TRUE)\n" +
            "FROM\n" +
            "    service_join_list\n" +
            "WHERE\n" +
            "    service_join_list_id = #{jId} ")
    boolean judge(@Param("jId") Integer jId,@Param("status") Boolean status);
}
