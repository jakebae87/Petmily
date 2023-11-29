<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/review.js"></script>
</head>
<body>

	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[상품후기 상세페이지]</h2>
		<button
			onclick="location.href='reviewUpdateForm?review_id=${requestScope.review.review_id}'" id="crud">글수정
		</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<c:if test="${not empty requestScope.review}">
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td>${requestScope.review.review_title}</td>
				</tr>
				<tr>
					<th>작성자</th>
					<td>${requestScope.review.review_writer}</td>
				</tr>
				<tr>
					<th>조회수</th>
					<td>${requestScope.review.review_count}</td>
				</tr>
				<tr>
					<th>글내용</th>
					<td>${requestScope.review.review_content}</td>
				</tr>
				<tr>
					<th>작성일</th>
					<td>${requestScope.review.review_regdate}</td>
				</tr>
			</table>
		</c:if>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
