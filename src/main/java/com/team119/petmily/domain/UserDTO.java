package com.team119.petmily.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
   
   private String user_id;
   private String user_password;
   private String user_name;
   private String user_email;
   private String user_birthday;
   private String user_phone;
   private String zipcode;
   private String addr;
   private String addr_detail;
}
