package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {

	private int REVIEW_ID;
	private String REVIEW_WRITER;
	private String REVIEW_TITLE;
	private int REVIEW_POINT;
	private int REVIEW_COUNT;
	private String REVIEW_CONTENT;
	private LocalDateTime REVIEW_REGDATE;
	private String REVIEW_IMAGE1;
	private String REVIEW_IMAGE2;
}
