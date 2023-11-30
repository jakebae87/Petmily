package com.team119.petmily.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.OrderDetailDTO;
import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.pagination.PageMaker;
import com.team119.petmily.pagination.SearchCriteria;
import com.team119.petmily.service.CartService;
import com.team119.petmily.service.OrderDetailService;
import com.team119.petmily.service.OrderProductService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Controller
@RequestMapping("/cart")
@Log4j2
@AllArgsConstructor
public class CartController {

	CartService cservice;
	OrderProductService opservice;
	OrderDetailService odservice;

	// ** CartList(회원별 장바구니 리스트)
//	@GetMapping("/cartList")
//	public void cartList(Model model) {
//		model.addAttribute("banana", cservice.selectList());
//		log.info("** CartList 성공 **");
//	}
	
	// ** 주문내역 목록 페이지네이션
	@GetMapping("/cartList")
	public void cartList(Model model, SearchCriteria cri, PageMaker pageMaker) {
		// 1) Criteria 처리
		cri.setSnoEno();
		
		// 2) Service 처리
		model.addAttribute("banana", cservice.bcriList(cri));
		
		// 3) View 처리 : PageMaker 필요
		pageMaker.setCri(cri);
		pageMaker.setTotalRowsCount(cservice.criTotalCount(cri)); 
		// => ver01: 전체 rows 갯수
		//    ver02: 검색조건에 해당하는  rows 갯수
		model.addAttribute("pageMaker", pageMaker);
	}

	// ** CartInert(장바구니 추가) Get
	@GetMapping(value = "/cartInsert")
	public void cartInsert() {
		// viewName 생략
	}
	
	@PostMapping("/cartJoin")
    public String insert(@RequestParam String user_id, @RequestParam int product_id, @RequestParam int product_cnt) {
		String uri="cart/cartInsert";
		
		cservice.insert(user_id, product_id, product_cnt);
        
		return uri;
    }

	// ** CartInert(장바구니 추가) 비동기 Post
	@PostMapping(value = "/cartInsertP",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> cartInsert(@RequestParam String user_id, @RequestParam int product_id, @RequestParam int product_cnt) {
		
		ResponseEntity<?> result = null;
		
		cservice.insert(user_id, product_id, product_cnt);
		
		// => Service 처리
//		if (cservice.insert(user_id, product_id, product_cnt) != null) {
//			result = ResponseEntity.status(HttpStatus.OK).body("장바구니에 상품 추가 성공");
//			log.info("** cartInsert HttpStatus.OK => " + HttpStatus.OK);
//		} else {
//			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("장바구니에 상품 추가 실패");
//			log.info("** cartInsert HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
//		}
		return result;
	}
	
	// ** cdetail(장바구니 세부내역)
	@GetMapping(value ="/cdetail")
	public String cdetail(HttpServletRequest request, Model model, CartDTO dto) {
		model.addAttribute("apple", cservice.selectOne(dto));
		
		if ( "U".equals(request.getParameter("jCode")) )
			 return "cart/cartUpdate";
		else return "cart/cartDetail";
	}
	
	// ** cdelete(장바구니 상품 삭제)
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

// ====================================================

	// ** OrderProductList(회원별 주문리스트)
//	@GetMapping("/orderProduct")
//	public void orderProductList(Model model) {
//		model.addAttribute("banana", opservice.selectList());
//		log.info("** OrderProductList 성공 **");
//	}
	
	// ** 주문내역 목록 페이지네이션
	@GetMapping("/orderProduct")
	public void orderProductList(Model model, SearchCriteria cri, PageMaker pageMaker) {
		// 1) Criteria 처리
		cri.setSnoEno();
		
		// 2) Service 처리
		model.addAttribute("banana", opservice.bcriList(cri));
		
		// 3) View 처리 : PageMaker 필요
		pageMaker.setCri(cri);
		pageMaker.setTotalRowsCount(opservice.criTotalCount(cri)); 
		// => ver01: 전체 rows 갯수
		//    ver02: 검색조건에 해당하는  rows 갯수
		model.addAttribute("pageMaker", pageMaker);
	}
	
	// ** OrderProductInsert(주문내역 추가) Get
	@GetMapping(value = "/orderProductInsert")
	public void orderProductInsert() {
		// viewName 생략
	}
	
	// ** orderProductInsert(주문내역 추가) Post
	@PostMapping(value="/orderProductJoin")
	public String orderProductJoin(OrderProductDTO dto, Model model)  {
		// 1. 요청분석 & Service
		String uri="cart/orderProduct";
		
		// 2. Service 처리
		if ( opservice.insert(dto) > 0 ) {
			model.addAttribute("message", "주문내역 추가 성공");
		}else {
			model.addAttribute("message", "주문내역 상품 추가 실패");
			uri="cart/orderProductInsert";
		}
		
		// 3. View 
		return uri;
	}

	// ** orderProductInsert(주문내역 추가) 비동기 Post
	@PostMapping(value = "/orderProductInsertP",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> orderProductInsert(OrderProductDTO dto) {
		
		ResponseEntity<?> result = null;
		
		// => Service 처리
		if (opservice.insert(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("주문내역 추가 성공");
			log.info("** orderProduct HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주문내역 추가 실패");
			log.info("** orderProduct HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}
		return result;
	}

	// ** opdetail(주문내역 세부내역)
	@GetMapping(value ="/opdetail")
	public String opdetail(HttpServletRequest request, Model model, OrderProductDTO dto) {
		model.addAttribute("apple", opservice.selectOne(dto));
		
		if ( "U".equals(request.getParameter("jCode")) )
			 return "cart/orderProductUpdate";
		else return "cart/orderProductDetail";
	}
	
	// ** orderProductUpdate(주문내역 수정) Post
	@PostMapping(value="/orderProductUpdate")
	public String orderProductUpdate(OrderProductDTO dto, Model model)  {
		// => 처리결과에 따른 화면 출력을 위해서 dto의 값을 Attribute에 보관
		model.addAttribute("apple", dto);
		String uri="cart/orderProductDetail";
		
		// 2. Service 처리
		if ( opservice.update(dto) > 0 ) {
			model.addAttribute("message", "주문내역 수정 성공");
		}else {
			model.addAttribute("message", "주문내역 수정 실패");
			uri="cart/orderProductInsert";
		}
		
		// 3. View 
		return uri;
	}

	// ** orderProductUpdate(주문내역 수정) 비동기 Post
	@PostMapping(value = "/orderProductUpdateP",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> orderProductUpdate(OrderProductDTO dto) {
		
		ResponseEntity<?> result = null;
		
		// => Service 처리
		if (opservice.update(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("주문내역 수정 성공");
			log.info("** orderProduct HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주문내역 수정 실패");
			log.info("** orderProduct HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}
		return result;
	}
	
	// ** opdelete(주문내역 삭제)
	@DeleteMapping("/opdelete/{ii}")
	public ResponseEntity<?> opdelete(@PathVariable("ii") int order_key, OrderProductDTO dto) {
		dto.setOrder_key(order_key);
		if (opservice.delete(dto) > 0) {
			log.info("** opdelete HttpStatus.OK => " + HttpStatus.OK);
			return new ResponseEntity<String>("** 삭제 성공 **", HttpStatus.OK);
		} else {
			log.info("** opdelete HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
			return new ResponseEntity<String>("** 삭제 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
		}
	}

// ====================================================

	// ** OrderDetailList(회원별 주문상세리스트)
//	@GetMapping("/orderDetail")
//	public void orderDetailList(Model model) {
//		model.addAttribute("banana", odservice.selectList());
//		log.info("** OrderDetailList 성공 **");
//	}
	
	// ** 주문내역 목록 페이지네이션
	@GetMapping("/orderDetail")
	public void orderDetailList(Model model, SearchCriteria cri, PageMaker pageMaker) {
		// 1) Criteria 처리
		cri.setSnoEno();
		
		// 2) Service 처리
		model.addAttribute("banana", odservice.bcriList(cri));
		
		// 3) View 처리 : PageMaker 필요
		pageMaker.setCri(cri);
		pageMaker.setTotalRowsCount(odservice.criTotalCount(cri)); 
		// => ver01: 전체 rows 갯수
		//    ver02: 검색조건에 해당하는  rows 갯수
		model.addAttribute("pageMaker", pageMaker);
	}
	
	// ** OrderDetailInsert(주문상세내역 추가) Get
	@GetMapping(value = "/orderDetailInsert")
	public void orderDetailInsert() {
		// viewName 생략
	}
	
	// ** orderDetailInsert(주문상세내역 추가) Post
	@PostMapping(value="/orderDetailJoin")
	public String orderDetailJoin(OrderDetailDTO dto, Model model)  {
		// 1. 요청분석 & Service
		String uri="cart/orderDetail";
		
		// 2. Service 처리
		if ( odservice.insert(dto) > 0 ) {
			model.addAttribute("message", "장바구니에 상품 추가 성공");
		}else {
			model.addAttribute("message", "장바구니에 상품 추가 실패");
			uri="cart/orderDetailInsert";
		}
		
		// 3. View 
		return uri;
	}

	// ** orderDetailInsert(주문내역 추가) 비동기 Post
	@PostMapping(value = "/orderDetailInsertP",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> orderDetailInsert(OrderDetailDTO dto) {
		
		ResponseEntity<?> result = null;
		
		// => Service 처리
		if (odservice.insert(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("주문상세내역 추가 성공");
			log.info("** orderDetail HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주문상세내역 추가 실패");
			log.info("** orderDetail HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}
		return result;
	}
	
	// ** oddetail(주문상세내역 세부내역)
	@GetMapping(value ="/oddetail")
	public String oddetail(HttpServletRequest request, Model model, OrderDetailDTO dto) {
		model.addAttribute("apple", odservice.selectOne(dto));
		
		if ( "U".equals(request.getParameter("jCode")) )
			 return "cart/orderDetailUpdate";
		else return "cart/orderDetailDetail";
	}
	
	// ** orderProductUpdate(주문내역 수정) Post
	@PostMapping(value="/orderDetailUpdate")
	public String orderDetailUpdate(OrderDetailDTO dto, Model model)  {
		// => 처리결과에 따른 화면 출력을 위해서 dto의 값을 Attribute에 보관
		model.addAttribute("apple", dto);
		String uri="cart/orderDetailDetail";
		
		// 2. Service 처리
		if ( odservice.update(dto) > 0 ) {
			model.addAttribute("message", "주문내역 수정 성공");
		}else {
			model.addAttribute("message", "주문내역 수정 실패");
			uri="cart/orderProductInsert";
		}
		
		// 3. View 
		return uri;
	}

	// ** orderProductUpdate(주문내역 수정) 비동기 Post
	@PostMapping(value = "/orderDetailUpdateP",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> orderDetailUpdate(OrderDetailDTO dto) {
		
		ResponseEntity<?> result = null;
		
		// => Service 처리
		if (odservice.update(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("주문상세내역 수정 성공");
			log.info("** orderProduct HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주문상세내역 수정 실패");
			log.info("** orderProduct HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}
		return result;
	}

	// ** oddelete(주문상세내역 삭제)
	@DeleteMapping("/oddelete/{ii}")
	public ResponseEntity<?> oddelete(@PathVariable("ii") int order_detail_key, OrderDetailDTO dto) {
		dto.setOrder_detail_key(order_detail_key);
		if (odservice.delete(dto) > 0) {
			log.info("** oddelete HttpStatus.OK => " + HttpStatus.OK);
			return new ResponseEntity<String>("** 삭제 성공 **", HttpStatus.OK);
		} else {
			log.info("** oddelete HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
			return new ResponseEntity<String>("** 삭제 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
		}
	}

}
