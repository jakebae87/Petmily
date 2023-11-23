package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryDTO {

	private int INQUIRY_ID;
	private String INQUIRY_TITLE;
	private String INQUIRY_WRITER;
	private int INQUIRY_COUNT;
	private String INQUIRY_CONTENT;
	private LocalDateTime INQUIRY_REGDATE;
	private String ANSWER_CONTENT;
	private LocalDateTime ANSWER_REGDATE;
}
