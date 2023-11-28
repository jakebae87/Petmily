package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
	private int order_detail_key;
	private int order_key;
	private int product_id;
	private int product_cnt;
	private int product_kind_price;
	private String delivery_status;
}
