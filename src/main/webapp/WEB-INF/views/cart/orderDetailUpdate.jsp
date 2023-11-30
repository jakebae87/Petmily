<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderDetailUpdate **</title>
<link rel="stylesheet" type="text/css"
	href="/resources/myLib/myStyle.css">
<script src="/resources/myLib/jquery-3.2.1.min.js"></script>
</head>
<body>
	<h2>[주문상세 수정 페이지]</h2>
	<form action="orderProductUpdate" method="Post"
		enctype="multipart/form-data" id="orderdetailUpdateform">
		<table>
			<c:if test="${not empty requestScope.apple}">
				<tr height="40">
					<td bgcolor="Linen">주문번호</td>
					<td><input type="number" name="order_key"
						value="${apple.order_key}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">배송상태</td>
					<td><input type="text" name="delivery_status"
						value="${apple.delivery_status}" size="20"></td>
				</tr>
				<tr>
					<td colspan=2><input type="submit" id="submit" value="수정">&nbsp;&nbsp;
						<span class="textlink" onclick="orderDetailUpdate()">주문내역	수정</span>&nbsp;&nbsp;
						<input type="reset" value="취소">
					</td>
				</tr>
			</c:if>
			<c:if test="${empty requestScope.apple}">
				<tr height="40">
					<td>~~ 수정할 자료가 존재하지 않습니다 ~~</td>
				</tr>
			</c:if>
		</table>
	</form>
	<hr>
	<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}
	</c:if>
	<hr>
	&nbsp;
	<a href="/home">Home</a>&nbsp;
</body>
</html>