<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderDetailInsert **</title>
<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
</head>
<body>
	<h2>[주문상세 추가 페이지]</h2>
	<form action="orderDetailJoin" method="Post" enctype="multipart/form-data" id="orderdetailform">
		<table border="1" style="width: 100%; text-align: center">
			<tr height="40">
				<td bgcolor="Linen">주문번호</td>
				<td><input type="number" name="order_key" placeholder="주문번호"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">상품아이디</td>
				<td><input type="number" name="product_id" placeholder="상품아이디"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">각상품개수</td>
				<td><input type="number" id="user_id" name="product_cnt" placeholder="각상품개수"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">상품별가격</td>
				<td><input type="number" name="product_kind_price" placeholder="상품별가격"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">배송상태</td>
				<td><input type="text" name="delivery_status" placeholder="배송상태" value="배송준비중"
					size="20"></td>
			</tr>
			<tr>
				<td colspan=2>
					<input type="submit" id="submitTag" class="textlink" onclick="orderDetailInsert()" value="주문상세내역 담기" >&nbsp;&nbsp;
					<input type="reset" value="취소">
				</td>
			</tr>
		</table>
	</form>

	<c:if test="${not empty message}">
		<hr>
		${message}<br>
	</c:if>
</body>
</html>