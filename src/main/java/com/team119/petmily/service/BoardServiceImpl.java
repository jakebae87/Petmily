package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.FaqDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.mapperInterface.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;

	@Override
	public List<NoticeDTO> getNoticeList() {
		return boardMapper.getNoticeList();
	}

	@Override
	public List<InquiryDTO> getInquiryList() {
		return boardMapper.getInquiryList();
	}

	@Override
	public List<ReviewDTO> getReviewList() {
		return boardMapper.getReviewList();
	}

	@Override
	public List<FaqDTO> getFaqList() {
		return boardMapper.getFaqList();
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

} // class
