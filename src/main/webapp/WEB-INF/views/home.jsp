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
</head>
<body>
	<h1>관리자페이지</h1>
	<table id="mainTable">
		<tr>
			<th><a href="">USER</a></th>
			<th><a href="">PRODUCT</a></th>
			<th><a href="">ORDER</a></th>
			<th><a onclick="noticePagingList('/board/noticePagingList')">BOARD</a></th>
			<!-- <th><a onclick="noticeList()">BOARD</a></th> -->
		</tr>
	</table>
	<hr>
	<div id="newPage"></div>
</body>
</html>
