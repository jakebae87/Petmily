<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<title>Notice List</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/notice.js"></script>
</head>
<body>
	<table id="subTable">
		<tr>
			<th><a onclick="noticePagingList('/board/noticePagingList')">Notice</a></th>
			<th><a onclick="inquiryPagingList('/board/inquiryPagingList')">Inquiry</a></th>
			<th><a onclick="reviewPagingList('/board/reviewPagingList')">Review</a></th>
			<th><a onclick="faqPagingList('/board/faqPagingList')">FAQ</a></th>
		</tr>
	</table>
	
	<h2>[공지사항 목록 페이지]</h2>
	<button id="crud" onclick="noticeInsertForm()">글쓰기</button>
	<br> <br>
	<table id="boardTable">
		<tr>
			<th>글제목</th>
			<th>작성자</th>
			<th>조회수</th>
			<th>작성일</th>
			<th>삭제</th>
		</tr>
		<c:if test="${not empty requestScope.notice}">
			<c:forEach var="s" items="${requestScope.notice}">
				<tr>
					<td><a onclick="noticeDetail(${s.notice_id})">${s.notice_title}</a></td>
					<td>${s.notice_writer}</td>
					<td>${s.notice_count}</td>
					<td>${s.notice_regdate}</td>
					<td><a onclick="noticeDelete(${s.notice_id})">삭제</a></td>
				</tr>
			</c:forEach>
		</c:if>

	</table>
	
	<!-- Pagination -->
	
	<!-- 첫번째 페이지 이동 -->
	<div style=text-align:center;>
	<c:choose>
		<c:when test="${pageMaker.prev && pageMaker.spageNo>1}">
			<a onclick="noticePagingList('/board/noticePagingList?currPage=1&rowsPerPage=5')">첫번째 페이지</a>&nbsp;
		</c:when>

		<c:otherwise>
			<font color="Gray">첫번째 페이지&nbsp;&nbsp;&nbsp;</font>
		</c:otherwise>
	</c:choose>

	<!-- 페이징 번호 표시 -->
	<c:forEach begin="${pageMaker.spageNo }" end="${pageMaker.epageNo }"
		var="i">
		<c:if test="${i==pageMaker.cri.currPage }">
			<font color="Orange" size="5"><b>${i }</b></font>&nbsp;
		</c:if>
		<c:if test="${i!=pageMaker.cri.currPage }">
			<a onclick="noticePagingList('/board/noticePagingList${pageMaker.makeQuery(i)}')">${i }</a>&nbsp;
		</c:if>
	</c:forEach>


	<!-- 마지막 페이지 이동 -->
	<c:choose>
		<c:when test="${pageMaker.next && pageMaker.epageNo > 0 }">
			&nbsp; <a onclick="noticePagingList('/board/noticePagingList${pageMaker.makeQuery(pageMaker.lastPageNo) }')">마지막 페이지</a>
		</c:when>
		<c:otherwise>
			<font color="Gray">&nbsp;&nbsp;마지막 페이지</font>
		</c:otherwise>
	</c:choose>
	</div>
</body>
</html>