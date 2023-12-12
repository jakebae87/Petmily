<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product_Image Table Update</title>
</head>
<body>
	<h2>Product_Image Table Update</h2>
	<hr>

	<!-- <form action="/product/productupdate" method="Post"> -->
	<form action="/product/piupdate" method="Post" enctype="multipart/form-data">
	<table>
	  <c:if test="${not empty requestScope.pitable}">
		<tr><th>PIMAGE_ID (PK)</th>
			<td><input type="text" name="pimage_id" value="${requestScope.pitable.pimage_id}" readonly></td></tr>
		<tr><th>PRODUCT_id (FK)</th>
			<td><input type="text" name="product_id" value="${requestScope.pitable.product_id}" readonly></td></tr>
		<tr><th>PRODUCT_IMAGEPATH</th>
			<td><input type="text" name="product_imagepath" value="${requestScope.pitable.product_imagepath}"></td></tr>
		<tr><th>Image</th>
			<td>
				<input type="hidden" name="product_imagepath" value="${requestScope.pitable.product_imagepath}" readonly><br>		
				<input type="file" name="uploadfilef" id="uploadfilef">
			</td></tr>
		<tr><th>PRODUCT_VALUE1</th>
			<td>
				<select name="product_value1" id="product_value1">
					<option value="${requestScope.pitable.product_value1}" selected>${requestScope.pitable.product_value1}</option>
					<option value="1">1: 기타 이미지1</option>
		            <option value="2">2: 기타 이미지2</option>
		            <option value="3">3: 기타 이미지3</option>
		            <option value="4">4: 기타 이미지4</option>
		            <option value="5">5: 기타 이미지5</option>
		            <option value="6">6: 기타 이미지6</option>
				</select>
			</td>
		</tr>
		
		<tr><th></th>
			<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소">		
			</td>
		</tr>
	  </c:if>
	  <c:if test="${empty requestScope.pitable}">
	  	<tr><td>~~ 수정할 자료가 존재하지 않습니다 ~~</td>
	  	</tr>
	  </c:if>
	</table>
	</form>
	<hr>
</body>
</html>