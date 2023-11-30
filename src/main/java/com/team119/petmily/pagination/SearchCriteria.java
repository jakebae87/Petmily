package com.team119.petmily.pagination;

import lombok.Data;

// ** SearchCriteria
// => 검색 조건의 항목들을 관리 

@Data
public class SearchCriteria extends Criteria {
	
	private String searchType = "all" ; // 컬럼선택
	private String keyword;
	private String[] check;
} //class
