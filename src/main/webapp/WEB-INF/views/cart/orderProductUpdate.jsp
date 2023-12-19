<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderProductUpdate **</title>
<link rel="stylesheet" type="text/css"
	href="/resources/myLib/myStyle.css">
<script src="/resources/myLib/jquery-3.2.1.min.js"></script>
</head>
<body>
	<h2>[주문내역 수정 페이지]</h2>
	<form action="orderProductUpdate" method="Post"
		enctype="multipart/form-data" id="orderproductUpdateform">
		<table>
			<c:if test="${not empty requestScope.apple}">
				<tr height="40">
					<td bgcolor="Linen">주문번호</td>
					<td><input type="text" name="order_key" placeholder="주문번호"
						value="${requestScope.apple.order_key}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">회원아이디</td>
					<td><input type="text" name="user_id" placeholder="회원아이디"
						value="${requestScope.apple.user_id}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">총결제금액</td>
					<td><input type="number" name="order_total_price"
						placeholder="총결제금액" value="${requestScope.apple.order_total_price}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">주문날짜</td>
					<td><input type="date" name="order_date"
						value='<fmt:formatDate value="${requestScope.apple.order_date}" pattern="yyyy-MM-dd" />'></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">결제방법</td>
					<td><input type="text" name="pay_method" placeholder="결제방법"
						value="${requestScope.apple.pay_method}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">받는분성함</td>
					<td><input type="text" name="order_name" placeholder="받는분성함"
						value="${requestScope.apple.order_name}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">받는분이메일</td>
					<td><input type="text" name="order_email" placeholder="받는분이메일"
						value="${requestScope.apple.order_email}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">받는분전화번호</td>
					<td><input type="text" name="order_tel" placeholder="받는분전화번호"
						value="${requestScope.apple.order_tel}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">우편번호</td>
					<td><input type="text" name="order_zipcode" placeholder="우편번호"
						value="${requestScope.apple.order_zipcode}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">받는분주소</td>
					<td><input type="text" name="order_addr" placeholder="받는분주소"
						value="${requestScope.apple.order_addr}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">상세주소</td>
					<td><input type="text" name="order_addr_detail"
						placeholder="상세주소" value="${requestScope.apple.order_addr_detail}" size="20"></td>
				</tr>
				<tr height="40">
					<td bgcolor="Linen">배송요청사항</td>
					<td><input type="text" name="order_req" placeholder="배송요청사항"
						value="${requestScope.apple.order_req}" size="20"></td>
				</tr>
				<tr>
					<td colspan=2><input type="submit" id="submit" value="수정">&nbsp;&nbsp;
						<span class="textlink" onclick="orderProductUpdate()">주문내역
							수정</span>&nbsp;&nbsp; <input type="reset" value="취소"></td>
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
</body>
</html>