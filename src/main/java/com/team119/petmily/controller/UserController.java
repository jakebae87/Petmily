package com.team119.petmily.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Controller
@RequestMapping("/user")
@Log4j2
@AllArgsConstructor
public class UserController {

	UserService service;

	@GetMapping(value = "/Loginf")
	public String Loginf(Model model) {
		model.addAttribute("banana", service.selectList());
		log.info("Loginf성공");
		return "/user/Loginf";
	}
	
	@GetMapping(value="/logout")
	public String logout(HttpSession session, Model model, RedirectAttributes rttr) {
		
		session.invalidate();
		rttr.addFlashAttribute("message", "~~ 로그아웃 성공 ~~");
		return "redirect:/home";
	} //logout
	@GetMapping(value="/newpwf")
	public void newpwf() {
		// viewName 생략
	} 
	
	// => password 만 수정
		@PostMapping(value="/changePassword")
		public String changePassword(HttpServletRequest request, Model model, UserDTO dto) {
			
					log.info("** update 성공 **");
					model.addAttribute("banana", dto);
					if ( service.update(dto) > 0 ) {
						log.info("** update 성공 **");
					}else {
						log.info("** update 실패 **");
					}
					
					return "/home";
		}

//	@PostMapping(value = "/Login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<?> login(HttpSession session, @RequestBody UserDTO dto) {
//	ResponseEntity<UserDTO> result = null;
//	// 1) password 보관
//	String password = dto.getUser_password(); 
//			
//	// 2) service 처리
//	dto = service.selectOne(dto);
//	if ( dto!=null && 
//				passwordEncoder.matches(password, dto.getUser_password()) ) {	
//		session.setAttribute("loginID", dto.getUser_id());
//		session.setAttribute("loginPassword", dto.getUser_password());
//		// => response 로 전송할 객체생성
//		//    UserDTO, 빌더 패턴적용
//		//	  userDTO 의 값 변경을 막기위해 final 을 사용하기도 함.	
//		final UserDTO userDTO = UserDTO.builder()
//							.user_id(dto.getUser_id())
//							.user_password(dto.getUser_password())
//							.build();
//		
//		result = ResponseEntity.status(HttpStatus.OK).body(userDTO);
//		log.info("** login HttpStatus.OK => "+HttpStatus.OK);
//	}else {
//		result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
//		log.info("** login HttpStatus.BAD_GATEWAY => "+HttpStatus.BAD_GATEWAY);
//	}
//	return result;
//}
	@PostMapping(value = "/Login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> login(HttpSession session, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;
	    
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
	@GetMapping(value = "/Joinf")
	public void Joinf() {
		// viewName 생략 -> 요청명이 viewName 이 됨
	}
//
//	@PostMapping(value = "/Join")
//	public ResponseEntity<?> Join(UserDTO dto) throws Exception {
//
//		ResponseEntity<?> result = null;
//		
//
//		// => Service 처리
//		if (service.insert(dto) > 0) {
//			result = ResponseEntity.status(HttpStatus.OK).body("~~ 회원가입 성공!! 로그인후 이용하세요 ~~");
//			log.info("** join HttpStatus.OK => " + HttpStatus.OK);
//		} else {
//			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("~~ 회원가입 실패!! 다시 하세요 ~~");
//			log.info("** join HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
//		}
//		return result;
//	}
	@PostMapping(value = "/join")
	public ResponseEntity<String> join(UserDTO dto) {
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
	@GetMapping(value = "/Findidf")
	public void Findidf() {
	}
	@PostMapping("/findid")
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

	@GetMapping(value = "/Findpwf")
	public void Findpwf() {
	}

	@PostMapping("/findpw")
	public ResponseEntity<UserDTO> findUserPw(HttpSession session, @RequestBody UserDTO dto) {
	    ResponseEntity<UserDTO> result = null;
	    
	    String userid = dto.getUser_id(); 
	    String useremail = dto.getUser_email(); 
	    String foundUserPW = service.foundUserPw(userid, useremail); // 해당 메서드로 사용자 아이디 찾기
	    
	    
	    log.info("dto ="+dto);
	    log.info("id ="+ userid);
	    log.info("useremail ="+useremail);
	    UserDTO userDTO = new UserDTO();
	    if (foundUserPW != null) {
	        userDTO.setUser_password(foundUserPW);
	        return ResponseEntity.ok(userDTO);
	    } else {
	        // 해당 사용자를 찾을 수 없을 때 처리
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	    }
	}
	
	@GetMapping("/UserList")
	public void userList(Model model) {
		model.addAttribute("banana", service.selectList());

	}
	@GetMapping("/Updatef/{ii}")
	public String Updatef(@PathVariable("ii") String id, UserDTO dto, Model model) {
		dto.setUser_id(id);
		model.addAttribute("banana", service.selectOne(dto));
		log.info("**update 성공 **");
		return "/user/Updatef";
	} 
	@PostMapping(value="/Userupdate")
	public String UserUpdate(HttpServletRequest request, 
			UserDTO dto, Model model) throws IOException {
		// => 처리결과에 따른 화면 출력을 위해서 dto 의 값을 Attribute에 보관
		log.info("** update 성공 **");
		model.addAttribute("banana", dto);
		if ( service.update(dto) > 0 ) {
			log.info("** update 성공 **");
		}else {
			log.info("** update 실패 **");
		}
		
		return "/home";
	} //Update
	
	@DeleteMapping("/UserDelete/{ii}")
	public ResponseEntity<?> pmpDelete(@PathVariable("ii") String id, UserDTO dto) {
		dto.setUser_id(id);
		if (service.delete(dto) > 0) {
			log.info("** delete HttpStatus.OK => " + HttpStatus.OK);
			return new ResponseEntity<String>("** 삭제 성공 **", HttpStatus.OK);
		} else {
			log.info("** delete HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
			return new ResponseEntity<String>("** 삭제 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
		}
	}
}
