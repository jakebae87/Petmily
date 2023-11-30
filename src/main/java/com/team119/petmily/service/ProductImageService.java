package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.ProductImageDTO;

public interface ProductImageService {
	
	List<ProductImageDTO> selectList();
	
	ProductImageDTO selectOne(ProductImageDTO dto);
	
	int insert(ProductImageDTO dto);

	int update(ProductImageDTO dto);

	int delete(ProductImageDTO dto);
}
