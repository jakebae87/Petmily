package com.team119.petmily.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.ProductDTO;
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

	@GetMapping("/productList")
	public ResponseEntity<List<ProductDTO>> productList() {
		List<ProductDTO> productList = pservice.selectList();
		return new ResponseEntity<>(productList, HttpStatus.OK);
	}
}
