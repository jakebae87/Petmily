package com.team119.petmily.controller;



import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.mapperInterface.UserMapper;
import com.team119.petmily.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/rsuser")
@Log4j2
@AllArgsConstructor
public class RestUserController {
	private static final String String = null;
	UserService service;
	UserMapper mapper;
	PasswordEncoder passwordEncoder;
	


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
	    
	    // DB에 저장된 암호화된 비밀번호
	    String encryptedPassword = dto.getUser_password();

	    // 클라이언트에서 받은 비밀번호를 암호화
	    String encodedPassword = passwordEncoder.encode(password);

	    if ((dto != null && id.equals(dto.getUser_id()) && passwordEncoder.matches(password, encryptedPassword))) {
	        HttpSession session = request.getSession(); // 세션 가져오기
	        session.setAttribute("loginID", dto.getUser_id());
	        session.setAttribute("loginName", dto.getUser_name());
	        final UserDTO userDTO = UserDTO.builder()
	            .user_id(dto.getUser_id())
	            .user_password(encodedPassword)
	            .user_name(dto.getUser_name())
	            .user_email(dto.getUser_email())
	            .user_phone(dto.getUser_phone())
	            .user_birthday(dto.getUser_birthday())
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
	    	  // 회원가입 시 비밀번호 암호화
            String encodedPassword = passwordEncoder.encode(dto.getUser_password());
            dto.setUser_password(encodedPassword);

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
	
	 @GetMapping(value="/idcheck")
	    public ResponseEntity<String> checkIfId(@RequestParam("user_id") String user_id) {
	        try {
	            int count = mapper.checkUserId(user_id);

	            if (count > 0) {
	                return ResponseEntity.ok("F"); // 이미 사용 중인 아이디
	            } else {
	                return ResponseEntity.ok("T"); // 사용 가능한 아이디
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("아이디 확인에 실패했습니다.");
	        }
	    }
	
	@PostMapping(value="/Findid")
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
	
	
	@PostMapping(value="/Findpw")
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
	
	@DeleteMapping(value="/selfDelete/{user_id}")
	public ResponseEntity<?> delete(@PathVariable("user_id") String userId, UserDTO dto) {
		dto.setUser_id(userId);
		if (service.delete(dto) > 0) {
			log.info("** delete HttpStatus.OK => " + HttpStatus.OK);
			return new ResponseEntity<String>("** 삭제 성공 **", HttpStatus.OK);
		} else {
			log.info("** delete HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
			return new ResponseEntity<String>("** 삭제 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
		}
	}
	
	@GetMapping(value="/userlist")
	public ResponseEntity<?> userlist(HttpServletRequest request, UserDTO dto) {
	    HttpSession session = request.getSession();
	    String loggedInUserID = (String) session.getAttribute("loginID");

	    if (loggedInUserID != null) {
	        // 로그인된 사용자일 때의 처리
	        UserDTO id = service.selectOne(dto);

	        if (id != null) {
	            return ResponseEntity.status(HttpStatus.OK).body(dto);
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	        }
	    } else {
	        // 로그인되지 않은 상태일 때의 처리
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
	    }
	}
	
	@PostMapping(value="/update/{user_id}")
	public ResponseEntity<String> update(@PathVariable("user_id") String userId, @RequestBody UserDTO dto) {
	    dto.setUser_id(userId);
	    int updateResult = service.update(dto);

	    if (updateResult > 0) {
	        log.info("** update HttpStatus.OK => " + HttpStatus.OK);
	        return new ResponseEntity<>("** 회원수정 성공 **", HttpStatus.OK);
	    } else {
	        log.info("** update HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
	        return new ResponseEntity<>("** 회원수정 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
	    }
	}
}
