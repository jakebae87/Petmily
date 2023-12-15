package com.team119.petmily.mapperInterface;

import java.util.List;

import com.team119.petmily.domain.ProductImageDTO;
import com.team119.petmily.pagination.SearchCriteria;

public interface ProductImageMapper {
	
	List<ProductImageDTO> selectList();
	
	List<ProductImageDTO> selectListByID(int id);
	
	ProductImageDTO selectOne(ProductImageDTO dto);
	
	int insert(ProductImageDTO dto);

	int update(ProductImageDTO dto);

	int delete(ProductImageDTO dto);
	
	List<ProductImageDTO> searchCri(SearchCriteria cri); // 출력할 Data만 select
	int searchTotalCount(SearchCriteria cri); // 전체 rows 갯수
}
