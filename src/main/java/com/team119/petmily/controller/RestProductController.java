package com.team119.petmily.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.EventDTO;
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
	} //checkdata
	
//	@GetMapping("/productList")
//    public ResponseEntity<List<ProductDTO>> productList() {
//        List<ProductDTO> productList = pservice.selectList();
//        return new ResponseEntity<>(productList, HttpStatus.OK);
//    } //productList
	
	@GetMapping("/productDetail/{id}")
    public ResponseEntity<ProductDTO> productDetail(@PathVariable("id") int id, ProductDTO dto) {
        dto.setProduct_id(id);
        dto = pservice.selectOne(dto);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    } //productDetail
	
	@GetMapping("/promotionInfoList")
    public ResponseEntity<List<ProductDTO>> promotionInfoList() {
        List<ProductDTO> promotionInfoList = pservice.selectPromotionInfoList();
        return new ResponseEntity<>(promotionInfoList, HttpStatus.OK);
    } //promotionProductList
	
	@GetMapping("/promotionProductList/{id}")
    public ResponseEntity<List<ProductDTO>> promotionProductList(@PathVariable("id") int id) {
        List<ProductDTO> promotionProductList = pservice.selectPromotionList(id);
        return new ResponseEntity<>(promotionProductList, HttpStatus.OK);
    } //promotionProductList
	
	@GetMapping("/productList/{param1}/{param2}")
    public ResponseEntity<List<ProductDTO>> productList(
    		@PathVariable("param1") String kind, @PathVariable("param2") String category) {
        List<ProductDTO> productList = pservice.selectedList(kind, category);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    } //productList
	
	@GetMapping("/newProductList")
    public ResponseEntity<List<ProductDTO>> newProductList() {
        List<ProductDTO> newProductList = pservice.selectThisWeekList();
        return new ResponseEntity<>(newProductList, HttpStatus.OK);
    } //newProductList
	
	@GetMapping("/popularProductList")
    public ResponseEntity<List<ProductDTO>> popularProductList() {
        List<ProductDTO> popularProductList = pservice.selectPopularList();
        return new ResponseEntity<>(popularProductList, HttpStatus.OK);
    } //popularProductList
	
	@GetMapping("/discountedProductList")
    public ResponseEntity<List<ProductDTO>> discountedProductList() {
        List<ProductDTO> discountedProductList = pservice.selectDiscountedList();
        return new ResponseEntity<>(discountedProductList, HttpStatus.OK);
    } //discountedProductList
	
	@GetMapping("/searchedProductList/{searchKeyword}")
    public ResponseEntity<List<ProductDTO>> searchedProductList(
    		@PathVariable("searchKeyword") String searchKeyword) {
        List<ProductDTO> selectSearchedList = pservice.selectSearchedList(searchKeyword);
        return new ResponseEntity<>(selectSearchedList, HttpStatus.OK);
    } //searchedProductList
	
	@GetMapping("/eventList")
    public ResponseEntity<List<EventDTO>> eventList() {
        List<EventDTO> eventList = eservice.selectList();
        return new ResponseEntity<>(eventList, HttpStatus.OK);
    }
}
