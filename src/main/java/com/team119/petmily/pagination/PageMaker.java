package com.team119.petmily.pagination;

import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PageMaker {

	private int totalRowsCount; // DB에 저장된 전체 게시글의 갯수
	private int spageNo; // 출력할 페이지 블럭의 시작번호
	private int epageNo; // 출력할 페이지 블럭의 끝번호
	private int displayPageNo = 3; // 한 페이지에 출력할 페이지 블럭의 갯수
	private int lastPageNo; // 출력 가능한 마지막 페이지 블럭 번호
	private boolean prev; // 이전 PageBlock 으로
	private boolean next; // 다음 PageBlock 으로

	Criteria cri;

	public void setCri(Criteria cri) {
		this.cri = cri;
	}

	public void setTotalRowsCount(int totalRowsCount) {
		this.totalRowsCount = totalRowsCount;
		calcData();
	}

	public void calcData() {
		epageNo = (int) Math.ceil(cri.getCurrPage() / (double) displayPageNo) * displayPageNo;
		spageNo = (epageNo - displayPageNo) + 1;

		lastPageNo = (int) Math.ceil(totalRowsCount / (double) cri.getRowsPerPage());
		// 총 db 저장글 12개이고 페이지당 보여줄 글이 5개라면 '3'이다
		if (lastPageNo < epageNo)
			epageNo = lastPageNo;

		prev = spageNo == 1 ? false : true;
		next = epageNo == lastPageNo ? false : true;
	}

	public String makeQuery(int currPage) {
		UriComponents uriComponents = 
				UriComponentsBuilder.newInstance().
				queryParam("currPage", currPage)
				.queryParam("rowsPerPage", cri.getRowsPerPage())
				.build();
		return uriComponents.toString();
	}
	
	
}