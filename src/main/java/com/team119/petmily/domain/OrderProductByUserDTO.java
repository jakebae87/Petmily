package com.team119.petmily.domain;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductByUserDTO extends ProductDTO {
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date order_date;
	private String user_id;
	private int order_key;
}
