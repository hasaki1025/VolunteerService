package com.volunteer.mapper;

import com.volunteer.pojo.po.ActivityType;
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
public interface ActivityTypeMapper{

    boolean insert(@Param("tag") String tag);

    @Select("SELECT " +
            "activity_type_id AS \"activityTypeId\"," +
            "activity_type_name AS \"activityTypeName\"" +
            "FROM activity_type")
    List<ActivityType> selectAll();

    @Update("UPDATE \n" +
            "  `volunteer_system`.`activity_type` \n" +
            "SET\n" +
            "  `activity_type_name` = #{activityTypeName} \n" +
            "WHERE `activity_type_id` = #{activityTypeId}")
    boolean update(ActivityType activityType);

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`activity_type` \n" +
            "WHERE `activity_type_id` = #{tid}")
    boolean delete(Integer tid);

    @Select("SELECT \n" +
            "  `activity_type_id`\n" +
            "FROM\n" +
            "  `volunteer_system`.`activity_type`\n" +
            "WHERE\n" +
            "   activity_type_name = #{activityName}")
    Integer getId(@Param("activityName") String activityName);

    @Select("SELECT \n" +
            "  `activity_type_name` \n" +
            "FROM\n" +
            "  `volunteer_system`.`activity_type` ")
    List<String> getAll();

    @Select("SELECT LAST_INSERT_ID();")
    Integer getLastId();

    @Select("SELECT activity_type_id AS \"activityTypeId\",\n" +
            "            activity_type_name AS \"activityTypeName\"\n" +
            "            FROM activity_type\n" +
            "            WHERE\n" +
            "               activity_type_id = #{id}")
    ActivityType selectById(@Param("id") Integer id);
}
