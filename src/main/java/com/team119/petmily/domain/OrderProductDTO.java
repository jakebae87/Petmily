package com.team119.petmily.domain;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductDTO extends ProductDTO {
	private int order_key;
	private String user_id;
	private int order_total_price;
	
	//private LocalDateTime order_date;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date order_date;
	
	private String pay_method;
	private String order_name;
	private String order_email;
	private String order_tel;
	private String order_zipcode;
	private String order_addr;
	private String order_addr_detail;
	private String order_req;
	private String orderItems;
	private int product_review; 
}
