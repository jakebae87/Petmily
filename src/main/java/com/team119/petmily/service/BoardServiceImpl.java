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

} // class
