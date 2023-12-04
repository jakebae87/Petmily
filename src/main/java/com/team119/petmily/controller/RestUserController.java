package com.team119.petmily.controller;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<?> login(HttpSession session, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;
	    
	    String id = dto.getUser_id();
	    String password = dto.getUser_password(); 

	    // 2) service 처리
	    dto = service.selectOne(dto);
	    log.info("dto ="+dto);
	    log.info("password ="+password);
	    log.info("dto.getUser_id ="+dto.getUser_id());
	    if (dto != null && password.equals(dto.getUser_password())) {    
	        session.setAttribute("loginID", dto.getUser_id());
	        session.setAttribute("loginPassword", dto.getUser_password());
	        session.setAttribute("loginName", dto.getUser_name());
	        final UserDTO userDTO = UserDTO.builder()
	            .user_id(dto.getUser_id())
	            .user_password(dto.getUser_password())
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
	            return ResponseEntity.status(HttpStatus.OK).body("~~ 회원가입 성공!! 로그인 후 이용하세요 ~~");
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("~~ 회원가입 실패!! 다시 시도하세요 ~~");
	        }
	    } catch (Exception e) {
	        log.error("** 회원가입 중 에러 발생: " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("~~ 시스템 오류 발생! 잠시 후 다시 시도하세요 ~~");
	    }
	}
	
	
	
}
