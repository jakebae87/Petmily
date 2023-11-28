package com.team119.petmily.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.service.BoardService;
import lombok.AllArgsConstructor;

@org.springframework.web.bind.annotation.RestController
@AllArgsConstructor
public class RestController {
	BoardService boardService;

	@PostMapping(value = "/notice/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String insert(@RequestBody NoticeDTO dto) {
		boardService.insertNotice(dto);
		return "hi";
	}
}
