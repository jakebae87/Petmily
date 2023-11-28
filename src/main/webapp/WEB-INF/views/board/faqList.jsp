<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
</head>
<body>
	<h1>관리자페이지</h1>
	<table id="mainTable">
		<tr>
			<th><a href="">USER</a></th>
			<th><a href="">PRODUCT</a></th>
			<th><a href="">ORDER</a></th>
			<th><a href="noticeList">BOARD</a></th>
		</tr>
	</table>
	<hr>

	<!-- -------------비동기 페이지------------- -->

	<table id="subTable">
		<tr>
			<th><a href="noticeList">Notice</a></th>
			<th><a href="inquiryList">Inquiry</a></th>
			<th><a href="reviewList">Review</a></th>
			<th><a href="faqList">FAQ</a></th>
		</tr>
	</table>
	<div id="newPage">
		<h2>[자주묻는질문 목록 페이지]</h2>
		<button id="crud">글쓰기</button>
		<br> <br>
		<table id="boardTable">
			<tr>
				<th>글제목</th>
				<th>작성자</th>
				<th>조회수</th>
				<th>글내용</th>
				<th>작성일</th>
				<th>수정</th>
				<th>삭제</th>
			</tr>
			<c:if test="${not empty requestScope.faq}">
				<c:forEach var="s" items="${requestScope.faq}">
					<tr>
						<td><a href="detail?id=${s.faq_id}">[${s.question_type}] ${s.faq_title}</a></td>
						<td>${s.faq_writer}</td>
						<td>${s.faq_count}</td>
						<td>${s.faq_content}</td>
						<td>${s.faq_regdate}</td>
						<td><a href="update?id=${s.faq_id}">수정</a></td>
						<td><a href="delete?id=${s.faq_id}">삭제</a></td>
					</tr>
				</c:forEach>
			</c:if>

		</table>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
