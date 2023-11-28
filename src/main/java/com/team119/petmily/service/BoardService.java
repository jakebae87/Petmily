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

	NoticeDTO getNotice(NoticeDTO dto);
	
	int updateNotice(NoticeDTO dto);
	
	int insertNotice(NoticeDTO dto);

	int deleteNotice(NoticeDTO dto);

}