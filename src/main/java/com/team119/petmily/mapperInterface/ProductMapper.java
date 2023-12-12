package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.SearchDTO;

public interface ProductMapper {
	
	ProductDTO selectOne(ProductDTO dto);

	List<ProductDTO> selectList();
	
	List<ProductDTO> selectPromotionList(int id);
	
	List<ProductDTO> selectedList(String kind, String category);
	
	List<ProductDTO> selectThisMonthList();
	
	List<ProductDTO> selectPopularList();
	
	List<ProductDTO> selectDiscountedList();
	
	List<ProductDTO> selectSearchedList(String searchKeyword);
	
	List<ReviewDTO> pReviewList(int id);
	
	List<InquiryDTO> pinquiryList(int id);
	
	int insert(ProductDTO dto);

	int update(ProductDTO dto);
	
	int updateProductRating();
	
	int delete(ProductDTO dto);
	
	int updateP();
}
