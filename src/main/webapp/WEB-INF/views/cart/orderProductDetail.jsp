<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderProductDetail **</title>
<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
</head>
<body>
	<h2>[주문내역 상세 페이지]</h2>
	<table  style="text-align: center">
		<c:if test="${not empty requestScope.apple}">
			<tr height="40">
				<th bgcolor="Thistle">주문번호</th>
				<td>${requestScope.apple.order_key}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">회원아이디</th>
				<td>${requestScope.apple.user_id}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">총결제금액</th>
				<td>${requestScope.apple.order_total_price}</td>
			</tr>
				<tr height="40">
					<td bgcolor="Linen">주문날짜</td>
					<td><input type="date" name="order_date"
						value='<fmt:formatDate value="${requestScope.apple.order_date}" pattern="yyyy-MM-dd" />'></td>
				</tr>
			<tr height="40">
				<th bgcolor="Thistle">결제방법</th>
				<td>${requestScope.apple.pay_method}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">받는분성함</th>
				<td>${requestScope.apple.order_name}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">받는분이메일</th>
				<td>${requestScope.apple.order_email}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">받는분전화번호</th>
				<td>${requestScope.apple.order_tel}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">우편번호</th>
				<td>${requestScope.apple.order_zipcode}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">받는분주소</th>
				<td>${requestScope.apple.order_zipcode}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">상세주소</th>
				<td>${requestScope.apple.order_zipcode}</td>
			</tr>
			<tr height="40">
				<th bgcolor="Thistle">배송요청사항</th>
				<td>${requestScope.apple.order_req}</td>
			</tr>
		</c:if>
		<c:if test="${empty requestScope.apple}">
			<tr>
				<td colspan="13">~~ 출력할 자료가 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	<hr>
	&nbsp;
	<a href="/home">Home</a>&nbsp;
</body>
</html>