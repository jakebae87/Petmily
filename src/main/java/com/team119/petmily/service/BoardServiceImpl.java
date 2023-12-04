package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.ReviewReplyDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.mapperInterface.BoardMapper;
import com.team119.petmily.pagination.Criteria;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;

	@Override
	public List<NoticeDTO> getNoticeList(SearchDTO searchDTO) {
		return boardMapper.getNoticeList(searchDTO);
	}
	
	@Override
	public List<NoticeDTO> getNoticePagedList(Criteria cri) {
		return boardMapper.getNoticePagedList(cri);
	}
	@Override
	public int noticeTotalCount() {
		return boardMapper.noticeTotalCount();
	}
	
	

	@Override
	public List<InquiryDTO> getInquiryList(SearchDTO searchDTO) {
		return boardMapper.getInquiryList(searchDTO);
	}
	@Override
	public List<InquiryDTO> getInquiryPagedList(Criteria cri) {
		return boardMapper.getInquiryPagedList(cri);
	}
	@Override
	public int inquiryTotalCount() {
		return boardMapper.inquiryTotalCount();
	}

	
	
	@Override
	public List<ReviewDTO> getReviewList() {
		return boardMapper.getReviewList();
	}
	@Override
	public List<ReviewDTO> getReviewPagedList(Criteria cri) {
		return boardMapper.getReviewPagedList(cri);
	}
	@Override
	public int reviewTotalCount() {
		return boardMapper.reviewTotalCount();
	}
	
	
	
	
	
	@Override
	public List<FaqDTO> getFaqList(SearchDTO searchDTO) {
		return boardMapper.getFaqList(searchDTO);
	}
	@Override
	public List<FaqDTO> getFaqPagedList(Criteria cri) {
		return boardMapper.getFaqPagedList(cri);
	}
	@Override
	public int faqTotalCount() {
		return boardMapper.faqTotalCount();
	}
	
	
	
	@Override
	public NoticeDTO getNotice(NoticeDTO dto) {
		return boardMapper.getNotice(dto);
	}

	@Override
	public int updateNotice(NoticeDTO dto) {
		return boardMapper.updateNotice(dto);
	}

	@Override
	public int insertNotice(NoticeDTO dto) {
		return boardMapper.insertNotice(dto);
	}

	@Override
	public int deleteNotice(NoticeDTO dto) {
		return boardMapper.deleteNotice(dto);
	}

	@Override
	public InquiryDTO getInquiry(InquiryDTO dto) {
		return boardMapper.getInquiry(dto);
	}

	@Override
	public int updateInquiry(InquiryDTO dto) {
		return boardMapper.updateInquiry(dto);
	}

	@Override
	public int deleteInquiry(InquiryDTO dto) {
		return boardMapper.deleteInquiry(dto);
	}

	@Override
	public FaqDTO getFaq(FaqDTO dto) {
		return boardMapper.getFaq(dto);
	}

	@Override
	public int updateFaq(FaqDTO dto) {
		return boardMapper.updateFaq(dto);
	}

	@Override
	public int insertFaq(FaqDTO dto) {
		return boardMapper.insertFaq(dto);
	}

	@Override
	public int deleteFaq(FaqDTO dto) {
		return boardMapper.deleteFaq(dto);
	}

	@Override
	public ReviewDTO getReview(ReviewDTO dto) {
		return boardMapper.getReview(dto);
	}

	@Override
	public int reviewUpdate(ReviewDTO dto) {
		return boardMapper.updateReview(dto);
	}

	@Override
	public int deleteReview(ReviewDTO dto) {
		return boardMapper.deleteReview(dto);
	}

	@Override
	public List<ReviewReplyDTO> getReplyList(ReviewDTO dto) {
		return boardMapper.getReplyList(dto);
	}

	@Override
	public List<ProductDTO> getProduct(String name) {
		return boardMapper.getProduct(name);
	}

	@Override
	public int insertInquiry(InquiryDTO dto) {
		return boardMapper.insertInquiry(dto);
	}

	@Override
	public int updateBoardInquiry(InquiryDTO dto) {
		return boardMapper.updateBoardInquiry(dto);
	}

} // class
