package com.team119.petmily.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.service.CartService;
import com.team119.petmily.service.OrderDetailService;
import com.team119.petmily.service.OrderProductService;
import com.team119.petmily.service.ProductService;
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
	ProductService pservice;

	@GetMapping("/cartList")
	// => React Connect Test
	public ResponseEntity<List<CartDTO>> cartList(HttpSession session) {
		String user_id = (String) session.getAttribute("loginID");
		
		// 세션이 비어있으면 실행하지 않고 403 Forbidden 응답 반환
	    if (user_id == null || user_id.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	    }
		
		List<CartDTO> CartList = cservice.selectList(user_id);
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
	@PostMapping(value = "/cartInsert/{ii}/{jj}")
	public ResponseEntity<?> cartInsert(HttpSession session, @PathVariable("ii") int product_id, @PathVariable("jj") int product_cnt) {		
		try {
	        // 세션에서 로그인 아이디를 가져오기
	        String user_id = (String) session.getAttribute("loginID");
	        
	        // user_id null
	        if (user_id == null) {
	            return new ResponseEntity<String>("로그인 해주세요.", HttpStatus.UNAUTHORIZED);
	        }

	        // 세션에서 가져온 로그인 아이디와 상품 ID를 사용하여 처리
	        cservice.insert(user_id, product_id, product_cnt);

	        return new ResponseEntity<String>("Success", HttpStatus.OK);
	    } catch (Exception e) {
	        log.error("Error in cartInsertP", e);
	        return new ResponseEntity<String>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	// ** 리액트 홈 장바구니 추가 Post
	@PostMapping(value = "/cartInsertP/{jj}")
	public ResponseEntity<?> cartInsertP(HttpSession session, @PathVariable("jj") int product_id) {
	    try {
	        // 세션에서 로그인 아이디를 가져오기
	        String user_id = (String) session.getAttribute("loginID");
	        
	        // user_id null
	        if (user_id == null) {
	            return new ResponseEntity<String>("로그인 해주세요.", HttpStatus.UNAUTHORIZED);
	        }

	        // 세션에서 가져온 로그인 아이디와 상품 ID를 사용하여 처리
	        cservice.insertP(user_id, product_id);

	        return new ResponseEntity<String>("Success", HttpStatus.OK);
	    } catch (Exception e) {
	        log.error("Error in cartInsertP", e);
	        return new ResponseEntity<String>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	// 리액트 장바구니 수량 Up 아이콘 Post
	@PostMapping(value = "/cartCntUp/{jj}")
	public ResponseEntity<?> cartCntUp(HttpSession session, @PathVariable("jj") int product_id) {
	    try {
	        // 세션에서 로그인 아이디를 가져오기
	        String user_id = (String) session.getAttribute("loginID");
	        
	        // user_id null
	        if (user_id == null) {
	            return new ResponseEntity<String>("로그인 해주세요.", HttpStatus.UNAUTHORIZED);
	        }

	        // 세션에서 가져온 로그인 아이디와 상품 ID를 사용하여 처리
	        cservice.upCnt(user_id, product_id);

	        return new ResponseEntity<String>("수량 증가", HttpStatus.OK);
	    } catch (Exception e) {
	        log.error("Error in cartCntUp", e);
	        return new ResponseEntity<String>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	// 리액트 장바구니 수량 Down 아이콘 Post
	@PostMapping(value = "/cartCntDown/{jj}")
	public ResponseEntity<?> cartCntDown(HttpSession session, @PathVariable("jj") int product_id) {
		try {
			// 세션에서 로그인 아이디를 가져오기
			String user_id = (String) session.getAttribute("loginID");
			
			// user_id null
	        if (user_id == null) {
	            return new ResponseEntity<String>("로그인 해주세요.", HttpStatus.UNAUTHORIZED);
	        }
			
			// 세션에서 가져온 로그인 아이디와 상품 ID를 사용하여 처리
			cservice.downCnt(user_id, product_id);
			
			return new ResponseEntity<String>("수량 감소", HttpStatus.OK);
		} catch (Exception e) {
			log.error("Error in cartCntDown", e);
			return new ResponseEntity<String>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// ===============================================================
	
	@GetMapping("/orderproductList")
	public ResponseEntity<List<OrderProductDTO>> orderProductList(HttpSession session) {
		String user_id = (String) session.getAttribute("loginID");
		List<OrderProductDTO> OrderProductList = odservice.selectListP(user_id);
		return new ResponseEntity<>(OrderProductList, HttpStatus.OK);
	}
	
	// ===============================================================
	
	@PostMapping(value = "/order")
	public ResponseEntity<String> order(@RequestBody OrderProductDTO dto) {
		
	    try {
	        // Service 처리
	        if (opservice.insert(dto) > 0) {
	            return ResponseEntity.status(HttpStatus.OK).body("주문 성공");
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("주문 실패");
	        }
	    } catch (Exception e) {
	        log.error("** 주문 중 에러 발생: " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("오류 발생");
	    }
	}
	
	
	
//	@PostMapping("/order")
//	public ResponseEntity<?> order() {
//		try {
//			
//			
//			cservice.delete(dto);
//			opservice.insert(dto);
//			odservice.insert(dto);
//			pservice.update(dto);
//			
//			return new ResponseEntity<>("주문 완료", HttpStatus.OK);
//		} catch (Exception e) {
//			log.error("Error in order", e);
//			return new ResponseEntity<String>("주문 실패", HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	
//	// 주문 완료 처리
//    @PostMapping("/order")
//    public ResponseEntity<String> order(HttpSession session, @RequestBody OrderProductDTO dto) {
//        try {
//            // 세션에서 로그인 아이디를 가져오기
//            String user_id = (String) session.getAttribute("loginID");
//
//            // user_id null
//            if (user_id == null) {
//                return new ResponseEntity<>("로그인 해주세요.", HttpStatus.UNAUTHORIZED);
//            }
//
//            // 주문 정보 설정
//            dto.setUser_id(user_id);
//
//            // 주문 및 상세 주문 내역 등록
//            orderService.placeOrder(dto);
//            
//            // 상세 주문 내역 등록
//            for (OrderDetailDTO orderDetailDTO : orderProductDTO.getOrderDetails()) {
//                orderDetailDTO.setOrder_key(orderProductDTO.getOrder_key());
//                orderDetailService.insert(orderDetailDTO);
//            }
//
//            // 주문에 따른 기타 처리 (예: 재고 차감 등)
//
//            // 장바구니에서 주문한 상품 삭제
//            // (이 부분은 상황에 따라 재고 차감 등이 끝난 후에 수행해야 할 수 있습니다.)
//            cservice.delete(new CartDTO(user_id, orderProductDTO.getProduct_id()));
//
//            return new ResponseEntity<>("주문 완료", HttpStatus.OK);
//        } catch (Exception e) {
//            log.error("Error in order", e);
//            return new ResponseEntity<>("주문 실패", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
