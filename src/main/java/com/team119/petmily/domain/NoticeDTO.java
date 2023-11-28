package com.team119.petmily.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoticeDTO {

	private int notice_id; 
	private String notice_title; 
	private String notice_writer;
	private int notice_count;
	private String notice_content;
	private Date notice_regdate;
}
