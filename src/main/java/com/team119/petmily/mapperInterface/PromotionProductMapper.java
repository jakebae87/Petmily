package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.PromotionProductDTO;

public interface PromotionProductMapper {
	
	List<PromotionProductDTO> selectList();
	
	PromotionProductDTO selectOne(PromotionProductDTO dto);
	
	int insert(PromotionProductDTO dto);
	
	int update(PromotionProductDTO dto);

	int delete(PromotionProductDTO dto);
}
