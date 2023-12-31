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
		<h2>[공지사항 수정페이지]</h2>
		<button id="crud" onclick="history.back()">뒤로</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form action="inquiryUpdate" method="post">
			<table id="boardDetail">
				<tr>
					<th>답변 내용</th>
					<td><input type="text" id="answer_content"
						value="${requestScope.inquiry.answer_content}"></td>
				</tr>
				<tr>
					<th>답변 작성일</th>
					<td>${requestScope.inquiry.answer_regdate}</td>
				</tr>
			</table>
		</form>
		<button id="crud"
			onclick="updateInquiryAnswer(${requestScope.inquiry.inquiry_id})">확인</button>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
