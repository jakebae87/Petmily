<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Administrator Page</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/notice.js"></script>
<script src="/resources/javascript/inquiry.js"></script>
<script src="/resources/javascript/faq.js"></script>
<script src="/resources/javascript/review.js"></script>
<script src="/resources/javascript/cart.js"></script>
<script src="/resources/javascript/orderProduct.js"></script>
<script src="/resources/javascript/orderDetail.js"></script>
<script src="/resources/javascript/productList.js"></script>
<script src="/resources/javascript/productInsert.js"></script>
<script src="/resources/javascript/productUpdate.js"></script>
<script src="/resources/javascript/productDelete.js"></script>
</head>
<body>
	<h1>관리자페이지</h1>
	<table id="mainTable">
		<tr>
			<th><a href="/userform">USER</a></th>
			<th><a onclick="pTableListf()">PRODUCT</a></th>
<<<<<<< HEAD
			<th><a href="">ORDER</a></th>
			<th><a onclick="noticePagingList('/board/noticePagingList')">BOARD</a></th>
			<!-- <th><a onclick="noticeList()">BOARD</a></th> -->
=======
			<th><a onclick="cartForm()">ORDER</a></th>
			<th><a onclick="noticeList()">BOARD</a></th>
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
		</tr>
	</table>
	<hr>
	<div id="newPage"></div>
	<div id="pTableListArea"></div>
	<div id="resultArea1"></div>
	<div id="resultArea2"></div>
	&nbsp;<a href="/home">[Home]</a>&nbsp;
</body>
</html>
