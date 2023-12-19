<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[자주묻는질문 상세페이지]</h2>
		<button
			onclick="location.href='faqUpdateForm?faq_id=${requestScope.faq.faq_id}'"
			id="crud">글수정</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<c:if test="${not empty requestScope.faq}">
			<table id="boardDetail">
				<tr>
					<th>글번호</th>
					<td>${requestScope.faq.faq_id}</td>
				</tr>
				<tr>
					<th>글제목</th>
					<td>${requestScope.faq.faq_title}</td>
				</tr>
				<tr>
					<th>글분류</th>
					<td>${requestScope.faq.question_type}</td>
				</tr>
				<tr>
					<th>조회수</th>
					<td>${requestScope.faq.faq_count}</td>
				</tr>
				<tr>
					<th>글내용</th>
					<td>${requestScope.faq.faq_content}</td>
				</tr>
				<tr>
					<th>작성일</th>
					<td>${requestScope.faq.faq_regdate}</td>
				</tr>
			</table>
		</c:if>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
