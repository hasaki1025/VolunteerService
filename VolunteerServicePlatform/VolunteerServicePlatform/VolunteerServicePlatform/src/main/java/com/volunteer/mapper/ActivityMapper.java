package com.volunteer.mapper;

import com.volunteer.pojo.bo.ActivityBo;
import com.volunteer.pojo.dto.ActivityChange;
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
public interface ActivityMapper{

    @Select("SELECT \n" +
            "  a.`activity_code` AS \"activityCode\",\n" +
            "  b.activity_type_name AS \"type\",\n" +
            "  a.`activity_name` AS \"activityName\",\n" +
            "  a.`activity_img` AS \"activityImg\",\n" +
            "  a.`activity_time` AS \"activityTime\",\n" +
            "  a.`activity_count_all` AS \"activityCountAll\",\n" +
            "  a.`introduce` AS \"introduce\",\n" +
            "  a.`contact` AS \"contact\",\n" +
            "  a.`contact_telephone` AS \"contactTelephone\",\n" +
            "  a.`last_click_time` AS \"lastClickTime\",\n" +
            "  a.`click_count` AS \"clickCount\",\n" +
            "  a.`activity_id` AS \"activityId\",\n" +
            "  a.`activity_count_rest` AS \"activityCountRest\" \n" +
            "FROM\n" +
            "  `volunteer_system`.`activity` a,activity_type b\n" +
            "WHERE\n" +
            "  a.activity_type_id = b.activity_type_id\n")
    public List<ActivityBo> getAllActivities();

    public void clickActivity(@Param("cid") Integer cid);

    @Select("SELECT\n" +
            "\tactivity_id\n" +
            "FROM\n" +
            "\tactivity\n" +
            "WHERE\t\n" +
            "\tactivity_id = #{cid}")
    public Integer checkActivity(@Param("cid") Integer cid);

    @Select("SELECT\n" +
            "\tclick_count\n" +
            "FROM\n" +
            "\tactivity\n" +
            "WHERE\t\n" +
            "\tactivity_id = #{cid}")
    public Integer getClickCount(@Param("cid") Integer cid);

    @Delete("delete \n" +
            "from\n" +
            "  `volunteer_system`.`activity` \n" +
            "where `activity_id` = #{cid} ")
    public boolean delete(Integer cid);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`activity` \n" +
            "SET\n" +
            "  `activity_code` = #{activityCode},\n" +
            "  `activity_name` = #{activityName},\n" +
            "  `activity_img` = #{image},\n" +
            "  `activity_time` = #{activityTime},\n" +
            "  `activity_count_all` = #{activityCountAll},\n" +
            "  `introduce` = #{introduce},\n" +
            "  `contact` = #{contact},\n" +
            "  `contact_telephone` = #{contactTelephone}\n" +
            "WHERE `activity_id` = #{cid} ")
    boolean changeActivity(ActivityChange activityChange);


    @Insert("INSERT INTO `volunteer_system`.`activity` (\n" +
            "  `activity_code`,\n" +
            "  `activity_type_id`,\n" +
            "  `activity_name`,\n" +
            "  `activity_img`,\n" +
            "  `activity_time`,\n" +
            "  `activity_count_all`,\n" +
            "  `introduce`,\n" +
            "  `contact`,\n" +
            "  `contact_telephone`,\n" +
            "  `activity_count_rest`\n" +
            ") \n" +
            "VALUES\n" +
            "  (\n" +
            "    #{activityCode},\n" +
            "    #{typeId},\n" +
            "    #{activityName},\n" +
            "    #{activityImg},\n" +
            "    #{activityTime},\n" +
            "    #{activityCountAll},\n" +
            "    #{introduce},\n" +
            "    #{contact},\n" +
            "    #{contactTelephone},\n" +
            "    #{activityCountAll}\n" +
            "  ) ;")
    boolean insert(@Param("activityCode") String activityCode,
                   @Param("activityName") String activityName,
                   @Param("activityImg") String activityImg,
                   @Param("activityTime") String activityTime,
                   @Param("activityCountAll") Integer activityCountAll,
                   @Param("contact") String contact,
                   @Param("contactTelephone") String contactTelephone,
                   @Param("typeId") Integer typeId,
                   @Param("introduce") String introduce);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`activity` \n" +
            "SET\n" +
            "  `activity_count_rest` = #{activityCountAll} + activity_count_rest - activity_count_all,\n" +
            "  `activity_code` = #{activityCode},\n" +
            "  `activity_type_id` = #{typeId},\n" +
            "  `activity_name` = #{activityName},\n" +
            "  `activity_img` = #{image},\n" +
            "  `activity_time` = #{activityTime},\n" +
            "  `activity_count_all` = #{activityCountAll},\n" +
            "  `introduce` = #{introduce},\n" +
            "  `contact` = #{contact},\n" +
            "  `contact_telephone` = #{contactTelephone}\n" +
            "WHERE `activity_id` = #{aid}")
    boolean updateActivity(@Param("aid") Integer aid,
                           @Param("activityCode") String activityCode,
                           @Param("activityCountAll") Integer activityCountAll,
                           @Param("contact") String contact,
                           @Param("contactTelephone") String contactTelephone,
                           @Param("introduce") String introduce,
                           @Param("image") String image,
                           @Param("activityName") String activityName,
                           @Param("activityTime") String activityTime,
                           @Param("typeId") Integer typeId);

    @Update("UPDATE\n" +
            "\tactivity\n" +
            "SET\n" +
            "\tactivity_count_rest = activity_count_rest - 1\n" +
            "WHERE\n" +
            "\tactivity_id = (\n" +
            "\t\tIF(1,(SELECT sjl.activity_id FROM service_join_list sjl WHERE sjl.service_join_list_id = #{jId} limit 1),0))")
    boolean reduce(@Param("jId") Integer jId);

    @Select("SELECT\n" +
            "\tIF(a.`activity_count_rest` <= 0,FALSE,TRUE)\n" +
            "FROM \n" +
            "\tactivity a,service_join_list sjl\n" +
            "WHERE\n" +
            "\tsjl.service_join_list_id = #{jId}\n" +
            "AND\n" +
            "\tsjl.`activity_id` = a.`activity_id`")
    boolean check(@Param("jId") Integer jId);

    @Update("UPDATE\n" +
            "\tactivity\n" +
            "SET\n" +
            "\tactivity_count_rest = activity_count_rest + 1\n" +
            "WHERE\n" +
            "\tactivity_id = (\n" +
            "\t\tIF(1,(SELECT sjl.activity_id FROM service_join_list sjl WHERE sjl.service_join_list_id = #{jId} limit 1),0))")
    boolean cancel(Integer jId);
}
