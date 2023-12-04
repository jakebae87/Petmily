package com.team119.petmily.pagination;

import lombok.Getter;
import lombok.ToString;


@Getter
@ToString
public class Criteria {
	private int rowsPerPage; //1Page에 출력할 Row 갯수 
	private int currPage; //현재 출력(요청) Page
	private int sno; //start Row 순서번호: 계산필요
	private int eno; //end Row 순서번호: Oracle만 필요함 
	
	// 1) 필요한 초기값 생성자로 초기화 (Default 생성자)
	public Criteria() {
		this.rowsPerPage=5;
		this.currPage=1;
	}
	// 2) 요청시 값 갱신
	// 2.1) currPage
	public void setCurrPage(int currPage) {
		if ( currPage>1 ) this.currPage=currPage; 
		else this.currPage=1;
	}
	// 2.2) rowsPerPage
	// => 1페이지당 보여줄 Row(Record,튜플) 갯수 확인
	// => 제한조건 점검 ( 50개 까지만 허용)
	// => 당장은 사용하지 않지만 사용가능하도록 작성
	public void setRowsPerPage(int rowsPerPage) {
		if ( rowsPerPage>10 && rowsPerPage<999 )
			this.rowsPerPage=rowsPerPage;
		else this.rowsPerPage=5;
	}
	// 2.3) setSnoEno : sno, eno 계산
	// => currPage, rowsPerPage 를 이용해 계산
	// => Oracle 검색조건 : between(sno, eno) -> sno 부터 eno 까지
	// => MySql 검색조건 :  limit sno, n -> sno 다음 부터 n개
	//	-> SQL 구문 비교	
	//	select seq, id, title from board order by root desc, step asc;
	//	select seq, id, title from board order by root desc, step asc limit 10, 5;
	// => 예시) 6부터 5개 필요한경우
	//		Oracle : ~~ between(6, 10) -> 6,7,8,9,10
	//		MySql  : ~~ limit 5, 5 -> 5 다음 부터 5개 -> 6,7,8,9,10
	public void setSnoEno() {
		if ( this.sno<1 ) this.sno=1;
		this.sno=(this.currPage-1)*this.rowsPerPage; //MySql
		// ** Oracle
		//this.sno=(this.currPage-1)*this.rowsPerPage+1;
		//this.eno=this.sno+this.rowsPerPage-1;
	}
	
} //class
