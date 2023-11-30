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
	<h2>[장바구니 추가 페이지]</h2>
	<form action="cartJoin" method="Post" enctype="multipart/form-data" id="cartform">
		<table border="1" style="width: 100%; text-align: center">
			<tr height="40">
				<td bgcolor="Linen">회원아이디</td>
				<td><input type="text" name="user_id" placeholder="회원아이디"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">상품아이디</td>
				<td><input type="number" name="product_id" placeholder="상품아이디"
					size="20"></td>
			</tr>
			<tr height="40">
				<td bgcolor="Linen">각상품수량</td>
				<td><input type="number" name="product_cnt" placeholder="각상품수량"
					size="20"></td>
			</tr>
			<tr>
				<td colspan=2>
					<input type="submit" id="submit" value="담기" >&nbsp;&nbsp;
					<span class="textlink" onclick="cartInsert()">장바구니 담기</span>&nbsp;&nbsp;
					<input type="reset" value="취소">
				</td>
			</tr>
		</table>
	</form>

	<c:if test="${not empty message}">
		<hr>
${message}<br>
	</c:if>
	<hr>
	&nbsp;&nbsp;
	<a href="/home">[Home]</a>
</body>
</html>