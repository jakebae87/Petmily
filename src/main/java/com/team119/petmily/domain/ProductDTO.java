package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
	private int product_id;
	private int promotion_id;
	private String product_kind;
	private String product_category;
	private String product_name;
	private String product_description;
	private int product_price;
	private int product_stock;
	private int product_sales;
	private LocalDateTime product_regdate;
	private String product_mainimagepath;
	private double product_rating;
}
