package com.volunteer.mapper;

import com.volunteer.pojo.po.IndexRotainChart;
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
public interface IndexRotainChartMapper {

    @Insert("INSERT INTO `volunteer_system`.`index_rotain_chart` (\n" +
            "  `picture_value`\n" +
            ") \n" +
            "VALUES\n" +
            "  (\n" +
            "    #{pictureValue}\n" +
            "  )")
    boolean add(@Param("pictureValue") String pictureValue);

    @Select("SELECT \n" +
            "  `picture_id` AS \"pictureId\",\n" +
            "  `picture_value` AS \"pictureValue\"\n" +
            "FROM\n" +
            "  `volunteer_system`.`index_rotain_chart` \n")
    List<IndexRotainChart> getAll();

    @Delete("DELETE \n" +
            "FROM\n" +
            "  `volunteer_system`.`index_rotain_chart` \n" +
            "WHERE `picture_id` = #{pId} ;")
    boolean delete(@Param("pId") Integer pId);

    @Update("UPDATE \n" +
            "  `volunteer_system`.`index_rotain_chart` \n" +
            "SET\n" +
            "  `picture_value` = #{pictureValue} \n" +
            "WHERE `picture_id` = #{pictureId} ")
    boolean update(@Param("pictureId") Integer pictureId,@Param("pictureValue") String pictureValue);

    @Select("SELECT \n" +
            "  `picture_value` AS \"pictureValue\"\n" +
            "FROM\n" +
            "  `volunteer_system`.`index_rotain_chart` \n")
    List<String> getAllUrl();

    @Select("SELECT LAST_INSERT_ID();")
    Integer getLastId();

    @Select("SELECT \n" +
            "  `picture_id` AS \"pictureId\"," +
            "  `picture_value` AS \"pictureValue\"\n" +
            "FROM\n" +
            "  `volunteer_system`.`index_rotain_chart` \n" +
            "WHERE" +
            "   picture_id = #{id}")
    IndexRotainChart selectById(@Param("id") Integer id);
}
