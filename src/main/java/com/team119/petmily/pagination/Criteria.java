package com.team119.petmily.pagination;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Criteria {
	private int rowsPerPage; // 한 페이지에 출력할 게시글 갯수
	private int currPage; // 출력 요청받은 페이지
	private int sno; // DB에 저장된 게시글의 첫번째 순번
	private int eno; // DB에 저장된 게시글의 마지막 순번

	// 1) 필요한 초기값 생성자로 초기화 (Default 생성자)
	public Criteria() {
		this.rowsPerPage = 10; 	// 한 화면에 5개의 게시글만 보여주겠다
		this.currPage = 1; 		// 첫페이지 설정
	}

	// 2) 클릭된 요청 페이지로 변경
	public void setCurrPage(int currPage) {
		if (currPage > 1)
			this.currPage = currPage;
		else
			this.currPage = 1;
	}

	// 3) DB의 첫번째, 마지막 게시글 순번 계산
	public void setSnoEno() {
		if (this.sno < 1)
			this.sno = 1;
		this.sno = (this.currPage - 1) * this.rowsPerPage;
	}

}
