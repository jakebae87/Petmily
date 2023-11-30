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
		<h2>[자주묻는질문 수정페이지]</h2>
		<button id="crud" onclick="history.back()">뒤로</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form>
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td>
						<input type="text" id="faq_title" value="${requestScope.faq.faq_title}" />
					</td>
				</tr>
				<tr>
					<th>글분류</th>
					<td>
						<select id="question_type">
							<option value="결제/배송" <c:if test="${requestScope.faq.question_type eq '결제/배송' }">selected</c:if>>[결제/배송]</option>
							<option value="회원가입/정보" <c:if test="${requestScope.faq.question_type eq '회원가입/정보' }">selected</c:if>>[회원가입/정보]</option>
							<option value="교환/환불" <c:if test="${requestScope.faq.question_type eq '교환/환불' }">selected</c:if>>[교환/환불]</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>글내용</th>
					<td><input type="text" id="faq_content" value="${requestScope.faq.faq_content}" /></td>
				</tr>
				<tr>
					<th>작성일</th>
					<td><input type="text" id="faq_regdate"
						value="${requestScope.faq.faq_regdate}" readonly="readonly" /></td>
				</tr>
			</table>
		</form>
		<button id="crud" onclick="updateFaq(${requestScope.faq.faq_id})">확인</button>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
</html>
