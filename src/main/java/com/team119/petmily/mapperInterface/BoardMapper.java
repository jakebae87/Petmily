package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.NoticeDTO;

public interface BoardMapper {

	List<NoticeDTO> selectAllNoticeList();
	
}
