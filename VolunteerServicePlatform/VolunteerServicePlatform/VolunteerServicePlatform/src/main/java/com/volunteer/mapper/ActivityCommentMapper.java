package com.volunteer.mapper;

import com.volunteer.pojo.bo.ActivityCommentInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Capkin
 * @version 1.0
 * @description TODO
 * @date 2023/1/31 12:21
 */
public interface ActivityCommentMapper {

    @Insert("INSERT INTO activity_comment(activity_id,user_id,activity_comment_content) " +
            "VALUES(#{activityId},#{userId},#{activityCommentContent})")
    public boolean insert(@Param("activityId") Integer activityId,
                            @Param("userId") Integer userId,
                          @Param("activityCommentContent") String activityCommentContent);

    @Select("SELECT\n" +
            "\tu.image AS \"image\",\n" +
            "\tu.username AS \"username\",\n" +
            "\ta.activity_comment_id AS \"activityCommentId\",\n" +
            "\ta.activity_comment_content AS \"content\"\n" +
            "\t\n" +
            "FROM\n" +
            "\tactivity_comment a,users u\n" +
            "WHERE\n" +
            "\ta.user_id = u.user_id\n" +
            "AND\t\n" +
            "\ta.activity_id = #{activityId}")
    public List<ActivityCommentInfo> getAllActivityComments(Integer activityId);

    @Select("SELECT LAST_INSERT_ID();")
    Integer getLastCommentId();

    @Select("SELECT\n" +
            "\tu.image AS \"image\",\n" +
            "\tu.username AS \"username\",\n" +
            "\ta.activity_comment_id AS \"activityCommentId\",\n" +
            "\ta.activity_comment_content AS \"content\"\n" +
            "\t\n" +
            "FROM\n" +
            "\tactivity_comment a,users u\n" +
            "WHERE\n" +
            "\ta.user_id = u.user_id\n" +
            "AND\t\n" +
            "\ta.activity_comment_id = #{lastId}")
    ActivityCommentInfo getComment(@Param("lastId") Integer lastId);
}
