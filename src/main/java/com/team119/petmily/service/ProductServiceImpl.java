package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.ProductDTO;

import com.team119.petmily.mapperInterface.ProductMapper;

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
	public List<ProductDTO> selectPromotionInfoList() {
		return mapper.selectPromotionInfoList();
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
	public List<ProductDTO> selectThisWeekList() {
		return mapper.selectThisWeekList();
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
	public int insert(ProductDTO dto) {
		return mapper.insert(dto);
	}
	
	public int update(ProductDTO dto) {
		return mapper.update(dto);
	}

	@Override
	public int delete(ProductDTO dto) {
		return mapper.delete(dto);
	}
}
