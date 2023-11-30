<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Table Update</title>
</head>
<body>
	<h2>Product Table Update</h2>
	<hr>

	<!-- <form action="/product/productupdate" method="Post"> -->
	<form action="/product/pupdate" method="Post" enctype="multipart/form-data">
	<table>
	  <c:if test="${not empty requestScope.ptable}">
		<tr><th>PRODUCT_ID (PK)</th>
			<td><input type="text" name="product_id" value="${requestScope.ptable.product_id}" readonly></td></tr>
		<tr><th>PROMOTION_ID (FK)</th>
			<td>
				<select name="promotion_id" id="promotion_id">
					<option value="${requestScope.ptable.promotion_id}" selected>${requestScope.ptable.promotion_id}</option>
					<option value="10">10: 일반상품</option>
					<option value="1">1: 프로모션1</option>
					<option value="2">2: 프로모션2</option>
					<option value="3">3: 프로모션3</option>
					<option value="4">4: 프로모션4</option>
					<option value="5">5: 프로모션5</option>
				</select>
			</td>
		</tr>
		<tr><th>PRODUCT_KIND</th>
			<td>
				<select name="product_kind" id="product_kind">
					<option value="${requestScope.ptable.product_kind}" selected>${requestScope.ptable.product_kind}</option>
					<option value="all">all</option>
					<option value="dog">dog</option>
					<option value="cat">cat</option>
				</select>
			</td>
		</tr>
		<tr><th>PRODUCT_CATEGORY</th>
			<td>
				<select name="product_category" id="product_category">
					<option value="${requestScope.ptable.product_category}" selected>${requestScope.ptable.product_category}</option>
					<option value="all">all</option>
					<option value="feed">feed</option>
					<option value="snackNutrient">snackNutrient</option>
					<option value="hygiene">hygiene</option>
					<option value="beautyCare">beautyCare</option>
					<option value="living">living</option>
					<option value="walkPlay">walkPlay</option>
					<option value="clothesAccessorie">clothesAccessorie</option>
				</select>
			</td>
		</tr>
		<tr><th>PRODUCT_NAME</th>
			<td><input type="text" name="product_name" value="${requestScope.ptable.product_name}"></td></tr>
		<tr><th>PRODUCT_DESCRIPTION</th>
			<td><input type="text" name="product_description" value="${requestScope.ptable.product_description}"></td></tr>	
		<tr><th>PRODUCT_PRICE</th>
			<td><input type="text" name="product_price" value="${requestScope.ptable.product_price}"></td></tr>			
		<tr><th>PRODUCT_STOCK</th>
			<td><input type="text" name="product_stock" value="${requestScope.ptable.product_stock}"></td></tr>			
		<tr><th>PRODUCT_SALES</th>
			<td><input type="text" name="product_sales" value="${requestScope.ptable.product_sales}"></td></tr>			
		<tr><th>PRODUCT_REGDATE</th>
			<td><input type="date" name="product_regdate" value='<fmt:formatDate value="${requestScope.ptable.product_regdate}" pattern="yyyy-MM-dd" />'></td></tr>			
		<tr><th>PRODUCT_MAINIMAGEPATH</th>
			<td><input type="text" name="product_mainimagepath" value="${requestScope.ptable.product_mainimagepath}"></td></tr>			
		<tr><th>Image</th>
			<td>
				<input type="hidden" name="product_mainimagepath" value="${requestScope.ptable.product_mainimagepath}" readonly><br>		
				<input type="file" name="uploadfilef" id="uploadfilef">
			</td></tr>
		<tr><th>PRODUCT_RATING</th>
			<td><input type="text" name="product_rating" value="${requestScope.ptable.product_rating}"></td></tr>			

		<tr><th></th>
			<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소">		
			</td>
		</tr>
	  </c:if>
	  <c:if test="${empty requestScope.ptable}">
	  	<tr><td>~~ 수정할 자료가 존재하지 않습니다 ~~</td>
	  	</tr>
	  </c:if>
	</table>
	</form>
	
	&nbsp;<a href="/home">Home</a>&nbsp;
</body>
</html>