package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.OrderDetailDTO;
import com.team119.petmily.domain.OrderProductDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface OrderDetailMapper {

	// selectList
	List<OrderDetailDTO> selectList();
	List<OrderProductDTO> selectListP(String user_id);

	// selectOne: Detail
	OrderDetailDTO selectOne(OrderDetailDTO vo);

	// delete
	int delete(OrderDetailDTO vo);

	// insert: Join
	int insert(OrderDetailDTO vo);

	// update
	int update(OrderDetailDTO vo);
	
	// ** Board_SrarchCri_Paging
	// => Cri + 검색조건
	List<OrderDetailDTO> searchCri(SearchCriteria cri);  
	int searchTotalCount(SearchCriteria cri);  
	
	// ** Board_Cri_Paging
	List<OrderDetailDTO> bcriList(SearchCriteria cri); // 출력할 Data만 select
	int criTotalCount(); // 전체 rows 갯수
}
