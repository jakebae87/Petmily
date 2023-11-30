package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.PromotionProductDTO;

public interface PromotionProductService {
	
	List<PromotionProductDTO> selectList();
	
	PromotionProductDTO selectOne(PromotionProductDTO dto);
	
	int insert(PromotionProductDTO dto);
	
	int update(PromotionProductDTO dto);
	
	int delete(PromotionProductDTO dto);
}
