package com.team119.petmily.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryDTO {

	private int inquiry_id;
	private String inquiry_title;
	private String inquiry_writer;
	private int inquiry_count;
	private String inquiry_content;
	private Date inquiry_regdate;
	private String answer_content;
	private Date answer_regdate;
}
