package com.team119.petmily.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.service.BoardServiceImpl;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping(value = "/board")
@AllArgsConstructor
public class BoardController {

	BoardServiceImpl boardService;

	// --------------------SHOW BOARD LIST-------------------- 

	// Notice List
	@GetMapping(value = "/noticeList")
	public void noticeList(Model model) {
		model.addAttribute("notice", boardService.getNoticeList());
	}

	// Inquiry List
	@GetMapping(value = "/inquiryList")
	public void inquiryList(Model model) {
		model.addAttribute("inquiry", boardService.getInquiryList());
	}

	// Review List
	@GetMapping(value = "/reviewList")
	public void reviewList(Model model) {
		model.addAttribute("review", boardService.getReviewList());
	}

	// Faq List
	@GetMapping(value = "/faqList")
	public void faqList(Model model) {
		model.addAttribute("faq", boardService.getFaqList());
	}

	// --------------------SHOW BOARD LIST END--------------------

	
	// --------------------NOTICE CRUD--------------------
	
	// Notice Detail
	@GetMapping(value = "/noticeDetail")
	public void selectNotice(Model model, NoticeDTO dto) {
		model.addAttribute("notice", boardService.getNotice(dto));
	}
	
	// Notice UPDATE
	@GetMapping(value = "/noticeUpdate")
	public void updateNotice(Model model, NoticeDTO dto) {
		model.addAttribute("notice", dto);
	}

	
	
	
	
	
	
	
	// --------------------NOTICE CRUD END--------------------
}
