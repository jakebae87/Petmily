package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewReplyDTO {

	private int REPLY_ID;
	private int REVIEW_ID;
	private String REPLY_WRITER;
	private String REPLY_CONTENT;
	private LocalDateTime REPLY_REGDATE;
}
