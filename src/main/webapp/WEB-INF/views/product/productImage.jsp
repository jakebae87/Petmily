<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product_Image Table List</title>
</head>
<body>
	<h2>Product_Image Table List</h2>
	&nbsp;<a class="addData" onclick="piInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>

	<div id="searchBar">
		<select name="searchType" id="searchType" onchange="keywordClear()">
			<option value="all">전체</option>
			<option value="pimage_id">pID</option>
			<option value="product_id">ID</option>
		</select>
		<input type="text" name="keyword" id="keyword" value="${pageMaker.cri.keyword}">
		<button id="searchBtn" onclick="searchPIDB()">Search</button>
	</div>
	<br>
	
	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>PIMAGE_ID</th>
			<th>PRODUCT_ID</th>
			<th>PRODUCT_IMAGE</th>
			<th>PRODUCT_VALUE1</th>
		</tr>
		
		<c:if test="${not empty requestScope.pitable}">
			<c:forEach var="s" items="${requestScope.pitable}">
				<tr>
					<td><a onclick="piDelete('${s.pimage_id}')" id="${s.pimage_id}">삭제</a></td>
					<td><a onclick="piUpdate('${s.pimage_id}')" id="${s.pimage_id}">수정</a></td>
					<td>${s.pimage_id}</td>
					<td>${s.product_id}</td>
					<td><img alt="MyImage" src="/resources/uploadImages/${s.product_imagepath}" width="60" height="40"></td>
					<td>${s.product_value1}</td>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.pitable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	
	<!-- Pagination -->
	<!-- 첫번째 페이지 이동 -->
	<div style=text-align:center;>
	
	<a onclick="pImagef('/product/pImageList?currPage=1&rowsPerPage=${pageMaker.cri.rowsPerPage}')">FP</a>&nbsp;
	
	<!-- 페이징 번호 표시 -->
	<c:forEach begin="${pageMaker.spageNo }" end="${pageMaker.epageNo }"
		var="i">
		<c:if test="${i==pageMaker.cri.currPage }">
			<font color="Orange" size="5"><b>${i }</b></font>&nbsp;
		</c:if>
		<c:if test="${i!=pageMaker.cri.currPage }">
			<a onclick="pImagef('/product/pImageList${pageMaker.makeQuery(i)}')">${i }</a>&nbsp;
		</c:if>
	</c:forEach>

	<!-- 마지막 페이지 이동 -->
	<a onclick="pImagef('/product/pImageList?currPage=${pageMaker.lastPageNo}&rowsPerPage=${pageMaker.cri.rowsPerPage}')">LP</a>
	</div>
	<hr>
</body>
</html>