<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
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
		<h2>[상품문의 목록 페이지]</h2>
		<br> <br>
		<table id="boardTable">
			<tr>
				<th>글제목</th>
				<th>답변여부</th>
				<th>작성자</th>
				<th>조회수</th>
				<th>글내용</th>
				<th>작성일</th>
				<th>삭제</th>
			</tr>
			<c:if test="${not empty requestScope.inquiry}">
				<c:forEach var="s" items="${requestScope.inquiry}">
					<tr>
						<td><a onclick="inquiryDetail(${s.inquiry_id})">${s.inquiry_title}</a></td>
						<td><c:if test="${not empty s.answer_content}">
								<b style="color: blue;">답변완료</b>
							</c:if> <c:if test="${empty s.answer_content}">
								<b style="color: red;">확인중</b>
							</c:if></td>
						<td>${s.inquiry_writer}</td>
						<td>${s.inquiry_count}</td>
						<td>${s.inquiry_content}</td>
						<td>${s.inquiry_regdate}</td>
						<td><a onclick="inquiryDelete(${s.inquiry_id})">삭제</a></td>
					</tr>
				</c:forEach>
			</c:if>

		</table>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
