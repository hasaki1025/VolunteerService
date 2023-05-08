package com.volunteer.pojo.po;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author capkin
 * @since 2023-01-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class ServiceJoinList implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer serviceJoinListId;

    private Integer activityId;

    private Integer userId;

    private Double serviceTime;

    private String telephone;

    private String registerTime;

    private Integer isExam;

    private Integer isSign;


}
