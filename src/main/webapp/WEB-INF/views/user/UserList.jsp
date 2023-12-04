<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** UserList **</title>
<link rel="stylesheet" type="text/css"
	href="/resources/javascript/myStyle.css">
	<script src="/resources/javascript/update.js" ></script>
</head>
<body>
	<h2>** UserList **</h2>

	<hr>
	<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}<br>
		<hr>
	</c:if>
	<table border="1" style="width: 100%; text-align: center">
		<tr bgcolor="skyblue">
			<th>user_id</th>
			<th>user_password</th>
			<th>user_name</th>
			<th>user_email</th>
			<th>user_birthday</th>
			<th>user_phone</th>
			<th>zipcode</th>
			<th>addr</th>
			<th>addr_detail</th>
			<th>수정</th>
			<th>Delete</th>
		</tr>
		<c:if test="${not empty requestScope.banana}">
			<c:forEach var="s" items="${requestScope.banana}">
				<tr>
					<td>${s.user_id}</td>
					<td>${s.user_password}</td>
					<td>${s.user_name}</td>
					<td>${s.user_email}</td>
					<td>${s.user_birthday}</td>
					<td>${s.user_phone}</td>
					<td>${s.zipcode}</td>
					<td>${s.addr}</td>
					<td>${s.addr_detail}</td>
					<td><span class="textlink"
						onclick="Userupdate('${s.user_id}')" id="${s.user_id}">update</span>
					</td>
					<td><span class="textlink"
						onclick="UserDelete('${s.user_id}')" id="${s.user_id}">Delete</span>
					</td>

				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty requestScope.banana}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>

</body>
</html>