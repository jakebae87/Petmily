<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Promotion_Product Table List</title>
</head>
<body>
	<h2>Promotion_Product Table List</h2>
	<hr>

	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>PROMOTION_ID</th>
			<th>PROMOTION_NAME</th>
			<th>PROMOTION_IMAGE</th>
			<th>PROMOTION_START</th>
			<th>PROMOTION_END</th>
			<th>PROMOTION_DISCOUNT</th>
			<th>PROMOTION_VALUE1</th>
		</tr>
		
		<c:if test="${not empty requestScope.pmptable}">
			<c:forEach var="s" items="${requestScope.pmptable}">
				<tr>
					<td><a onclick="pmpDelete('${s.promotion_id}')" id="${s.promotion_id}">삭제</a></td>
					<td><a onclick="pmpUpdate('${s.promotion_id}')" id="${s.promotion_id}">수정</a></td>
					<td>${s.promotion_id}</td>
					<td>${s.promotion_name}</td>
					<td><img alt="MyImage" src="/resources/uploadImages/${s.promotion_image}" width="60" height="40"></td>
					<td><fmt:formatDate value="${s.promotion_start}" pattern="yyyy-MM-dd" /></td>
					<td><fmt:formatDate value="${s.promotion_end}" pattern="yyyy-MM-dd" /></td>
					<td>${s.promotion_discount}</td>
					<td>${s.promotion_value1}</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.pmptable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	
	&nbsp;<a onclick="pmpInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>
	
	&nbsp;<a href="/home">Home</a>&nbsp;
</body>
</html>