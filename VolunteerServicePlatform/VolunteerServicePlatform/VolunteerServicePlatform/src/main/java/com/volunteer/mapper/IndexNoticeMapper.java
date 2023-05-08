package com.volunteer.mapper;

import com.volunteer.pojo.bo.IndexNotices;
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
public interface IndexNoticeMapper {

    @Insert("INSERT INTO `volunteer_system`.`index_notice` (\n" +
            "  `index_notice_title`,\n" +
            "  `index_notice_img`,\n" +
            "  `index_notice_time`,\n" +
            "  `index_notice_content`\n" +
            ") \n" +
            "VALUES\n" +
            "  (\n" +
            "    #{indexNoticeTitle},\n" +
            "    #{indexNoticeImg},\n" +
            "    #{indexNoticeTime},\n" +
            "    #{indexNoticeContent}\n" +
            "  ) ;")
    boolean addNotice(@Param("indexNoticeTitle") String indexNoticeTitle,
                      @Param("indexNoticeImg") String indexNoticeImg,
                      @Param("indexNoticeContent") String indexNoticeContent,
                      @Param("indexNoticeTime") String indexNoticeTime);

    @Update("\n" +
            "UPDATE \n" +
            "  `volunteer_system`.`index_notice` \n" +
            "SET\n" +
            "  `index_notice_title` = #{indexNoticeTitle},\n" +
            "  `index_notice_img` = #{indexNoticeImg},\n" +
            "  `index_notice_content` = #{indexNoticeContent} \n" +
            "WHERE `index_notice_id` = #{indexNoticeId} ;\n")
    boolean update(@Param("indexNoticeId") Integer indexNoticeId,
                   @Param("indexNoticeTitle") String indexNoticeTitle,
                   @Param("indexNoticeImg") String indexNoticeImg,
                   @Param("indexNoticeContent") String indexNoticeContent);

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`index_notice` \n" +
            "WHERE `index_notice_id` = #{nId}")
    boolean delete(@Param("nId") Integer nId);

    @Select("SELECT \n" +
            "  `index_notice_id` AS \"indexNoticeId\",\n" +
            "  `index_notice_title` AS \"indexNoticeTitle\",\n" +
            "  `index_notice_img` AS \"indexNoticeImg\",\n" +
            "  `index_notice_time` AS \"indexNoticeTime\",\n" +
            "  `index_notice_content` AS \"indexNoticeContent\" \n" +
            "FROM\n" +
            "  `volunteer_system`.`index_notice` \n")
    List<IndexNotices> getAll();
}
