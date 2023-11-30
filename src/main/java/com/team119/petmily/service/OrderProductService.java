package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface OrderProductService {
	
	// ** selectList
	List<OrderProductDTO> selectList();
	
	// ** selectOne(주문상세내역 항목 선택)
	OrderProductDTO selectOne(OrderProductDTO dto);

	// ** Delete(주문내역 삭제)
	int delete(OrderProductDTO dto);
	
	// ** insert(주문내역 추가)
	int insert(OrderProductDTO dto);
	
	// ** update(주문내역 수정)
	int update(OrderProductDTO dto);
	
	// ** Paging
	List<OrderProductDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(SearchCriteria cri); // 출력대상인 전체 rows 갯수
}