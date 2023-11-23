package com.team119.petmily.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductDTO {
	private int ORDER_KEY;
	private String USER_ID;
	private int ORDER_TOTAL_PRICE;
	private LocalDateTime ORDER_DATE;
	private String PAY_METHOD;
	private String ORDER_NAME;
	private String ORDER_EMAIL;
	private String ORDER_TEL;
	private String ORDER_ZIPCODE;
	private String ORDER_ADDR;
	private String ORDER_ADDR_DETAIL;
	private String ORDER_REQ;
}
