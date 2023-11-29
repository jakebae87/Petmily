package com.team119.petmily.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.service.BoardService;
import lombok.AllArgsConstructor;

@org.springframework.web.bind.annotation.RestController
@AllArgsConstructor
public class RestController {
	BoardService boardService;

	@PostMapping(value = "/notice/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void noticeInsert(@RequestBody NoticeDTO dto) {
		boardService.insertNotice(dto);
	}
	
	@PostMapping(value = "/notice/delete", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void noticeDelete(@RequestBody NoticeDTO dto) {
		boardService.deleteNotice(dto);
	}
	
	@PostMapping(value = "/inquiry/update", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void inquiryUpdate(@RequestBody InquiryDTO dto) {
		boardService.updateInquiry(dto);
	}
	
	@DeleteMapping(value = "/inquiry/delete/{id}")
	public void inquiryDelete(@PathVariable("id") int id, InquiryDTO dto) {
		dto.setInquiry_id(id);
		boardService.deleteInquiry(dto);
	}
	
	@PutMapping(value = "/faq/update", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void faqUpdate(@RequestBody FaqDTO dto) {
		boardService.updateFaq(dto);
	}
	
	@PostMapping(value = "/faq/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void faqInsert(@RequestBody FaqDTO dto) {
		boardService.insertFaq(dto);
	}
	
	@DeleteMapping(value = "/faq/delete/{id}")
	public void faqDelete(@PathVariable("id") int id, FaqDTO dto) {
		dto.setFaq_id(id);
		boardService.deleteFaq(dto);
	}
}
