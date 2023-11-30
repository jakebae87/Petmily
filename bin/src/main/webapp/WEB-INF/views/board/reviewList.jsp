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
		<h2>[상품후기 목록 페이지]</h2>
		<br> <br>
		<table id="boardTable">
			<tr>
				<th>글제목</th>
				<th>작성자</th>
				<th>평점</th>
				<th>조회수</th>
				<th>글내용</th>
				<th>작성일</th>
				<th>삭제</th>
			</tr>
			<c:if test="${not empty requestScope.review}">
				<c:forEach var="s" items="${requestScope.review}">
					<tr>
						<td><a onclick="reviewDetail(${s.review_id})">${s.review_title}</a></td>
						<td>${s.review_writer}</td>
						<td>${s.review_point}</td>
						<td>${s.review_count}</td>
						<td>${s.review_content}</td>
						<td>${s.review_regdate}</td>
						<td><a onclick="reviewDelete(${s.review_id})">삭제</a></td>
					</tr>
				</c:forEach>
			</c:if>

		</table>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
