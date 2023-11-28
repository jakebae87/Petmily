package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewReplyDTO {

	private int reply_id;
	private int review_id;
	private String reply_writer;
	private String reply_content;
	private LocalDateTime reply_regdate;
}
