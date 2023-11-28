package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageDTO {
	private int pimage_ID;
	private int product_id;
	private String product_imagepath;
	private String product_value1;
}
