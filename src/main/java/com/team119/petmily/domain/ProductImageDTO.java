package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageDTO {
	private int PIMAGE_ID;
	private int PRODUCT_ID;
	private String PRODUCT_IMAGEPATH;
	private String PRODUCT_VALUE1;
}
