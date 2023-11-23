package com.team119.petmily;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
// Spring Security 제외 시키기 (exclude = { SecurityAutoConfiguration.class })
@MapperScan(value = { "com.team119.petmily.mapperInterface" })
public class PetmilyApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetmilyApplication.class, args);
	}

}
