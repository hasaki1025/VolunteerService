package com.volunteer.mapper;

import com.volunteer.pojo.po.VolunteerConsultComment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
public interface VolunteerConsultCommentMapper {

    @Select("SELECT\n" +
            "\tvcc.volunteer_consult_comment_id AS \"volunteerConsultCommentId\",\n" +
            "\tu.`username`,\n" +
            "\tu.`image` AS \"avatar\",\n" +
            "\tvcc.`volunteer_consult_comment_content` AS \"content\"\n" +
            "FROM\n" +
            "\tvolunteer_consult_comment vcc,users u\n" +
            "WHERE\n" +
            "\tvcc.`user_id` = u.`user_id` \n" +
            "AND\n" +
            "\tvcc.`volunteer_consult_list_id` = #{newId}")
    List<VolunteerConsultComment> getAll(Integer newId);

    @Insert("INSERT INTO `volunteer_system`.`volunteer_consult_comment` (\n" +
            "  `volunteer_consult_list_id`,\n" +
            "  `user_id`,\n" +
            "  `volunteer_consult_comment_content`\n" +
            ") \n" +
            "VALUES\n" +
            "  (\n" +
            "    #{newId},\n" +
            "    #{uid},\n" +
            "    #{content}\n" +
            "  ) ")
    boolean insert(@Param("uid") Integer uid,@Param("newId") Integer newId,@Param("content") String content);

    @Select("SELECT LAST_INSERT_ID();")
    Integer selectLastId();


    @Select("SELECT\n" +
            "            vcc.volunteer_consult_comment_id AS \"volunteerConsultCommentId\",\n" +
            "            u.`username`,\n" +
            "            u.`image` AS \"avatar\",\n" +
            "            vcc.`volunteer_consult_comment_content` AS \"content\"\n" +
            "            FROM\n" +
            "            volunteer_consult_comment vcc,users u\n" +
            "            WHERE\n" +
            "            vcc.`user_id` = u.`user_id` \n" +
            "            AND\n" +
            "            vcc.volunteer_consult_comment_id = #{vcId}")
    VolunteerConsultComment getConsultCommentById(@Param("vcId") Integer vcId);
}
