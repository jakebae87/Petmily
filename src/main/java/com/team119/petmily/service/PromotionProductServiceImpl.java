package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.PromotionProductDTO;

import com.team119.petmily.mapperInterface.PromotionProductMapper;

@Service
public class PromotionProductServiceImpl implements PromotionProductService {
	
	@Autowired
	PromotionProductMapper mapper;
	
	@Override
	public List<PromotionProductDTO> selectList() {
		return mapper.selectList();
	}
	
	@Override
	public PromotionProductDTO selectOne(PromotionProductDTO dto) {
		return mapper.selectOne(dto);
	}
	
	@Override
	public int insert(PromotionProductDTO dto) {
		return mapper.insert(dto);
	}

	@Override
	public int update(PromotionProductDTO dto) {
		return mapper.update(dto);
	}
	
	@Override
	public int delete(PromotionProductDTO dto) {
		return mapper.delete(dto);
	}
}
