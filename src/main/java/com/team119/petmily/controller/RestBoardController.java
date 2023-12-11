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
import com.team119.petmily.domain.ReviewReplyDTO;
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

	@GetMapping(value = "/review/list")
	public ResponseEntity<?> reviewList(SearchDTO searchDTO) {
		ResponseEntity<?> result = null;

		List<ReviewDTO> list = boardService.getReviewList(searchDTO);
		if (list != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("Review List HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Review List HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/reviewDetail/{id}")
	public ResponseEntity<?> reviewDetail(@PathVariable("id") int id, ReviewDTO dto) {
		dto.setReview_id(id);
		ResponseEntity<?> result = null;
		ReviewDTO review = boardService.getReview(dto);

		if (review != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(review);
			log.info("Review Detail HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Review Detail HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@PostMapping(value = "/review/insert", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> reviewInsert(ReviewDTO dto) throws IllegalStateException, IOException {
		ResponseEntity<?> result = null;

		String realPath = "C:\\Team119\\petmily\\src\\main\\119\\public\\Images\\reviews\\";

		String file1, file2 = "";
		String file3, file4 = "";

//		MultipartFile[] uploadfile1 = dto.getUploadfile1();
//		if (uploadfile1 != null && !uploadfile1[0].isEmpty()) {
//			String fileName = URLEncoder.encode(uploadfile1[0].getOriginalFilename(), "UTF-8");
//			System.out.println(fileName);
//			fileName = fileName.replaceAll("\\+", "%20");
//			System.out.println(fileName);
//			
//			file1 = realPath + fileName; // 저장경로 완성
//			uploadfile1[0].transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
////			file1 = realPath + uploadfile1[0].getOriginalFilename(); // 저장경로 완성
////			uploadfile1[0].transferTo(new File(file1));
//
//			file2 = uploadfile1[0].getOriginalFilename();
//		} if (!uploadfile1[1].isEmpty()) {
//			String fileName = URLEncoder.encode(uploadfile1[1].getOriginalFilename(), "UTF-8");
//			fileName = fileName.replaceAll("\\+", "%20");
//			
//			file3 = realPath +fileName;
//			uploadfile1[1].transferTo(new File(file3));
////			file3 = realPath + uploadfile1[1].getOriginalFilename(); // 저장경로 완성
////			uploadfile1[1].transferTo(new File(file3));
//
//			file4 = uploadfile1[1].getOriginalFilename();
//		}
//
//		dto.setReview_image1(file2);
//		dto.setReview_image2(file4);

		MultipartFile[] uploadfile1 = dto.getUploadfile1();
		if (uploadfile1 != null && uploadfile1.length > 0) {

			file1 = realPath + uploadfile1[0].getOriginalFilename(); // 저장경로 완성
			uploadfile1[0].transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)

			file2 = uploadfile1[0].getOriginalFilename();

			if (uploadfile1.length > 1) {

				file3 = realPath + uploadfile1[1].getOriginalFilename(); // 저장경로 완성
				uploadfile1[1].transferTo(new File(file3)); // 해당경로에 저장(붙여넣기)

				file4 = uploadfile1[1].getOriginalFilename();
			}
		}

		dto.setReview_image1(file2);
		dto.setReview_image2(file4);

		if (boardService.insertReview(dto) > 0) { // Transaction_Test, insert2
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 등록 성공");
			log.info("HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 등록 실패");
			log.info("HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@PostMapping(value = "/review/updateBoard", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<?> updateBoardReview(ReviewDTO dto) throws IllegalStateException, IOException {
		System.out.println(dto);
		ResponseEntity<?> result = null;

		String realPath = "C:\\Team119\\petmily\\src\\main\\119\\public\\Images\\reviews\\";
		String file1, file2 = "";
		String file3, file4 = "";

		if (dto.getUploadfile1() != null) {
			MultipartFile[] uploadfile1 = dto.getUploadfile1();
			if (uploadfile1 != null && uploadfile1.length > 0
					&& dto.getReview_image1() != uploadfile1[0].getOriginalFilename()) {
				file1 = realPath + uploadfile1[0].getOriginalFilename(); // 저장경로 완성
				uploadfile1[0].transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
				file2 = uploadfile1[0].getOriginalFilename();

				dto.setReview_image1(file2);
			}
		} else {
			dto.setReview_image1(dto.getReview_image1());
		}

		if (dto.getUploadfile2() != null) {
			MultipartFile uploadfile2 = dto.getUploadfile2();
			if (uploadfile2 != null && dto.getReview_image2() != uploadfile2.getOriginalFilename()) {
				file3 = realPath + uploadfile2.getOriginalFilename(); // 저장경로 완성
				uploadfile2.transferTo(new File(file3)); // 해당경로에 저장(붙여넣기)
				file4 = uploadfile2.getOriginalFilename();

				dto.setReview_image2(file4);
			}
		} else {
			dto.setReview_image2(dto.getReview_image2());
		}

		if (boardService.updateBoardReview(dto) > 0) { // Transaction_Test, insert2
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 수정 성공");
			log.info("HttpStatus.OK => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 수정 실패");
			log.info("HttpStatus.BAD_GATEWAY => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@GetMapping(value = "/review/reply/{id}")
	public ResponseEntity<?> reviewReplyList(@PathVariable("id") int id, ReviewDTO dto) {
		ResponseEntity<?> result = null;
		dto.setReview_id(id);

		List<ReviewReplyDTO> list = boardService.getReplyList(dto);

		if (list != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("Review Reply List HttpStatus => " + HttpStatus.OK);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			log.info("Review Reply List HttpStatus => " + HttpStatus.BAD_GATEWAY);
		}

		return result;
	}

	@PostMapping(value = "/review/reply/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> replyInsert(@RequestBody ReviewReplyDTO dto) {

		ResponseEntity<?> result = null;

		if (boardService.insertReply(dto) > 0) {
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
		System.out.println(dto);
		boardService.updateBoardInquiry(dto);
	}

//	@PostMapping(value = "/review/updateBoard", consumes = MediaType.APPLICATION_JSON_VALUE)
//	public void updateBoardReview(@RequestBody ReviewDTO dto) {
//		System.out.println(dto);
//		boardService.updateBoardReview(dto);
//	}

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

		MultipartFile[] uploadfile1 = dto.getUploadfile1();
		if (uploadfile1 != null && !uploadfile1[0].isEmpty()
				&& dto.getReview_image1() != uploadfile1[0].getOriginalFilename()) {
			file1 = realPath + uploadfile1[0].getOriginalFilename(); // 저장경로 완성
			uploadfile1[0].transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
			file2 = "resources/uploadImages/" + uploadfile1[0].getOriginalFilename();

			dto.setReview_image1(file2);
		} else {
			dto.setReview_image1(dto.getReview_image1());
		}

		MultipartFile uploadfile2 = dto.getUploadfile2();
		if (uploadfile2 != null && !uploadfile2.isEmpty()
				&& dto.getReview_image2() != uploadfile2.getOriginalFilename()) {
			file3 = realPath + uploadfile2.getOriginalFilename(); // 저장경로 완성
			uploadfile2.transferTo(new File(file3)); // 해당경로에 저장(붙여넣기)
			file4 = "resources/uploadImages/" + uploadfile2.getOriginalFilename();

			dto.setReview_image2(file4);
		} else {
			dto.setReview_image2(dto.getReview_image2());
		}

		if (boardService.reviewUpdate(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("상품후기 작성 완료");
			log.info("Review Insert HttpStatus => " + HttpStatus.BAD_GATEWAY);
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("상품후기 작성 실패");
			log.info("Review Insert HttpStatus => " + HttpStatus.BAD_GATEWAY);
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

	@DeleteMapping(value = "/review/reply/delete/{id}")
	public ResponseEntity<?> replyDelete(@PathVariable("id") int id, ReviewReplyDTO dto) {
		ResponseEntity<?> result = null;

		dto.setReply_id(id);

		if (boardService.deleteReply(dto) > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body("댓글 삭제 완료");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("댓글 삭제 실패");
		}

		return result;
	}
}
