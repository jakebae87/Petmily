package com.team119.petmily.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {

	private int review_id;
	private String review_writer;
	private String review_title;
	private int review_point;
	private int review_count;
	private String review_content;
	private Date review_regdate;
	private String review_image1;
	private String review_image2;
}
