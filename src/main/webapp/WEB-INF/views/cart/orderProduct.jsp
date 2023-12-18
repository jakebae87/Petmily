<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily OrderProduct **</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css">
<script>
	function searchDB() {
		self.location = 'bcriList' + '${pageMaker.makeQuery(1)}'
				+ '&searchType=' + document.getElementById('searchType').value
				+ '&keyword=' + document.getElementById('keyword').value;
	}

	function keywordClear() {
		if (document.getElementById('searchType').value == 'all')
			document.getElementById('keyword').value = '';
	}
</script>
</head>
<body>
	<h2>[주문내역 목록 페이지]</h2>
	<hr>
	<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}<br>
		<hr>
	</c:if>
	<hr>
	<table border="1" style="width: 100%; text-align: center">
		<tr bgcolor="skyblue">
			<th>주문번호</th>
			<th>회원아이디</th>
			<th>총결제금액</th>
			<th>주문날짜</th>
			<th>결제방법</th>
			<th>받는분성함</th>
			<th>받는분이메일</th>
			<th>받는분전화번호</th>
			<th>우편번호</th>
			<th>받는분주소</th>
			<th>상세주소</th>
			<th>배송요청사항</th>
			<th>삭제</th>
		</tr>
		<c:if test="${not empty requestScope.banana}">
			<c:forEach var="s" items="${requestScope.banana}">
				<tr>
					<td><span class="textlink" onclick="opDetail('${s.order_key}')" id="${s.order_key}">${s.order_key}</span></td>
					<td>${s.user_id}</td>
					<td>${s.order_total_price}</td>
					<td><fmt:formatDate value="${s.order_date}" pattern="yyyy-MM-dd" /></td>
					<td>${s.pay_method}</td>
					<td>${s.order_name}</td>
					<td>${s.order_email}</td>
					<td>${s.order_tel}</td>
					<td>${s.order_zipcode}</td>
					<td>${s.order_addr}</td>
					<td>${s.order_addr_detail}</td>
					<td>${s.order_req}</td>
					<td><span class="textlink" onclick="opDelete('${s.order_key}')" id="${s.order_key}">삭제</span></td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty requestScope.banana}">
			<tr>
				<td colspan="13">주문내역이 비어있습니다</td>
			</tr>
		</c:if>
	</table>
	<hr>
	<div align="center">
		<!-- ** Cri_Paging ** -->
		<!-- 1) FirstPage, Prev -->
		<c:choose>
			<c:when test="${pageMaker.prev && pageMaker.spageNo>1}">
				<a onclick="orderProduct(`${pageMaker.makeQuery(1)}`)">맨앞</a>&nbsp;
		  		<a onclick="orderProduct(`${pageMaker.makeQuery(pageMaker.spageNo-1)}`)">&LT;</a>&nbsp;&nbsp;
			</c:when>
			<c:otherwise>
				<font color="Gray">맨앞&nbsp;&LT;&nbsp;&nbsp;</font>
			</c:otherwise>
		</c:choose>

		<!-- 2) Display PageNo -->
		<c:forEach var="i" begin="${pageMaker.spageNo}"
			end="${pageMaker.epageNo}">
			<c:if test="${i==pageMaker.cri.currPage}">
				<font color="Orange" size="5"><b>${i}</b></font>&nbsp;
			</c:if>
			<c:if test="${i!=pageMaker.cri.currPage}">
				<a onclick="orderProduct(`${pageMaker.makeQuery(i)}`)">${i}</a>&nbsp;
			</c:if>
		</c:forEach>

		<!-- 3) Next, LastPage -->
		<c:choose>
			<c:when test="${pageMaker.next && pageMaker.epageNo>0}">
			&nbsp;<a onclick="orderProduct(`${pageMaker.makeQuery(pageMaker.epageNo+1)}`)">&GT;</a>
			&nbsp;<a onclick="orderProduct(`${pageMaker.makeQuery(pageMaker.lastPageNo)}`)">맨뒤</a>
			</c:when>
			<c:otherwise>
				<font color="Gray">&nbsp;&GT;&nbsp;맨뒤</font>
			</c:otherwise>
		</c:choose>
	</div>
</body>
</html>