package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	
	private String USER_ID;
	private String USER_PASSWORD;
	private String USER_NAME;
	private String USER_EMAIL;
	private String USER_BIRTHDAY;
	private String USER_PHONE;
	private String ZIPCODE;
	private String ADDR;
	private String ADDR_DETAIL;
}
