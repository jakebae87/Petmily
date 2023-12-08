<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product_Image Table List</title>
</head>
<body>
	<h2>Product_Image Table List</h2>
	<hr>

	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>PIMAGE_ID</th>
			<th>PRODUCT_ID</th>
			<th>PRODUCT_IMAGE</th>
			<th>PRODUCT_VALUE1</th>
		</tr>
		
		<c:if test="${not empty requestScope.pitable}">
			<c:forEach var="s" items="${requestScope.pitable}">
				<tr>
					<td><a onclick="piDelete('${s.pimage_id}')" id="${s.pimage_id}">삭제</a></td>
					<td><a onclick="piUpdate('${s.pimage_id}')" id="${s.pimage_id}">수정</a></td>
					<td>${s.pimage_id}</td>
					<td>${s.product_id}</td>
					<td>${s.product_imagepath}</td>
					<%-- <td><img alt="MyImage" src="/resources/uploadImages/${s.product_imagepath}" width="60" height="40"></td> --%>
					<td>${s.product_value1}</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.pitable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	
	&nbsp;<a class="addData" onclick="piInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>
</body>
</html>