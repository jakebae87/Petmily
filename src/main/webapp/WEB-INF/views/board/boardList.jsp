<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
</head>
<body>
	<h1>관리자페이지</h1>
	<table>
		<tr>
			<th><a href="">USER</a></th>
			<th><a href="">PRODUCT</a></th>
			<th><a href="">ORDER</a></th>
			<th><a href="/board/boardList">BOARD</a></th>
		</tr>
	</table>
	<hr>
	<div id="newPage">
		<h3>게시글 목록 페이지</h3>
		<table>
			<tr>
				<th>글제목</th>
				<th>작성자</th>
				<th>조회수</th>
				<th>글내용</th>
				<th>작성일</th>
			</tr>
			<c:if test="${not empty requestScope.notice}">
				<c:forEach var="s" items="${requestScope.notice}">
					<tr>
						<td>${s.NOTICE_TITLE}</td>
						<td>${s.NOTICE_WRITER}</td>
						<td>${s.NOTICE_COUNT}</td>
						<td>${s.NOTICE_CONTENT}</td>
						<td>${s.NOTICE_REGDATE}</td>
					</tr>
				</c:forEach>
			</c:if>

		</table>
	</div>
</body>
</html>
