package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
	private int ORDER_DETAIL_KEY;
	private int ORDER_KEY;
	private int PRODUCT_ID;
	private int PRODUCT_CNT;
	private int PRODUCT_KIND_PRICE;
	private String DELIVERY_STATUS; 
}
