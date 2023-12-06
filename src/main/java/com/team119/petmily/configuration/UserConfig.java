package com.team119.petmily.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class UserConfig {
	@Bean
	public PasswordEncoder getPasswordEncord() {
		return new BCryptPasswordEncoder();
	}
}
