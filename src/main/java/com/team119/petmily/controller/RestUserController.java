package com.team119.petmily.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.UserDTO;

import com.team119.petmily.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/rsuser")
@Log4j2
@AllArgsConstructor
public class RestUserController {
	UserService service;
	

	@PostMapping(value="/Login")
	public ResponseEntity<?> login(HttpServletRequest request, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;

	    String id = dto.getUser_id();
	    String password = dto.getUser_password(); 

	    // 2) service 처리
	    dto = service.selectOne(dto);
	    log.info("dto =" + dto);
	    log.info("password =" + password);
	    log.info("dto.getUser_id =" + dto.getUser_id());
	    log.info("dto.getUser_name ="+dto.getUser_name());
	    if (dto != null && id.equals(dto.getUser_id()) && password.equals(dto.getUser_password())) {
	        HttpSession session = request.getSession(); // 세션 가져오기
	        session.setAttribute("loginID", dto.getUser_id());
	        session.setAttribute("loginName", dto.getUser_name());
	        final UserDTO userDTO = UserDTO.builder()
	            .user_id(dto.getUser_id())
	            .user_name(dto.getUser_name())
	            .user_email(dto.getUser_email())
	            .user_phone(dto.getUser_phone())
	            .zipcode(dto.getZipcode())
	            .addr(dto.getAddr())
	            .addr_detail(dto.getAddr_detail())
	            .build();

	        result = ResponseEntity.status(HttpStatus.OK).body(userDTO);
	        log.info("** login HttpStatus.OK => " + HttpStatus.OK);
	    } else {
	        result = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        log.info("** login HttpStatus.UNAUTHORIZED => " + HttpStatus.UNAUTHORIZED);
	    }
	    return result;
	}	
	
	@PostMapping(value = "/Signup")
	public ResponseEntity<String> signup(@RequestBody UserDTO dto) {
	    try {
	        // Service 처리
	        if (service.insert(dto) > 0) {
	            return ResponseEntity.status(HttpStatus.OK).body("회원가입 성공");
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("~~ 회원가입 실패!! 다시 시도하세요 ~~");
	        }
	    } catch (Exception e) {
	        log.error("** 회원가입 중 에러 발생: " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("~~ 시스템 오류 발생! 잠시 후 다시 시도하세요 ~~");
	    }
	}
	
	@PostMapping("/Findid")
	public ResponseEntity<UserDTO> findUserId(HttpSession session, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;
	    
	    String username = dto.getUser_name(); 
	    String useremail = dto.getUser_email(); 
	    String foundUserID = service.foundUserId(username, useremail); // 해당 메서드로 사용자 아이디 찾기
	    
	    UserDTO userDTO = new UserDTO();
	    if (foundUserID != null) {
	        userDTO.setUser_id(foundUserID);
	        return ResponseEntity.ok(userDTO);
	    } else {
	        // 해당 사용자를 찾을 수 없을 때 처리
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	    }
	}
	
	
	@PostMapping("/Findpw")
	public ResponseEntity<UserDTO> findUserPw(HttpSession session, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;
	    
	    String userid = dto.getUser_id(); 
	    String useremail = dto.getUser_email(); 
	    String foundUserPW = service.foundUserPw(userid, useremail); 
	
	    UserDTO userDTO = new UserDTO();
	    if (foundUserPW != null) {
	        userDTO.setUser_password(foundUserPW);
	        return ResponseEntity.ok(userDTO);
	    } else {
	        // 해당 사용자를 찾을 수 없을 때 처리
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	    }
	}
	
	
}
