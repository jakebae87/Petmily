package com.team119.petmily.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.mapperInterface.CartMapper;
import com.team119.petmily.pagination.SearchCriteria;

@Service
public class CartServiceImpl implements CartService {

	// ** 전역변수 정의
	@Autowired
	CartMapper mapper;

	// ** selectList
	@Override
	public List<CartDTO> selectList() {
		return mapper.selectList();
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

	// ** insert
//	@Override
//	public int insert(CartDTO dto) {
//		return mapper.insert(dto);
//	}
	@Override
	public Integer getQuantity(String user_id, int product_id) {
        return mapper.getQuantity(user_id, product_id);
	}
	@Override
	public void insert(String user_id, int product_id, int product_cnt) {
        Integer existingQuantity = mapper.getQuantity(user_id, product_id);

        if (existingQuantity == null) {
            // 해당 상품이 장바구니에 없는 경우
            mapper.insert(user_id, product_id, product_cnt);
        } else {
            // 이미 장바구니에 있는 경우 수량 업데이트
            mapper.insert(user_id, product_id, product_cnt);
        }
    }
	
	// ** update
	@Override
	public int update(CartDTO dto) {
		return mapper.update(dto);
	}
	
	// ** Paging
	// => 출력할 Data만 select
	@Override
	public List<CartDTO> bcriList(SearchCriteria cri){
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
