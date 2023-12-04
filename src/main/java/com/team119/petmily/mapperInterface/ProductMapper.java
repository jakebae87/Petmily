package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.ProductDTO;

public interface ProductMapper {
	
	List<ProductDTO> selectList();
	
	List<ProductDTO> selectPromotionInfoList();
	
	List<ProductDTO> selectPromotionList(int id);
	
	List<ProductDTO> selectedList(String kind, String category);
	
	List<ProductDTO> selectThisWeekList();
	
	List<ProductDTO> selectPopularList();
	
	List<ProductDTO> selectDiscountedList();
	
	List<ProductDTO> selectSearchedList(String searchKeyword);
	
	ProductDTO selectOne(ProductDTO dto);
	
	int insert(ProductDTO dto);

	int update(ProductDTO dto);
	
	int delete(ProductDTO dto);
}
