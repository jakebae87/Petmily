package com.team119.petmily.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.team119.petmily.service.BoardServiceImpl;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping(value = "/board")
@AllArgsConstructor
public class BoardController {

	BoardServiceImpl boardService;

	@GetMapping(value = "/boardList")
	public void boardList(Model model) {
		System.out.println(boardService.getAllNoticeList());
		model.addAttribute("notice", boardService.getAllNoticeList());
	}

}
