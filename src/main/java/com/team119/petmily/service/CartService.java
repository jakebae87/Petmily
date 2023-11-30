package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface CartService {
	
	// ** selectList(회원별 장바구니 목록)
	List<CartDTO> selectList();
	
	// ** selectOne(장바구니 항목 선택)
	CartDTO selectOne(CartDTO dto);
	
	// ** Delete(장바구니 상품 삭제)
	int delete(CartDTO dto);

	// ** insert(장바구니 상품 추가)
//	int insert(CartDTO dto);
	Integer getQuantity(String user_id, int product_id);
	void insert(String user_id, int product_id, int product_cnt);
	
	// ** update(장바구니 수정)
	int update(CartDTO dto);
	
	// ** Paging
	List<CartDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(SearchCriteria cri); // 출력대상인 전체 rows 갯수
}