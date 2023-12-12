package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.domain.InquiryDTO;
import com.team119.petmily.domain.ReviewDTO;
import com.team119.petmily.mapperInterface.CartMapper;
import com.team119.petmily.pagination.SearchCriteria;

@Service
public class CartServiceImpl implements CartService {

	// ** 전역변수 정의
	@Autowired
	CartMapper mapper;

	// ** selectList
	@Override
	public List<CartDTO> selectList(String user_id) {
		return mapper.selectList(user_id);
	}

	// ** selectOne
	@Override
	public CartDTO selectOne(CartDTO dto) {
		return mapper.selectOne(dto);
	}

	// ** Delete
	@Override
	public int delete(CartDTO dto) {
		return mapper.delete(dto);
	}
	@Override
	public int deleteP(String user_id) {
		return mapper.deleteP(user_id);
	}

	// ** insert
	@Override
	public void insert(String user_id, int product_id, int product_cnt) {
		mapper.insert(user_id, product_id, product_cnt);
	}
	@Override
	public void insertP(String user_id, int product_id) {
		mapper.insertP(user_id, product_id);
	}

	// ** update
	@Override
	public int update(CartDTO dto) {
		return mapper.update(dto);
	}
	
	// ** 수량 변경
	@Override
	public void upCnt(String user_id, int product_id) {
		mapper.upCnt(user_id, product_id);
	}
	@Override
	public void downCnt(String user_id, int product_id) {
		mapper.downCnt(user_id, product_id);
	}

	// ** Paging
	// => 출력할 Data만 select
	@Override
	public List<CartDTO> bcriList(SearchCriteria cri) {
		return mapper.searchCri(cri); // ver02
		// return mapper.bcriList(cri); // ver01
	}

	// => 전체 rows 갯수
	@Override
	public int criTotalCount(SearchCriteria cri) {
		return mapper.searchTotalCount(cri); // ver02
		// return mapper.criTotalCount(); // ver01
	}
	
	// 마이페이지 문의 목록
	@Override
	public List<InquiryDTO> getInquiryList(String review_writer) {
		return mapper.getInquiryList(review_writer);
	}
	
	@Override
	// 마이페이지 리뷰 목록
	public List<ReviewDTO> getReviewList() {
		return mapper.getReviewList();
	}
}
