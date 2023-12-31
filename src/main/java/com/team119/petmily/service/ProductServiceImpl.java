package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.mapperInterface.ProductMapper;
import com.team119.petmily.pagination.Criteria;
import com.team119.petmily.pagination.SearchCriteria;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductMapper mapper;

	@Override
	public ProductDTO selectOne(ProductDTO dto) {
		return mapper.selectOne(dto);
	}

	@Override
	public List<ProductDTO> selectList() {
		return mapper.selectList();
	}

	@Override
	public List<ProductDTO> selectPromotionList(int id) {
		return mapper.selectPromotionList(id);
	}

	@Override
	public List<ProductDTO> selectedList(String kind, String category) {
		return mapper.selectedList(kind, category);
	}

	@Override
	public List<ProductDTO> selectThisMonthList() {
		return mapper.selectThisMonthList();
	}

	@Override
	public List<ProductDTO> selectPopularList() {
		return mapper.selectPopularList();
	}

	@Override
	public List<ProductDTO> selectDiscountedList() {
		return mapper.selectDiscountedList();
	}

	@Override
	public List<ProductDTO> selectSearchedList(String searchKeyword) {
		return mapper.selectSearchedList(searchKeyword);
	}

	@Override
	public List<ReviewDTO> pReviewList(int id) {
		return mapper.pReviewList(id);
	}

	@Override
	public List<InquiryDTO> pinquiryList(int id) {
		return mapper.pinquiryList(id);
	}

	@Override
	public int insert(ProductDTO dto) {
		return mapper.insert(dto);
	}

	@Override
	public int update(ProductDTO dto) {
		return mapper.update(dto);
	}

	@Override
	public int updateProductRating() {
		return mapper.updateProductRating();
	}

	@Override
	public int delete(ProductDTO dto) {
		return mapper.delete(dto);
	}

	@Override
	public int updateP() {
		return mapper.updateP();
	}

	@Override
	public List<ProductDTO> getProductPagedList(Criteria cri) {
		return mapper.getProductPagedList(cri);
	}

	@Override
	public int productTotalCount() {
		return mapper.productTotalCount();
	}

	@Override
	public List<ProductDTO> searchCri(SearchCriteria cri) {
		return mapper.searchCri(cri);
	}

	@Override
	public int searchTotalCount(SearchCriteria cri) {
		return mapper.searchTotalCount(cri);
	}
	
	@Override
	public int updateD(int order_key) {
		return mapper.updateD(order_key);
	}
}
