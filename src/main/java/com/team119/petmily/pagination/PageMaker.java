package com.team119.petmily.pagination;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PageMaker {
	
	private int totalRowsCount; //전체 Row 갯수: DB에서 읽어온다
	private int spageNo; //계산: view 에 표시할 첫 PageNo
	private int epageNo; //계산: view 에 표시할 끝 PageNo
	private int displayPageNo=3; //1Page당 표시할 pageNo갯수
	private int lastPageNo; //출력 가능한 마지막 PageNo: 계산
	private boolean prev; //이전 PageBlock 으로
	private boolean next; //다음 PageBlock 으로
	
	SearchCriteria cri;
	
	// ** 필요값 set
	// 1) Criteria 
	public void setCri(SearchCriteria cri) {	
		this.cri=cri;
	}
	// 2) totalRowsCount
	public void setTotalRowsCount(int totalRowsCount) {
		this.totalRowsCount=totalRowsCount;
		calcData();
	}
	// 3) 나머지 필요값 계산 (totalRowsCount 를 이용해서 계산) 
	// => spageNo, epageNo, lastPageNo, prev, next 계산
	public void calcData() {
		epageNo = (int)Math.ceil(cri.getCurrPage()/(double)displayPageNo) * displayPageNo;
	
		spageNo = (epageNo-displayPageNo) + 1;
		
		lastPageNo =(int)Math.ceil(totalRowsCount/(double)cri.getRowsPerPage());
		if ( lastPageNo<epageNo ) epageNo=lastPageNo;
		
		prev = spageNo==1 ? false : true;
		next = epageNo==lastPageNo ? false : true;
		
	}
	
	public String makeQuery(int currPage) {
		UriComponents uriComponents = 
				UriComponentsBuilder.newInstance()
				.queryParam("currPage", currPage)
				.queryParam("rowsPerPage", cri.getRowsPerPage())
				.build();
		return uriComponents.toString();
	}
	
	public String searchQuery(int currPage) {
		MultiValueMap<String, String> checkMap = new LinkedMultiValueMap<String, String>();
		
		if ( cri.getCheck() !=null && cri.getCheck().length>0 ) {
			for (String c:cri.getCheck()) {
				checkMap.add("check", c);
			}
		}else checkMap=null;
		
		UriComponents uriComponents = 
				UriComponentsBuilder.newInstance()
				.queryParam("currPage", currPage)
				.queryParam("rowsPerPage", cri.getRowsPerPage())
				.queryParam("searchType", cri.getSearchType())
				.queryParam("keyword", cri.getKeyword())
				.queryParams(checkMap)
				.build();
		return uriComponents.toString();
	}
	
}