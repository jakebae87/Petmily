package com.team119.petmily.controller;



import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.team119.petmily.domain.UserDTO;
import com.team119.petmily.service.OAuthService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/oauth")
public class OAuthController {

	OAuthService oservice;
	
	@ResponseBody
    @GetMapping("/kakao")
    public void kakaoCallback(@RequestParam String code) {
        System.out.println(code);
    }
	@RequestMapping(value="/login")
	public String login(@RequestParam("code") String code) {
	    System.out.println("code : " + code);
	    return "";
	}


	@RequestMapping(value="/logout")
	public String logout(HttpSession session) {
		oservice.kakaoLogout((String)session.getAttribute("access_Token"));
	    session.removeAttribute("access_Token");
	    session.removeAttribute("userId");
	    return "";
	}

	
}

