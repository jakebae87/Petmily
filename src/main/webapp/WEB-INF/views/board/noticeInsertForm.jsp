<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/notice.js"></script>
</head>
<body>
	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[공지사항 작성페이지]</h2>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form action="noticeInsert" method="post">
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td><input type="text" id="notice_title" /></td>
				</tr>
				<tr>
					<th>글내용</th>
					<td><textarea id="notice_content" cols="50" rows="10"></textarea></td>
				</tr>
			</table>
		</form>
		<button id="crud" onclick="noticeInsert()">확인</button>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
