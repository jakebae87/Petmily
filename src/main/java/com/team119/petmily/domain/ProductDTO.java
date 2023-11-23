package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
	private int PRODUCT_ID;
	private int PROMOTION_ID;
	private String PRODUCT_KIND;
	private String PRODUCT_CATEGORY;
	private String PRODUCT_NAME;
	private String PRODUCT_DESCRIPTION;
	private int PRODUCT_PRICE;
	private int PRODUCT_STOCK;
	private int PRODUCT_SALES;
	private LocalDateTime PRODUCT_REGDATE;
	private String PRODUCT_MAINIMAGEPATH;
	private double PRODUCT_RATING;
}
