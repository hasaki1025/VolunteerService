package com.volunteer.pojo.po;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
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
public class MessageBoardAdmin implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer messageBoardId;

    private String messageBoardContent;

    private Integer adminId;

    private LocalDateTime time;


}
