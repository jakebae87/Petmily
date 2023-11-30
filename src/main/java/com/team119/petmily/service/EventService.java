package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.EventDTO;

public interface EventService {
	
	List<EventDTO> selectList();
	
	EventDTO selectOne(EventDTO dto);
	
	int insert(EventDTO dto);

	int update(EventDTO dto);

	int delete(EventDTO dto);
}
