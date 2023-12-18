<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** Petmily CartList **</title>
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
	<h2>[장바구니 목록 페이지]</h2>
	<hr>
	<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}<br>
		<hr>
	</c:if>
		<hr>
	<div id="searchBar">
		<select name="searchType" id="searchType" onchange="keywordClear()">
			<option value="all"
				${pageMaker.cri.searchType=='all' ? 'selected' : ''}>전체</option>
			<option value="title"
				${pageMaker.cri.searchType=='user_id' ? 'selected' : ''}>주문아이디</option>
			<option value="content"
				${pageMaker.cri.searchType=='product_id' ? 'selected' : ''}>상품아이디</option>
		</select>
		<input type="text" name="keyword" id="keyword" value="${pageMaker.cri.keyword}">
		<button id="searchBtn" onclick="searchDB()">Search</button>
	</div>
	<br>
	<hr>
	<table border="1" style="width: 100%; text-align: center">
		<tr bgcolor="skyblue">
			<th>회원아이디</th>
			<th>상품명</th>
			<th>수량</th>
			<th>삭제</th>
		</tr>
		<c:if test="${not empty requestScope.banana}">
			<c:forEach var="s" items="${requestScope.banana}">
				<tr>
				<%-- <td><a href="cdetail?id=${s.user_id}">${s.user_id}</a></td> --%>
					<td>${s.user_id}</td>
					<td>${s.product_id}</td>
					<td>${s.product_cnt}</td>
					<td><span class="textlink" onclick="cDelete('${s.user_id}', '${s.product_id}')" id="${s.product_id}">삭제</span></td>
				</tr>
			</c:forEach>
		</c:if>
		<c:if test="${empty requestScope.banana}">
			<tr>
				<td colspan="4">장바구니가 비어있습니다</td>
			</tr>
		</c:if>
		<!-- <tr>
			<td colspan="4"><input type="submit" id="orderButton" value="주문"></td>
		</tr> -->
	</table>
	<hr>
	<div align="center">
		<!-- ** Cri_Paging ** -->
		<!-- 1) FirstPage, Prev -->
		<c:choose>
			<c:when test="${pageMaker.prev && pageMaker.spageNo>1}">
				<a onclick="cartPageList(`${pageMaker.makeQuery(1)}`)">맨앞</a>&nbsp;
		  		<a onclick="cartPageList(`${pageMaker.makeQuery(pageMaker.spageNo-1)}`)">&LT;</a>&nbsp;&nbsp;
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
				<a onclick="cartPageList(`${pageMaker.makeQuery(i)}`)">${i}</a>&nbsp;
			</c:if>
		</c:forEach>

		<!-- 3) Next, LastPage -->
		<c:choose>
			<c:when test="${pageMaker.next && pageMaker.epageNo>0}">
			&nbsp;<a onclick="cartPageList(`${pageMaker.makeQuery(pageMaker.epageNo+1)}`)">&GT;</a>
			&nbsp;<a onclick="cartPageList(`${pageMaker.makeQuery(pageMaker.lastPageNo)}`)">맨뒤</a>
			</c:when>
			<c:otherwise>
				<font color="Gray">&nbsp;&GT;&nbsp;맨뒤</font>
			</c:otherwise>
		</c:choose>
	</div>
</body>
</html>