package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.OrderDetailDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface OrderDetailService {

	// ** selectList
	List<OrderDetailDTO> selectList();
	
	// ** selectOne(주문상세내역 항목 선택)
	OrderDetailDTO selectOne(OrderDetailDTO dto);
	
	// ** Delete(주문상세내역 삭제)
	int delete(OrderDetailDTO dto);
	
	// ** insert(주문상세내역 추가)
	int insert(OrderDetailDTO dto);

	// ** update(주문상세내역 수정)
	int update(OrderDetailDTO dto);
	
	// ** Paging
	List<OrderDetailDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(SearchCriteria cri); // 출력대상인 전체 rows 갯수
}