package com.team119.petmily.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.pagination.Criteria;
import com.team119.petmily.pagination.PageMaker;
import com.team119.petmily.service.BoardService;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping(value = "/board", method = { RequestMethod.GET, RequestMethod.POST })
@AllArgsConstructor
public class BoardController {

	BoardService boardService;

	// --------------------SHOW NOTICE LIST--------------------
	// Notice List
//	@GetMapping(value = "/noticeList")
//	public void noticeList(Model model) {
//		model.addAttribute("notice", boardService.getNoticeList());
//	}
	
	// Notice Paging List
	@GetMapping(value = "/noticePagingList")
	public void noticePagingList(Model model, Criteria cri, PageMaker pageMaker) {
		cri.setSnoEno();
		model.addAttribute("notice", boardService.getNoticePagedList(cri));

		pageMaker.setCri(cri);
		pageMaker.setTotalRowsCount(boardService.noticeTotalCount());
		model.addAttribute("pageMaker", pageMaker);
	}
	// --------------------SHOW NOTICE LIST END--------------------

	
	// --------------------SHOW INQUIRY LIST--------------------
	
	// Inquiry List
	@GetMapping(value = "/inquiryList")
	public void inquiryList(Model model) {
		model.addAttribute("inquiry", boardService.getInquiryList());
	}
	
	// Inquiry Paging List
		@GetMapping(value = "/inquiryPagingList")
		public void inquiryPagingList(Model model, Criteria cri, PageMaker pageMaker) {
			cri.setSnoEno();
			model.addAttribute("inquiry", boardService.getInquiryPagedList(cri));

			pageMaker.setCri(cri);
			pageMaker.setTotalRowsCount(boardService.inquiryTotalCount());
			model.addAttribute("pageMaker", pageMaker);
		}
	// --------------------SHOW INQUIRY LIST END--------------------

		
	// --------------------SHOW REVIEW LIST--------------------	
		
	// Review List
	@GetMapping(value = "/reviewList")
	public void reviewList(Model model) {
		model.addAttribute("review", boardService.getReviewList());
	}
	
	// Review Paging List
	@GetMapping(value = "/reviewPagingList")
	public void reviewPagingList(Model model, Criteria cri, PageMaker pageMaker) {
		cri.setSnoEno();
		model.addAttribute("review", boardService.getReviewPagedList(cri));

		pageMaker.setCri(cri);
		pageMaker.setTotalRowsCount(boardService.reviewTotalCount());
		model.addAttribute("pageMaker", pageMaker);
	}
	// --------------------SHOW REVIEW LIST END--------------------	
	
	
	// --------------------SHOW REVIEW LIST--------------------	

	// Faq List
	@GetMapping(value = "/faqList")
	public void faqList(Model model) {
		model.addAttribute("faq", boardService.getFaqList());
	}
	
	// Faq Paging List
		@GetMapping(value = "/faqPagingList")
		public void faqPagingList(Model model, Criteria cri, PageMaker pageMaker) {
			cri.setSnoEno();
			model.addAttribute("faq", boardService.getFaqPagedList(cri));

			pageMaker.setCri(cri);
			pageMaker.setTotalRowsCount(boardService.faqTotalCount());
			model.addAttribute("pageMaker", pageMaker);
		}
	// --------------------SHOW REVIEW LIST END--------------------	

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
	// AXIOS 사용하여 비동기 방식으로 NOTICE 글작성

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

	// --------------------INQUIRY CRUD--------------------

	// Inquiry Detail
	@GetMapping(value = "/inquiryDetail")
	public void selectInquiry(Model model, InquiryDTO dto) {
		model.addAttribute("inquiry", boardService.getInquiry(dto));
	}

	// Inquiry UPDATE FORM
	@GetMapping(value = "/inquiryUpdateForm")
	public void updateInquiry(Model model, InquiryDTO dto) {
		model.addAttribute("inquiry", boardService.getInquiry(dto));
	}

	// --------------------INQUIRY CRUD END--------------------

	// --------------------FAQ CRUD--------------------

	// Faq Detail
	@GetMapping(value = "/faqDetail")
	public void selectFaq(Model model, FaqDTO dto) {
		model.addAttribute("faq", boardService.getFaq(dto));
	}

	// Faq UPDATE FORM
	@GetMapping(value = "/faqUpdateForm")
	public void updateFaq(Model model, FaqDTO dto) {
		model.addAttribute("faq", boardService.getFaq(dto));
	}

	// Faq INSERT FORM
	@GetMapping(value = "/faqInsertForm")
	public void faqInsert() {
	}

	// --------------------FAQ CRUD END--------------------

	// --------------------REVIEW CRUD--------------------

	// Review Detail
	@GetMapping(value = "/reviewDetail")
	public void selectReview(Model model, ReviewDTO dto) {
		model.addAttribute("review", boardService.getReview(dto));
		model.addAttribute("reply", boardService.getReplyList(dto));
	}

	// Review UPDATE FORM
	@GetMapping(value = "/reviewUpdateForm")
	public void updateReview(Model model, ReviewDTO dto) {
		model.addAttribute("review", boardService.getReview(dto));
	}

	// --------------------REVIEW CRUD END--------------------
}
