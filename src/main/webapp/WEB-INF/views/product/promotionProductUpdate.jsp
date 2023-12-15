<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Promotion_Product Table Update</title>
</head>
<body>
	<h2>Promotion_Product Table Update</h2>
	<hr>

	<!-- <form action="/product/productupdate" method="Post"> -->
	<form action="/product/pmpupdate" method="Post" enctype="multipart/form-data">
	<table>
	  <c:if test="${not empty requestScope.pmptable}">
		<tr><th>PROMOTION_ID (PK)</th>
			<td><input type="text" name="promotion_id" value="${requestScope.pmptable.promotion_id}"></td></tr>
		<tr><th>PROMOTION_NAME</th>
			<td><input type="text" name="promotion_name" value="${requestScope.pmptable.promotion_name}"></td></tr>
		<tr><th>PROMOTION_IMAGE</th>
			<td>
				<input type="hidden" name="promotion_image" value="${requestScope.pmptable.promotion_image}"><br>		
				<input type="file" name="uploadfilef" id="uploadfilef">
			</td></tr>
		<tr><th>PROMOTION_START</th>
			<td><input type="date" name="promotion_start" value='<fmt:formatDate value="${requestScope.pmptable.promotion_start}" pattern="yyyy-MM-dd" />'></td></tr>
		<tr><th>PROMOTION_END</th>
			<td><input type="date" name="promotion_end" value='<fmt:formatDate value="${requestScope.pmptable.promotion_end}" pattern="yyyy-MM-dd" />'></td></tr>
		<tr><th>PROMOTION_DISCOUNT</th>
			<td><input type="text" name="promotion_discount" value="${requestScope.pmptable.promotion_discount}"></td></tr>
		<tr><th>PROMOTION_VALUE1</th>
			<td><input type="text" name="promotion_value1" value="${requestScope.pmptable.promotion_value1}"></td></tr>
		<tr><th></th>
			<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소">		
			</td>
		</tr>
	  </c:if>
	  <c:if test="${empty requestScope.pmptable}">
	  	<tr><td>~~ 수정할 자료가 존재하지 않습니다 ~~</td>
	  	</tr>
	  </c:if>
	</table>
	</form>
	<hr>
</body>
</html>