package com.volunteer.pojo.po;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

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
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    private String activityCode;

    private Integer activityTypeId;

    private String activityName;

    private String activityImg;

    private LocalDate activityTime;

    private Integer activityCountAll;

    private String introduce;

    private String contact;

    private String contactTelephone;

    private LocalDateTime lastClickTime;

    private Integer clickCount;


}
