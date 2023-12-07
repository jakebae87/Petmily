package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface ProductService {
	
	ProductDTO selectOne(ProductDTO dto);
	
	List<ProductDTO> selectList();
	
	List<ProductDTO> selectPromotionList(int id);
	
	List<ProductDTO> selectedList(String kind, String category);
	
	List<ProductDTO> selectThisMonthList();
	
	List<ProductDTO> selectPopularList();
	
	List<ProductDTO> selectDiscountedList();
	
	List<ProductDTO> selectSearchedList(String searchKeyword);
	
	int insert(ProductDTO dto);

	int update(ProductDTO dto);
	
	int delete(ProductDTO dto);
	
	List<InquiryDTO> pinquiryList(int id);
	
	List<InquiryDTO> productinquiryList(SearchDTO searchDTO);
}
