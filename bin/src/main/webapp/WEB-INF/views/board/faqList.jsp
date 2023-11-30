<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="/resources/javascript/faq.js"></script>
</head>
<body>

	<!-- -------------비동기 페이지------------- -->

	<table id="subTable">
		<tr>
			<th><a onclick="noticeList()">Notice</a></th>
			<th><a onclick="inquiryList()">Inquiry</a></th>
			<th><a onclick="reviewList()">Review</a></th>
			<th><a onclick="faqList()">FAQ</a></th>
		</tr>
	</table>
	<div id="newPage">
		<h2>[자주묻는질문 목록 페이지]</h2>
		<button id="crud" onclick="faqInsertForm()">글쓰기</button>
		<br> <br>
		<table id="boardTable">
			<tr>
				<th>글분류</th>
				<th>글제목</th>
				<th>조회수</th>
				<th>글내용</th>
				<th>작성일</th>
				<th>삭제</th>
			</tr>
			<c:if test="${not empty requestScope.faq}">
				<c:forEach var="s" items="${requestScope.faq}">
					<tr>
						<td>${s.question_type}</td>
						<td><a onclick="faqDetail(${s.faq_id})">${s.faq_title}</a></td>
						<td>${s.faq_count}</td>
						<td>${s.faq_content}</td>
						<td>${s.faq_regdate}</td>
						<td><a onclick="faqDelete(${s.faq_id})">삭제</a></td>
					</tr>
				</c:forEach>
			</c:if>

		</table>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
