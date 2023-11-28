package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromotionProductDTO {
	private int prormotion_id;
	private String promotion_name;
	private String promotion_image;
	private LocalDateTime promotion_start;
	private LocalDateTime promotion_end;
	private int promotion_discount;
	private String promotion_value1;
}
