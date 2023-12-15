package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.ProductDTO;
import com.team119.petmily.domain.ProductImageDTO;

import com.team119.petmily.mapperInterface.ProductImageMapper;
import com.team119.petmily.pagination.SearchCriteria;

@Service
public class ProductImageServiceImpl implements ProductImageService {
	
	@Autowired
	ProductImageMapper mapper;
	
	@Override
	public List<ProductImageDTO> selectList() {
		return mapper.selectList();
	}
	
	@Override
	public List<ProductImageDTO> selectListByID(int id) {
		return mapper.selectListByID(id);
	}
	
	@Override
	public ProductImageDTO selectOne(ProductImageDTO dto) {
		return mapper.selectOne(dto);
	}
	
	@Override
	public int insert(ProductImageDTO dto) {
		return mapper.insert(dto);
	}
	
	@Override
	public int update(ProductImageDTO dto) {
		return mapper.update(dto);
	}

	@Override
	public int delete(ProductImageDTO dto) {
		return mapper.delete(dto);
	}
	
	@Override
	public List<ProductImageDTO> searchCri(SearchCriteria cri) {
		return mapper.searchCri(cri);
	}

	@Override
	public int searchTotalCount(SearchCriteria cri) {
		return mapper.searchTotalCount(cri);
	}
}
