package com.team119.petmily.service;

import java.util.List;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.domain.SearchDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface CartService {
	
	// ** selectList(회원별 장바구니 목록)
	List<CartDTO> selectList(String user_id);
	
	// ** selectOne(장바구니 항목 선택)
	CartDTO selectOne(CartDTO dto);
	
	// ** Delete(장바구니 상품 삭제)
	int delete(CartDTO dto);
	int deleteP(String user_id);

	// ** insert(장바구니 상품 추가)
	//	int insert(CartDTO dto);
	//	Integer getQuantity(String user_id, int product_id);
	void insert(String user_id, int product_id, int product_cnt);
	void insertP(String user_id, int product_id);
	
	// ** update(장바구니 수정)
	int update(CartDTO dto);
	
	// ** 수량 변경
	void upCnt(String user_id, int product_id);
	void downCnt(String user_id, int product_id);

	// ** Paging
	List<CartDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(SearchCriteria cri); // 출력대상인 전체 rows 갯수
	
	// ** 마이페이지 문의목록
	List<InquiryDTO> getInquiryList(String review_writer);
	
	// ** 마이페이지 리뷰목록
	List<ReviewDTO> getReviewList();
}