package com.team119.petmily.domain;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

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
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date product_regdate;
	
	private String product_mainimagepath;
	private MultipartFile uploadfilef;
	private double product_rating;
}
