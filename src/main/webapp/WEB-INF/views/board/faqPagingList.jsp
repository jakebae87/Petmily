<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<title>Review List</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/faq.js"></script>
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
	
	<h2>[자주묻는질문 목록 페이지]</h2>
	<button id="crud" onclick="faqInsertForm()">글쓰기</button>
	<br> <br>
	<table id="boardTable">
		<tr>
			<th>글번호</th>
			<th>글분류</th>
			<th>글제목</th>
			<th>조회수</th>
			<th>작성일</th>
			<th>삭제</th>
		</tr>
		<c:if test="${not empty requestScope.faq}">
			<c:forEach var="s" items="${requestScope.faq}">
				<tr>
					<td>${s.faq_id}</td>
					<td>${s.question_type}</td>
					<td><a onclick="faqDetail(${s.faq_id})">${s.faq_title}</a></td>
					<td>${s.faq_count}</td>
					<td>${s.faq_regdate}</td>
					<td><a onclick="faqDelete(${s.faq_id})">삭제</a></td>
				</tr>
			</c:forEach>
		</c:if>

	</table>

	<!-- -------------비동기 페이지 끝------------- -->
	
	<!-- Pagination -->
	
	<!-- 첫번째 페이지 이동 -->
	<div style=text-align:center;>
	<c:choose>
		<c:when test="${pageMaker.prev && pageMaker.spageNo>1}">
			<a onclick="faqPagingList('/board/faqPagingList?currPage=1&rowsPerPage=10')">첫번째 페이지</a>&nbsp;
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
			<a onclick="faqPagingList('/board/faqPagingList${pageMaker.makeQuery(i)}')">${i }</a>&nbsp;
		</c:if>
	</c:forEach>


	<!-- 마지막 페이지 이동 -->
	<c:choose>
		<c:when test="${pageMaker.next && pageMaker.epageNo > 0 }">
			&nbsp; <a onclick="faqPagingList('/board/faqPagingList${pageMaker.makeQuery(pageMaker.lastPageNo) }')">마지막 페이지</a>
		</c:when>
		<c:otherwise>
			<font color="Gray">&nbsp;&nbsp;마지막 페이지</font>
		</c:otherwise>
	</c:choose>
	</div>
</body>
</html>