package com.team119.petmily.controller;



import java.security.SecureRandom;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.mapperInterface.UserMapper;
import com.team119.petmily.service.EmailService;
import com.team119.petmily.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/rsuser")
@Log4j2
@AllArgsConstructor
public class RestUserController {

	UserService service;
	EmailService eservice;
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
	
	
//	@PostMapping(value="/Findpw")
//	public ResponseEntity<UserDTO> findUserPw(HttpSession session, @RequestBody UserDTO dto) {
//	    ResponseEntity<UserDTO> result = null;
//	    
//	    String userid = dto.getUser_id(); 
//	    String useremail = dto.getUser_email(); 
//	    String foundUserPW = service.foundUserPw(userid, useremail); 
//	 // 임시 비밀번호 생성 (임의로 설정)
//	    String temporaryPassword = generateTemporaryPassword();
//	    
//	    UserDTO userDTO = new UserDTO();
//	    if (foundUserPW != null) {
//	    	// 임시 비밀번호를 DB에 업데이트하거나 사용자의 정보를 찾는 로직 추가
//
//	        // 사용자의 이메일로 임시 비밀번호 전송
//	        emailService.sendTemporaryPasswordEmail(userEmail, temporaryPassword);
//
//	        return ResponseEntity.ok("임시 비밀번호가 이메일로 전송되었습니다.");
//	    
//	   
//	    } else {
//	        // 해당 사용자를 찾을 수 없을 때 처리
//	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//	    }
//	    private String generateTemporaryPassword() {
//	        // 임시 비밀번호 생성 로직 구현 (랜덤 문자열 생성 등)
//	        return "temporary123"; // 임시로 고정된 비밀번호 반환
//	    }
	
	  private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    private static final Random RANDOM = new SecureRandom();

	    private String generateTemporaryPassword(int length) {
	        if (length <= 0) {
	            throw new IllegalArgumentException("Length must be greater than zero");
	        }

	        StringBuilder stringBuilder = new StringBuilder(length);
	        for (int i = 0; i < length; i++) {
	            stringBuilder.append(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length())));
	        }

	        return stringBuilder.toString();
	    }
	    @PostMapping(value="/Findpw/{userId}")
	    public ResponseEntity<String> findUserPw(@PathVariable String userId, @RequestBody UserDTO dto) {
	        String useremail = dto.getUser_email(); 
	        String foundUserPW = service.foundUserPw(userId, useremail);

	        if (foundUserPW != null) {
	            // 임시 비밀번호 생성
	            String temporaryPassword = generateTemporaryPassword(10); // 예를 들어 10자리의 임시 비밀번호 생성
	            
	            log.info("foundUserPW =" + foundUserPW);
	            log.info("temporaryPassword =" + temporaryPassword);
	            
	            // 임시 비밀번호를 암호화
	            String encryptedTemporaryPassword = passwordEncoder.encode(temporaryPassword);

	            // DB에 암호화된 임시 비밀번호 업데이트
	            boolean updated = service.randompw(userId, encryptedTemporaryPassword);
	            
	            log.info("encryptedTemporaryPassword = " + encryptedTemporaryPassword);
	            log.info("updated =" + updated);
	            
	            if (updated) {
	                // 사용자의 이메일로 임시 비밀번호 전송
	                eservice.sendTemporaryPasswordEmail(useremail, temporaryPassword);
	                return ResponseEntity.ok("임시 비밀번호가 이메일로 전송되었습니다.");
	            } else {
	                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("임시 비밀번호 업데이트에 실패했습니다.");
	            }
	        } else {
	            // 해당 사용자를 찾을 수 없을 때 처리
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 사용자 정보를 찾을 수 없습니다.");
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
	
	@PostMapping(value="/pwupdate/{user_id}")
	public ResponseEntity<String> pwupdate(HttpServletRequest request, @PathVariable("user_id") String userId, @RequestBody UserDTO dto) {
	    dto.setUser_id(userId);
	    
	    // 비밀번호 암호화
	    String newPassword = dto.getUser_password();
	    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	    String encryptedPassword = passwordEncoder.encode(newPassword);
	    
	    // 암호화된 비밀번호를 DTO에 설정
	    dto.setUser_password(encryptedPassword);

	    int pwupdateResult = service.pwupdate(dto);
	    log.info("pwupdateResult ="+pwupdateResult);
	    if (pwupdateResult > 0) {
	        log.info("** pwupdate HttpStatus.OK => " + HttpStatus.OK);
	        return new ResponseEntity<>("** 비밀번호 수정 성공 **", HttpStatus.OK);
	    } else {
	        log.info("** pwupdate HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
	        return new ResponseEntity<>("** 비밀번호 수정 실패, Data_NotFound **", HttpStatus.BAD_GATEWAY);
	    }
	}
	@PostMapping(value="/checkPassword/{user_id}")
	public ResponseEntity<String> checkPassword(@PathVariable("user_id") String user_id, @RequestBody UserDTO dto) {
		 //입력받은 비밀번호
		String inputPassword = dto.getUser_password();
	    
	  
	    dto.setUser_id(user_id);
	    
	    //데이터베이스에서 가져온 비밀번호
	    String storedEncryptedPassword = mapper.checkUserPw(user_id);
	    log.info("userId ="+user_id);
	   	log.info("inputPassword ="+ inputPassword);
	   	log.info("storedEncryptedPassword ="+ storedEncryptedPassword);
	    if (storedEncryptedPassword != null) {
	        // 비밀번호 비교
	        if ( passwordEncoder.matches(inputPassword, storedEncryptedPassword )) {
	            // 비밀번호 일치
	            return new ResponseEntity<>("비밀번호 확인 성공", HttpStatus.OK);
	        } else {
	            // 비밀번호 불일치
	            return new ResponseEntity<>("비밀번호 확인 실패", HttpStatus.BAD_REQUEST);
	        }
	    } else {
	        // 사용자가 존재하지 않을 경우 처리
	        return new ResponseEntity<>("사용자가 존재하지 않습니다", HttpStatus.NOT_FOUND);
	    }
	}
	
	
}
