package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ReviewDTO;

public interface BoardService {

	// Notice 전체 목록 조회
	List<NoticeDTO> getNoticeList();

	// Inquiry 전체 목록 조회
	List<InquiryDTO> getInquiryList();

	// Review 전체 목록 조회
	List<ReviewDTO> getReviewList();

	// Faq 전체 목록 조회
	List<FaqDTO> getFaqList();

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

	FaqDTO getFaq(FaqDTO dto);

	int updateFaq(FaqDTO dto);

	int insertFaq(FaqDTO dto);

	int deleteFaq(FaqDTO dto);

	ReviewDTO getReview(ReviewDTO dto);

	int reviewUpdate(ReviewDTO dto);

	int deleteReview(ReviewDTO dto);
	
	// Inquiry end


}