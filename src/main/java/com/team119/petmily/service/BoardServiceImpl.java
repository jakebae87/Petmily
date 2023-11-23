package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.NoticeDTO;
import com.team119.petmily.mapperInterface.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper boardMapper;

	@Override
	public List<NoticeDTO> getAllNoticeList() {
		return boardMapper.selectAllNoticeList();
	}

} // class
