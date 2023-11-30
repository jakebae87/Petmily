package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.ProductImageDTO;

import com.team119.petmily.mapperInterface.ProductImageMapper;

@Service
public class ProductImageServiceImpl implements ProductImageService {
	
	@Autowired
	ProductImageMapper mapper;
	
	@Override
	public List<ProductImageDTO> selectList() {
		return mapper.selectList();
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
}
