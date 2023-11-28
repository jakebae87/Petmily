package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ReviewDTO;

public interface BoardMapper {

	List<NoticeDTO> getNoticeList();
	
	List<InquiryDTO> getInquiryList();
	
	List<ReviewDTO> getReviewList();

	List<FaqDTO> getFaqList();

	NoticeDTO getNotice(NoticeDTO dto);

	int updateNotice(NoticeDTO dto);

	int insertNotice(NoticeDTO dto);

	int deleteNotice(NoticeDTO dto);

}
