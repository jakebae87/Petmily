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
	<div id="newPage">
		<h2>[공지사항 수정페이지]</h2>
		<button id="crud"
			onclick="location.href='noticeUpdate?notice_id=${requestScope.notice.notice_id}'">확인</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form action="noticeUpdate" method="post">
			<table id="boardDetail">
				<c:if test="${not empty requestScope.notice}">
					<tr>
						<th>글제목</th>
						<td><input type="text" name="notice_title" value="${requestScope.notice.notice_title}"/></td>
					</tr>
					<tr>
						<th>작성자</th>
						<td>${requestScope.notice.notice_writer}</td>
					</tr>
					<tr>
						<th>조회수</th>
						<td>${requestScope.notice.notice_count}</td>
					</tr>
					<tr>
						<th>글내용</th>
						<td>${requestScope.notice.notice_content}</td>
					</tr>
					<tr>
						<th>작성일</th>
						<td>${requestScope.notice.notice_regdate}</td>
					</tr>
				</c:if>
			</table>
		</form>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
