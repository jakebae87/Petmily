package com.team119.petmily.domain;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductImageDTO extends ProductDTO {
	private int pimage_id;
	private int product_id;
	private String product_imagepath;
	private MultipartFile uploadfilef;
	private String product_value1;
}
