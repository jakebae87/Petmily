package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.ReviewReplyDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.pagination.Criteria;

public interface BoardService {

	// Notice 전체 목록 조회
	List<NoticeDTO> getNoticeList(SearchDTO searchDTO);

	// Inquiry 전체 목록 조회
	List<InquiryDTO> getInquiryList(SearchDTO searchDTO);

	// Review 전체 목록 조회
	List<ReviewDTO> getReviewList();

	// Faq 전체 목록 조회
	List<FaqDTO> getFaqList(SearchDTO searchDTO);
	
	
	
	List<NoticeDTO> getNoticePagedList(Criteria cri);
	int noticeTotalCount();

	List<InquiryDTO> getInquiryPagedList(Criteria cri);
	int inquiryTotalCount();
	
	List<ReviewDTO> getReviewPagedList(Criteria cri);
	int reviewTotalCount();
	
	List<FaqDTO> getFaqPagedList(Criteria cri);
	int faqTotalCount();
	
	// ------------------------------------------------------------
	
	// Notice
	NoticeDTO getNotice(NoticeDTO dto);
	
	int updateNotice(NoticeDTO dto);
	
	int insertNotice(NoticeDTO dto);

	int deleteNotice(NoticeDTO dto);
	// Notice end

	// Inquiry
	InquiryDTO getInquiry(InquiryDTO dto);
	
	int updateInquiry(InquiryDTO dto);

	int deleteInquiry(InquiryDTO dto);
	// Inquiry end
	
	// Faq
	FaqDTO getFaq(FaqDTO dto);

	int updateFaq(FaqDTO dto);

	int insertFaq(FaqDTO dto);

	int deleteFaq(FaqDTO dto);
	// Faq end

	// Review
	ReviewDTO getReview(ReviewDTO dto);

	int reviewUpdate(ReviewDTO dto);

	int deleteReview(ReviewDTO dto);

	List<ReviewReplyDTO> getReplyList(ReviewDTO dto);

	List<ProductDTO> getProduct(String name);

	int insertInquiry(InquiryDTO dto);

	int updateBoardInquiry(InquiryDTO dto);

	List<ReviewDTO> getReviewList(SearchDTO searchDTO);

	int insertReview(ReviewDTO dto);


}