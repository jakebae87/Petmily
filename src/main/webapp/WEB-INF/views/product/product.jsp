<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Table List</title>
</head>
<body>
	<h2>Product Table List</h2>
	<hr>

	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>PRODUCT_ID</th>
			<th>PROMOTION_ID</th>
			<th>PRODUCT_KIND</th>
			<th>PRODUCT_CATEGORY</th>
			<th>PRODUCT_NAME</th>
			<th>PRODUCT_DESCRIPTION</th>
			<th>PRODUCT_PRICE</th>
			<th>PRODUCT_STOCK</th>
			<th>PRODUCT_SALES</th>
			<th>PRODUCT_REGDATE</th>
			<th>PRODUCT_MAINIMAGEPATH</th>
			<th>PRODUCT_DETAILIMAGEPATH</th>
			<th>PRODUCT_RATING</th>
			<th>PRODUCT_ORIGIN</th>
		</tr>
		
		<c:if test="${not empty requestScope.ptable}">
			<c:forEach var="s" items="${requestScope.ptable}">
				<tr>
					<td><a onclick="pDelete('${s.product_id}')" id="${s.product_id}">삭제</a></td>
					<td><a onclick="pUpdate('${s.product_id}')" id="${s.product_id}">수정</a></td>
					<td><a onclick="showImages('${s.product_id}')" id="${s.product_id}">${s.product_id}</a></td>
					<td>${s.promotion_id}</td>
					<td>${s.product_kind}</td>
					<td>${s.product_category}</td>
					<td>${s.product_name}</td>
					<td>${s.product_description}</td>
					<td>${s.product_price}</td>
					<td>${s.product_stock}</td>
					<td>${s.product_sales}</td>
					<td><fmt:formatDate value="${s.product_regdate}" pattern="yyyy-MM-dd" /></td>
					<td>${s.product_mainimagepath}</td>
					<td>${s.product_detailimagepath}</td>
					<%-- <td><img alt="MyImage" src="/resources/uploadImages/${s.product_mainimagepath}"  width="60" height="40"></td>
					<td><img alt="MyImage" src="/resources/uploadImages/${s.product_detailimagepath}"  width="60" height="40"></td> --%>
					<td>${s.product_rating}</td>
					<td>${s.product_origin}</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.ptable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	
	&nbsp;<a class="addData" onclick="pInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>
</body>
</html>