package com.team119.petmily.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.OrderDetailDTO;
import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.service.BoardService;
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
   BoardService boardService;

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
   
   @PostMapping(value = "/order")
   public ResponseEntity<String> order(HttpSession session, @RequestBody OrderProductDTO opdto, OrderDetailDTO oddto) {
      
      try {
         // orderItems를 JSON 배열로 파싱
          JSONParser jsonParser = new JSONParser();
          JSONArray jsonArray = (JSONArray) jsonParser.parse(opdto.getOrderItems());
          
          // 주문상세 insert
          for (Object item : jsonArray) {
               JSONObject jsonObject = (JSONObject) item;

               int product_id = ((Long) jsonObject.get("product_id")).intValue();
               int product_cnt = ((Long) jsonObject.get("product_cnt")).intValue();
               int product_price = ((Long) jsonObject.get("product_price")).intValue();
               int promotion_discount = ((Long) jsonObject.get("promotion_discount")).intValue();
               
               int calcprice = product_price - (product_price * promotion_discount / 100);
               
               oddto.setProduct_id(product_id);
               oddto.setProduct_cnt(product_cnt);
               oddto.setProduct_kind_price(calcprice);
               
               // 주문상세 추가
               odservice.insert(oddto);
               
           }
          
          // 재고/판매수량 변경
          pservice.updateP();

          // 주문 테이블에 추가
          opservice.insert(opdto);

          // 장바구니 삭제
          String user_id = (String) session.getAttribute("loginID");
           cservice.deleteP(user_id);
           
           return ResponseEntity.status(HttpStatus.OK).body("주문 완료");
       } catch (Exception e) {
           log.error("** 주문 중 에러 발생: " + e.getMessage());
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("오류 발생");
       }
   }
   
   @DeleteMapping(value = "/deleteOrder/{ii}")
   public ResponseEntity<String> dorder(HttpSession session, @PathVariable("ii") int order_key, OrderProductDTO opdto, OrderDetailDTO oddto) {
      
      try {
           // 상품 재고/판매 수량 롤백    
           pservice.updateD(order_key);
          
           opdto.setOrder_key(order_key);
           oddto.setOrder_key(order_key);
           
          // 주문 테이블에 추가
           opservice.delete(opdto);
           odservice.delete(oddto);
           
           return ResponseEntity.status(HttpStatus.OK).body("주문 취소 완료");
       } catch (Exception e) {
           log.error("** 주문 중 에러 발생: " + e.getMessage());
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("오류 발생");
       }
   }
      
   // ===============================================================
   
   @GetMapping("/orderproductList")
   public ResponseEntity<List<OrderProductDTO>> orderProductList(HttpSession session) {
      String user_id = (String) session.getAttribute("loginID");
      List<OrderProductDTO> OrderProductList = odservice.selectListP(user_id);
      System.out.println(OrderProductList);
      return new ResponseEntity<>(OrderProductList, HttpStatus.OK);
   }
   
   // ===============================================================
   
   @GetMapping(value = "/inquiry/list")
   public ResponseEntity<?> inquiryList(HttpSession session) {
      String review_writer = (String) session.getAttribute("loginName");
      
      ResponseEntity<?> result = null;

      List<InquiryDTO> list = cservice.getInquiryList(review_writer);

      if (list != null) {
         result = ResponseEntity.status(HttpStatus.OK).body(list);
         log.info("Inquiry List HttpStatus => " + HttpStatus.OK);
      } else {
         result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
         log.info("Inquiry List HttpStatus => " + HttpStatus.BAD_GATEWAY);
      }

      return result;
   }
   
   // ===============================================================
   
   @GetMapping(value = "/review/list")
   public ResponseEntity<?> reviewList(SearchDTO searchDTO) {
      ResponseEntity<?> result = null;

      List<ReviewDTO> list = cservice.getReviewList();
      if (list != null) {
         result = ResponseEntity.status(HttpStatus.OK).body(list);
         log.info("Review List HttpStatus => " + HttpStatus.OK);
      } else {
         result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
         log.info("Review List HttpStatus => " + HttpStatus.BAD_GATEWAY);
      }

      return result;
   }
}