package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface ProductMapper {
	
	ProductDTO selectOne(ProductDTO dto);

	List<ProductDTO> selectList();
	
	List<ProductDTO> selectPromotionList(int id);
	
	List<ProductDTO> selectedList(String kind, String category);
	
	List<ProductDTO> selectThisWeekList();
	
	List<ProductDTO> selectPopularList();
	
	List<ProductDTO> selectDiscountedList();
	
	List<ProductDTO> selectSearchedList(String searchKeyword);
	
	int insert(ProductDTO dto);

	int update(ProductDTO dto);
	
	int delete(ProductDTO dto);
}
