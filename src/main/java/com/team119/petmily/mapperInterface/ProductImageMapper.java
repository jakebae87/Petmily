package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.ProductImageDTO;

public interface ProductImageMapper {
	
	List<ProductImageDTO> selectList();
	
	List<ProductImageDTO> selectListByID(ProductImageDTO dto);
	
	ProductImageDTO selectOne(ProductImageDTO dto);
	
	int insert(ProductImageDTO dto);

	int update(ProductImageDTO dto);

	int delete(ProductImageDTO dto);
}
