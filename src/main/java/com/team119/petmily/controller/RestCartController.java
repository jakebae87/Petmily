package com.team119.petmily.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.service.CartService;
import com.team119.petmily.service.OrderDetailService;
import com.team119.petmily.service.OrderProductService;
import com.team119.petmily.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/rscart")
@Log4j2
@AllArgsConstructor
public class RestCartController {

	CartService cservice;
	OrderProductService opservice;
	OrderDetailService odservice;
	UserService uservice;

	@GetMapping("/cartList")
	// => React Connect Test
	public ResponseEntity<List<CartDTO>> cartList() {
		List<CartDTO> CartList = cservice.selectList();
		return new ResponseEntity<>(CartList, HttpStatus.OK);
	}

	// ** 리액트 장바구니 상품 삭제
	@DeleteMapping("/cdelete/{ii}/{jj}")
	public ResponseEntity<?> cdelete(@PathVariable("ii") String user_id, @PathVariable("jj") int product_id,
			CartDTO dto) {
		dto.setUser_id(user_id);
		dto.setProduct_id(product_id);
		if (cservice.delete(dto) > 0) {
			log.info("** cdelete HttpStatus.OK => " + HttpStatus.OK);
			return new ResponseEntity<String>("** 삭제 성공 **", HttpStatus.OK);
		} else {
			log.info("** cdelete HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
			return new ResponseEntity<String>("** 삭제 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
		}
	}
	
	// ** 리액트 상품상세페이지 장바구니 추가 Post
	@PostMapping(value = "/cartInsert")
	public void cartInsert(@RequestParam String user_id, @RequestParam int product_id, @RequestParam int product_cnt) {		
		cservice.insert(user_id, product_id, product_cnt);
	}

	// ** 리액트 홈 장바구니 추가 Post
	@PostMapping(value = "/cartInsertP/{ii}")
	public ResponseEntity<?> cartInsertP(@PathVariable("ii") int product_id) {		
	    try {
	        cservice.insertP(product_id);
	        return new ResponseEntity<String>("Success", HttpStatus.OK);
	    } catch (Exception e) {
	        log.error("Error in cartInsertP", e);
	        return new ResponseEntity<String>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@GetMapping("/orderproductList")
	public ResponseEntity<List<OrderProductDTO>> orderProductList() {
		List<OrderProductDTO> OrderProductList = opservice.selectList();
		return new ResponseEntity<>(OrderProductList, HttpStatus.OK);
	}
	
	@GetMapping("/userList")
	public ResponseEntity<List<UserDTO>> userList() {
		List<UserDTO> UserList = uservice.selectList();
		return new ResponseEntity<>(UserList, HttpStatus.OK);
	}
}
