<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** AjaxTest Main Form **</title>
<link rel="stylesheet" type="text/css"
	href="/resources/myLib/myStyle.css">
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/cart.js"></script>
<script src="/resources/javascript/orderProduct.js"></script>
<script src="/resources/javascript/orderDetail.js"></script>
</head>
<body>
	<h2>[장바구니/주문 관리 페이지]</h2>
	<hr>
	<c:if test="${not empty sessionScope.loginID}">
	=> ${sessionScope.loginName}님 안녕하세요 ~~<br>
	</c:if>
	<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}<br>
	</c:if>
	<hr>
	&nbsp;
	<span class="textlink" onclick="cartList()">CartList</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderList()">OrderList</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderDetailList()">OrderDetail</span>&nbsp;
	&nbsp;
	<a href="/home">[Home]</a>
	<hr>
	<div id="resultArea1"></div>
	<div id="resultArea2"></div>
</body>
</html>