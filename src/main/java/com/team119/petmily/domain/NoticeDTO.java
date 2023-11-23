package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoticeDTO {

	private int NOTICE_ID;
	private String NOTICE_TITLE; 
	private String NOTICE_WRITER;
	private int NOTICE_COUNT;
	private String NOTICE_CONTENT;
	private LocalDateTime NOTICE_REGDATE;
}
