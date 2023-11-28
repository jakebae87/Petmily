package com.team119.petmily.domain;

import java.sql.Date;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FaqDTO {

	private int faq_id;
	private String question_type;
	private String faq_title;
	private String faq_writer;
	private int faq_count;
	private String faq_content;
	private Date faq_regdate;
}
