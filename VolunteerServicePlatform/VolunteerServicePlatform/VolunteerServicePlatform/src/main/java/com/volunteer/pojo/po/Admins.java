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
public class Admins implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer adminId;

    private String adminName;

    private String adminPassword;


}
