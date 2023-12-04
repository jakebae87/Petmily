package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.CartDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface CartMapper {

	// selectList
	List<CartDTO> selectList();
	
	// selectOne: Detail
	CartDTO selectOne(CartDTO vo);
		
	// delete
	int delete(CartDTO vo);
	
	// insert: Join
//	int insert(CartDTO vo);
//	Integer getQuantity(String user_id, int product_id);
	void insert(String user_id, int product_id, int product_cnt);
	void insertP(String user_id, int product_id);
		
	// update
	int update(CartDTO vo);
	void upCnt(String user_id, int product_id);
	void downCnt(String user_id, int product_id);

	// ** Board_SrarchCri_Paging
	// => Cri + 검색조건
	List<CartDTO> searchCri(SearchCriteria cri);  
	int searchTotalCount(SearchCriteria cri);  
	
	// ** Board_Cri_Paging
	List<CartDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(); // 전체 rows 갯수
}