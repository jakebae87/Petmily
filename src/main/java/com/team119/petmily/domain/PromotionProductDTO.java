package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromotionProductDTO {
	private int PROMOTION_ID;
	private String PROMOTION_NAME;
	private String PROMOTION_IMAGE;
	private LocalDateTime PROMOTION_START;
	private LocalDateTime PROMOTION_END;
	private int PROMOTION_DISCOUNT;
	private String PROMOTION_VALUE1;
}
