package com.team119.petmily.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.service.BoardService;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping(value = "/board", method = { RequestMethod.GET, RequestMethod.POST })
@AllArgsConstructor
public class BoardController {

	BoardService boardService;

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

	// Notice UPDATE FORM
	@GetMapping(value = "/noticeUpdateForm")
	public void updateNotice(Model model, NoticeDTO dto) {
		model.addAttribute("notice", boardService.getNotice(dto));
	}

	// Notice UPDATE
	@PostMapping(value = "/noticeUpdate")
	public String update(Model model, NoticeDTO dto, RedirectAttributes rttr) {
		String uri = "redirect:noticeDetail?notice_id=" + dto.getNotice_id();

		if (boardService.updateNotice(dto) > 0) {
			rttr.addFlashAttribute("notice", dto);
		} else {
			model.addAttribute("notice", dto);
			uri = "board/noticeUpdate";
		}

		return uri;
	}

	// Notice INSERT FORM
	@GetMapping(value = "/noticeInsertForm")
	public void noticeInsert() {
	}

	// Notice INSERT
	@PostMapping(value = "/noticeInsert")
	public String insert(Model model, NoticeDTO dto) {
		String uri = "";

		if (boardService.insertNotice(dto) > 0) {
			uri = "redirect:noticeList";
		} else {
			model.addAttribute("notice", dto);
			uri = "board/noticeInsert";
		}
		return uri;
	}

	// Notice DELETE
	@GetMapping(value = "/noticeDelete")
	public String delete(NoticeDTO dto, Model model, RedirectAttributes rttr) {
		String uri = "redirect:noticeList";

		if (boardService.deleteNotice(dto) > 0) {
			rttr.addFlashAttribute("message", "글 삭제 성공");
		} else {
			rttr.addFlashAttribute("message", "글 삭제 실패");
		}
		return uri;
	}

	// --------------------NOTICE CRUD END--------------------
}
