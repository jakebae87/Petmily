<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Table List</title>
</head>
<body>
	<h2>Product Table List</h2>
	&nbsp;<a class="addData" onclick="pInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>

	<div id="searchBar">
		<select name="searchType" id="searchType" onchange="keywordClear()">
			<option value="all">전체</option>
			<option value="product_name">Name</option>
			<option value="product_id">ID</option>
			<option value="product_description">Content</option>
		</select>
		<input type="text" name="keyword" id="keyword" value="${pageMaker.cri.keyword}">
		<button id="searchBtn" onclick="searchPDB()">Search</button>
	</div>
	<br>
	
	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>PRODUCT_ID</th>
			<th>PROMOTION_ID</th>
			<th>PRODUCT_KIND</th>
			<th>PRODUCT_CATEGORY</th>
			<th>PRODUCT_NAME</th>
			<th>PRODUCT_DESCRIPTION</th>
			<th>PRODUCT_PRICE</th>
			<th>PRODUCT_STOCK</th>
			<th>PRODUCT_SALES</th>
			<th>PRODUCT_REGDATE</th>
			<th>PRODUCT_MAINIMAGEPATH</th>
			<th>PRODUCT_DETAILIMAGEPATH</th>
			<th>PRODUCT_RATING</th>
			<th>PRODUCT_ORIGIN</th>
		</tr>
		
		<c:if test="${not empty requestScope.ptable}">
			<c:forEach var="s" items="${requestScope.ptable}">
				<tr>
					<td><a onclick="pDelete('${s.product_id}')" id="${s.product_id}">삭제</a></td>
					<td><a onclick="pUpdate('${s.product_id}')" id="${s.product_id}">수정</a></td>
					<td><a onclick="showImages('${s.product_id}')" id="${s.product_id}">${s.product_id}</a></td>
					<td>${s.promotion_id}</td>
					<td>${s.product_kind}</td>
					<td>${s.product_category}</td>
					<td>${s.product_name}</td>
					<td>${s.product_description}</td>
					<td>${s.product_price}</td>
					<td>${s.product_stock}</td>
					<td>${s.product_sales}</td>
					<td><fmt:formatDate value="${s.product_regdate}" pattern="yyyy-MM-dd" /></td>
					<td><img alt="MyImage" src="/resources/uploadImages/${s.product_mainimagepath}"  width="60" height="40"></td>
					<td><img alt="MyImage" src="/resources/uploadImages/${s.product_detailimagepath}"  width="60" height="40"></td>
					<td>${s.product_rating}</td>
					<td>${s.product_origin}</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.ptable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	
	<!-- Pagination -->
	<!-- 첫번째 페이지 이동 -->
	<div style=text-align:center;>
	
	<a onclick="productf('/product/productList?currPage=1&rowsPerPage=${pageMaker.cri.rowsPerPage}')">FP</a>&nbsp;
	
	<!-- 페이징 번호 표시 -->
	<c:forEach begin="${pageMaker.spageNo }" end="${pageMaker.epageNo }"
		var="i">
		<c:if test="${i==pageMaker.cri.currPage }">
			<font color="Orange" size="5"><b>${i }</b></font>&nbsp;
		</c:if>
		<c:if test="${i!=pageMaker.cri.currPage }">
			<a onclick="productf('/product/productList${pageMaker.makeQuery(i)}')">${i }</a>&nbsp;
		</c:if>
	</c:forEach>

	<!-- 마지막 페이지 이동 -->
	<a onclick="productf('/product/productList?currPage=${pageMaker.lastPageNo}&rowsPerPage=${pageMaker.cri.rowsPerPage}')">LP</a>
	</div>
	<hr>
</body>
</html>