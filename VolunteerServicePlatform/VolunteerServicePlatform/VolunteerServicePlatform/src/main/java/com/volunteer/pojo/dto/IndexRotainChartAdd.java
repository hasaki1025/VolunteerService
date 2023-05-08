package com.volunteer.pojo.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
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
public class IndexRotainChartAdd implements Serializable {

    private static final long serialVersionUID = 1L;


    @JsonProperty("file")
    private String pictureValue;


}
