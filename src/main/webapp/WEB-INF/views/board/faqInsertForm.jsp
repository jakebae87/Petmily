<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/faq.js"></script>
</head>
<body>
	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[자주묻는질문 작성페이지]</h2>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form>
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td><input type="text" id="faq_title" /></td>
				</tr>
				<tr>
					<th>글분류</th>
					<td><select id="question_type">
							<option value="결제/배송" selected>[결제/배송]</option>
							<option value="회원가입/정보">[회원가입/정보]</option>
							<option value="교환/환불">[교환/환불]</option>
							<option value="기타">[기타]</option>
					</select></td>
				</tr>
				<tr>
					<th>글내용</th>
					<td><textarea id="faq_content" cols="50" rows="10"></textarea></td>
				</tr>
			</table>
		</form>
		<button id="crud" onclick="faqInsert()">확인</button>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
