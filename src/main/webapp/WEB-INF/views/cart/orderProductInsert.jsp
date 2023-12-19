<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily CartInsert **</title>
<link rel="stylesheet" type="text/css" href="/resources/myLib/myStyle.css">
</head>
<body>
	<h2>[주문내역 추가 페이지]</h2>
	<form action="orderProductJoin" method="Post" enctype="multipart/form-data" id="orderproductform">
		<table border="1" style="width: 100%; text-align: center">
			<tr height="40">
				<td bgcolor="Linen">회원아이디</td>
				<td><input type="text" name="user_id" placeholder="회원아이디"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">총결제금액</td>
				<td><input type="number" name="order_total_price" placeholder="총결제금액"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">결제방법</td>
				<td><input type="text" name="pay_method" placeholder="결제방법"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">받는분성함</td>
				<td><input type="text" name="order_name" placeholder="받는분성함"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">받는분이메일</td>
				<td><input type="text" name="order_email" placeholder="받는분이메일"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">받는분전화번호</td>
				<td><input type="text" name="order_tel" placeholder="받는분전화번호"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">우편번호</td>
				<td><input type="text" name="order_zipcode" placeholder="우편번호"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">받는분주소</td>
				<td><input type="text" name="order_addr" placeholder="받는분주소"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">상세주소</td>
				<td><input type="text" name="order_addr_detail" placeholder="상세주소"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">배송요청사항</td>
				<td><input type="text" name="order_req" placeholder="배송요청사항" value="조심히 안전하게 와주세요"
					size="20"></td>
			</tr>
			<tr>
				<td colspan=2>
					<input type="submit" id="submitTag" value="담기" >&nbsp;&nbsp;
					<span class="textlink" onclick="orderProductInsert()">주문내역 담기</span>&nbsp;&nbsp;
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