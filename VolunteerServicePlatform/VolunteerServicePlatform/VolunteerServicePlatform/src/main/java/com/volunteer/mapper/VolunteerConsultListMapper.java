package com.volunteer.mapper;

import com.volunteer.pojo.bo.VolunteerConsultListBo;
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
public interface VolunteerConsultListMapper {

    @Insert("INSERT INTO `volunteer_system`.`volunteer_consult_list` (\n" +
            "  `volunteer_consult_list_title`,\n" +
            "  `volunteer_consult_list_img`,\n" +
            "  `volunteer_consult_list_content`,\n" +
            "  `volunteer_consult_list_time`\n" +
            ") \n" +
            "VALUES\n" +
            "  (\n" +
            "    #{volunteerConsultListTitle},\n" +
            "    #{volunteerConsultListImg},\n" +
            "    #{volunteerConsultListContent},\n" +
            "    #{volunteerConsultListTime}\n" +
            "  )")
    boolean create(@Param("volunteerConsultListTitle") String volunteerConsultListTitle,
                   @Param("volunteerConsultListContent") String volunteerConsultListContent,
                   @Param("volunteerConsultListImg") String volunteerConsultListImg,
                   @Param("volunteerConsultListTime") String volunteerConsultListTime);

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`volunteer_consult_list` \n" +
            "WHERE `volunteer_consult_list_id` = #{newId}")
    boolean delete(@Param("newId") Integer newId);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`volunteer_consult_list` \n" +
            "SET\n" +
            "  `volunteer_consult_list_title` = #{volunteerConsultListTitle},\n" +
            "  `volunteer_consult_list_img` = #{volunteerConsultListImg},\n" +
            "  `volunteer_consult_list_content` = #{volunteerConsultListContent},\n" +
            "  `volunteer_consult_list_time` = #{volunteerConsultListTime} \n" +
            "WHERE `volunteer_consult_list_id` = #{volunteerConsultListId}")
    boolean update(@Param("volunteerConsultListId") Integer volunteerConsultListId,
                   @Param("volunteerConsultListTitle") String volunteerConsultListTitle,
                   @Param("volunteerConsultListImg") String volunteerConsultListImg,
                   @Param("volunteerConsultListTime") String volunteerConsultListTime,
                   @Param("volunteerConsultListContent") String volunteerConsultListContent);

    @Select("SELECT \n" +
            "  `volunteer_consult_list_id` AS \"volunteerConsultListId\",\n" +
            "  `volunteer_consult_list_title` AS \"volunteerConsultListTitle\",\n" +
            "  `volunteer_consult_list_img` AS \"volunteerConsultListImg\",\n" +
            "  `volunteer_consult_list_content` AS \"volunteerConsultListContent\",\n" +
            "  `volunteer_consult_list_time` AS \"volunteerConsultListTime\"\n" +
            "FROM\n" +
            "  `volunteer_system`.`volunteer_consult_list` ")
    List<VolunteerConsultListBo> getAll();
}
