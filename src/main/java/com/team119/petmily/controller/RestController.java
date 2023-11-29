package com.team119.petmily.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ReviewDTO;
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
		
		if(boardService.deleteReview(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 삭제 완료");
		}else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 삭제 실패");
		}
		
		return result;
	}
}
