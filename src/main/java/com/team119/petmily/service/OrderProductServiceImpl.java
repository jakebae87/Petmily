package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.mapperInterface.OrderProductMapper;
import com.team119.petmily.pagination.SearchCriteria;

@Service
public class OrderProductServiceImpl implements OrderProductService {
	
	// ** 전역변수 정의
	@Autowired
	OrderProductMapper mapper;
	
	// ** selectList
	@Override
	public List<OrderProductDTO> selectList() {
		return mapper.selectList();
	}
	
	// ** selectOne
	@Override
	public OrderProductDTO selectOne(OrderProductDTO dto) {
		return mapper.selectOne(dto);
	}
	
	// ** Delete
	@Override
	public int delete(OrderProductDTO dto) {
		return mapper.delete(dto);
	}
	
	// ** insert
	@Override
	public int insert(OrderProductDTO dto) {
		return mapper.insert(dto);
	}
	
	// ** update
	@Override
	public int update(OrderProductDTO dto) {
		return mapper.update(dto);
	}
	
	// ** Paging
	// => 출력할 Data만 select
	@Override
	public List<OrderProductDTO> bcriList(SearchCriteria cri){
		return mapper.searchCri(cri);   // ver02
		// return mapper.bcriList(cri); // ver01
	}
	// => 전체 rows 갯수
	@Override
	public int criTotalCount(SearchCriteria cri) {
		return mapper.searchTotalCount(cri); // ver02
		// return mapper.criTotalCount(); // ver01
	}
}
