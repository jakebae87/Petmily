package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.ReviewReplyDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.pagination.Criteria;

public interface BoardMapper {

	List<NoticeDTO> getNoticeList(SearchDTO searchDTO);
	List<NoticeDTO> getNoticePagedList(Criteria cri);
	int noticeTotalCount();
	
	List<InquiryDTO> getInquiryList(SearchDTO searchDTO);
	List<InquiryDTO> getInquiryPagedList(Criteria cri);
	int inquiryTotalCount();
	
	List<ReviewDTO> getReviewList();
	List<ReviewDTO> getReviewPagedList(Criteria cri);
	int reviewTotalCount();
	

	List<FaqDTO> getFaqList(SearchDTO searchDTO);
	List<FaqDTO> getFaqPagedList(Criteria cri);
	int faqTotalCount();

	NoticeDTO getNotice(NoticeDTO dto);

	int updateNotice(NoticeDTO dto);

	int insertNotice(NoticeDTO dto);

	int deleteNotice(NoticeDTO dto);

	InquiryDTO getInquiry(InquiryDTO dto);

	int updateInquiry(InquiryDTO dto);

	int deleteInquiry(InquiryDTO dto);

	FaqDTO getFaq(FaqDTO dto);

	int updateFaq(FaqDTO dto);

	int insertFaq(FaqDTO dto);

	int deleteFaq(FaqDTO dto);

	ReviewDTO getReview(ReviewDTO dto);

	int updateReview(ReviewDTO dto);

	int deleteReview(ReviewDTO dto);

	List<ReviewReplyDTO> getReplyList(ReviewDTO dto);
	
	List<ProductDTO> getProduct(String name);
	
	int insertInquiry(InquiryDTO dto);
	
	int updateBoardInquiry(InquiryDTO dto);

}
