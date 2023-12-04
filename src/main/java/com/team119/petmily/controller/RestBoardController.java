package com.team119.petmily.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@org.springframework.web.bind.annotation.RestController
@AllArgsConstructor
@Log4j2
public class RestBoardController {
	BoardService boardService;

	@GetMapping(value = "/notice/list")
	public ResponseEntity<?> noticeList(SearchDTO searchDTO) {
		ResponseEntity<?> result = null;

		List<NoticeDTO> list = boardService.getNoticeList(searchDTO);

		if (list != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("Notice List HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Notice List HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/noticeDetail/{id}")
	public ResponseEntity<?> noticeDetail(@PathVariable("id") int id, NoticeDTO dto) {
		dto.setNotice_id(id);
		ResponseEntity<?> result = null;

		NoticeDTO notice = boardService.getNotice(dto);

		if (notice != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(notice);
			log.info("Notice Detail HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Notice Detail HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/faq/list")
	public ResponseEntity<?> faqList(SearchDTO searchDTO) {
		ResponseEntity<?> result = null;

		List<FaqDTO> list = boardService.getFaqList(searchDTO);

		if (list != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("Faq List HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Faq List HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/faqDetail/{id}")
	public ResponseEntity<?> faqDetail(@PathVariable("id") int id, FaqDTO dto) {
		dto.setFaq_id(id);
		ResponseEntity<?> result = null;

		FaqDTO faq = boardService.getFaq(dto);

		if (faq != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(faq);
			log.info("Notice Detail HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Notice Detail HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/inquiry/list")
	public ResponseEntity<?> inquiryList(SearchDTO searchDTO) {
		ResponseEntity<?> result = null;

		List<InquiryDTO> list = boardService.getInquiryList(searchDTO);

		if (list != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("Inquiry List HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Inquiry List HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/inquiryDetail/{id}")
	public ResponseEntity<?> inquiryDetail(@PathVariable("id") int id, InquiryDTO dto) {
		dto.setInquiry_id(id);
		ResponseEntity<?> result = null;

		InquiryDTO inquiry = boardService.getInquiry(dto);

		if (inquiry != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(inquiry);
			log.info("Inquiry Detail HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Inquiry Detail HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/product/search", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> searchProduct(@RequestParam("name") String name) {
		ResponseEntity<?> result = null;
		List<ProductDTO> product = boardService.getProduct(name);

		if (product != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(product);
			log.info("Product Search HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Product Search HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@PostMapping(value = "/inquiry/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> inquiryInsert(@RequestBody InquiryDTO dto) {
		ResponseEntity<?> result = null;
		
		if (boardService.insertInquiry(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("상품문의 글작성");
			log.info("Insert new Inquiry HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품문의 글작성 실패");
			log.info("Insert new Inquiry HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}
	
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
	
	@PostMapping(value = "/inquiry/updateBoard", consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateBoardInquiry(@RequestBody InquiryDTO dto) {
		boardService.updateBoardInquiry(dto);
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

	@PostMapping(value = "/review/update", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> reviewUpdate(ReviewDTO dto) throws IllegalStateException, IOException {
		ResponseEntity<?> result = null;

		String realPath = "C:\\Team119\\petmily\\src\\main\\webapp\\resources\\uploadImages\\";
		String file1, file2 = "";
		String file3, file4 = "";

		MultipartFile uploadfile1 = dto.getUploadfile1();
		if (uploadfile1 != null && !uploadfile1.isEmpty()) {

			file1 = realPath + uploadfile1.getOriginalFilename(); // 저장경로 완성
			uploadfile1.transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)

			file2 = "resources/uploadImages/" + uploadfile1.getOriginalFilename();
		}

		MultipartFile uploadfile2 = dto.getUploadfile2();
		if (uploadfile2 != null && !uploadfile2.isEmpty()) {

			file3 = realPath + uploadfile2.getOriginalFilename(); // 저장경로 완성
			uploadfile2.transferTo(new File(file3)); // 해당경로에 저장(붙여넣기)

			file4 = "resources/uploadImages/" + uploadfile2.getOriginalFilename();
		}

		dto.setReview_image1(file2);
		dto.setReview_image2(file4);

		if (boardService.reviewUpdate(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 수정 완료");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 수정 실패");
		}

		return result;
	}

	@DeleteMapping(value = "/review/delete/{id}")
	public ResponseEntity<?> reviewDelete(@PathVariable("id") int id, ReviewDTO dto) {
		ResponseEntity<?> result = null;

		dto.setReview_id(id);

		if (boardService.deleteReview(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 삭제 완료");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 삭제 실패");
		}

		return result;
	}
}
