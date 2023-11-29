<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/inquiry.js"></script>
</head>
<body>

	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[공지사항 상세페이지]</h2>
		<button
			onclick="location.href='inquiryUpdateForm?inquiry_id=${requestScope.inquiry.inquiry_id}'" id="crud">답변수정
		</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<c:if test="${not empty requestScope.inquiry}">
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td>${requestScope.inquiry.inquiry_title}</td>
				</tr>
				<tr>
					<th>작성자</th>
					<td>${requestScope.inquiry.inquiry_writer}</td>
				</tr>
				<tr>
					<th>조회수</th>
					<td>${requestScope.inquiry.inquiry_count}</td>
				</tr>
				<tr>
					<th>글내용</th>
					<td>${requestScope.inquiry.inquiry_content}</td>
				</tr>
				<tr>
					<th>작성일</th>
					<td>${requestScope.inquiry.inquiry_regdate}</td>
				</tr>
			</table>
		</c:if>
		<br><br>
		<c:if test="${not empty requestScope.inquiry.answer_content}">
			<table id="boardDetail">
				<tr>
					<th>답변 내용</th>
					<td>${requestScope.inquiry.answer_content}</td>
				</tr>
				<tr>
					<th>답변 작성일</th>
					<td>${requestScope.inquiry.answer_regdate}</td>
				</tr>
			</table>
		</c:if>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
