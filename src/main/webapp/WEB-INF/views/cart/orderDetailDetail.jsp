<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderDetailDetail **</title>
<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
</head>
<body>
	<h2>[주문상세 페이지]</h2>
	<table  style="text-align: center">
		<c:if test="${not empty requestScope.apple}">
<!-- 			<tr height="40"> -->
<!-- 				<th bgcolor="Thistle">주문상세번호</th> -->
<%-- 				<td>${requestScope.apple.order_detail_key}</td> --%>
<!-- 			</tr> -->
			<tr height="40">
				<th bgcolor="Thistle">주문번호</th>
				<td>${requestScope.apple.order_key}</td>
			</tr>
<!-- 			<tr height="40"> -->
<!-- 				<th bgcolor="Thistle">상품아이디</th> -->
<%-- 				<td>${requestScope.apple.product_id}</td> --%>
<!-- 			</tr> -->
<!-- 			<tr height="40"> -->
<!-- 				<th bgcolor="Thistle">각상품개수</th> -->
<%-- 				<td>${requestScope.apple.product_cnt}</td> --%>
<!-- 			</tr> -->
<!-- 			<tr height="40"> -->
<!-- 				<th bgcolor="Thistle">상품별가격</th> -->
<%-- 				<td>${requestScope.apple.product_kind_price}</td> --%>
<!-- 			</tr> -->
			<tr height="40">
				<th bgcolor="Thistle">배송상태</th>
				<td>${requestScope.apple.delivery_status}</td>
			</tr>
		</c:if>
		<c:if test="${empty requestScope.apple}">
			<tr>
				<td colspan="3">~~ 출력할 자료가 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	<hr>
	&nbsp;
	<a href="/home">Home</a>&nbsp;
</body>
</html>