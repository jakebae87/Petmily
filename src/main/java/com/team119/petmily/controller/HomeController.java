package com.team119.petmily.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping(value = "/home")
	public void home() {
	}
	
	@GetMapping("/carttestform")
	public String CartTestForm() {
		return "/cartTestForm";
	}
	
	@GetMapping("/userform")
	public String userform() {
		return "/user/Userform" ;
	}//userform
}
