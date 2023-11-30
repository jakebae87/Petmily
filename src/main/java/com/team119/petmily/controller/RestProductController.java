package com.team119.petmily.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.service.EventService;
import com.team119.petmily.service.ProductImageService;
import com.team119.petmily.service.ProductService;
import com.team119.petmily.service.PromotionProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/rsproduct")
@Log4j2
@AllArgsConstructor
public class RestProductController {
	
	PromotionProductService pmpservice;
	ProductService pservice;
	ProductImageService piservice;
	EventService eservice;
	
	@GetMapping("/checkdata")
	// => React Connect Test
	public String hello() {
		log.info("** React Connect Test 중 **");
		return "~~~ SpringBoot & React 안녕 !!!~~~";
	}
}
