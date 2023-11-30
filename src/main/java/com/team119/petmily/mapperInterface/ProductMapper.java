package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.ProductDTO;

public interface ProductMapper {
	
	List<ProductDTO> selectList();
	
	ProductDTO selectOne(ProductDTO dto);
	
	int insert(ProductDTO dto);

	int update(ProductDTO dto);
	
	int delete(ProductDTO dto);
}
