package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FaqDTO {

	private int FAQ_ID;
	private String QUESTION_TYPE;
	private String FAQ_TITLE;
	private String FAQ_WRITER;
	private int FAQ_COUNT;
	private String FAQ_CONTENT;
	private LocalDateTime FAQ_REGDATE;
}
