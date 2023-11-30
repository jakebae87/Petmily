<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product Table Insert</title>
</head>
<body>

	<form action="/product/pinsert" method="Post" enctype="multipart/form-data">
		<table border="1">
			<tr>
				<th>Insert</th>
				<th>PROMOTION_ID (FK)</th>
				<th>PRODUCT_KIND (DEFAULT 'all')</th>
				<th>PRODUCT_CATEGORY (DEFAULT 'all')</th>
				<th>PRODUCT_NAME (NOT NULL)</th>
				<th>PRODUCT_DESCRIPTION</th>
				<th>PRODUCT_PRICE (NOT NULL)</th>
				<th>PRODUCT_STOCK (DEFAULT 100)</th>
				<th>PRODUCT_SALES (DEFAULT 0)</th>
				<th>PRODUCT_MAINIMAGEPATH</th>
				<th>PRODUCT_RATING</th>
			</tr>
			
			<tr>
				<td>
					<input type="submit" value="추가">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소">		
				</td>
			    <td>
			        <select name="promotion_id" id="promotion_id">
			            <option value="10" selected>10: 일반상품</option>
			            <option value="1">1: 프로모션1</option>
			            <option value="2">2: 프로모션2</option>
			            <option value="3">3: 프로모션3</option>
			            <option value="4">4: 프로모션4</option>
			            <option value="5">5: 프로모션5</option>
			        </select>
			    </td>
			    <td>
			        <select name="product_kind" id="product_kind">
			            <option value="all" selected>all</option>
			            <option value="dog">dog</option>
			            <option value="cat">cat</option>
			        </select>
			    </td>
			    <td>
			        <select name="product_category" id="product_category">
			            <option value="all" selected>all</option>
			            <option value="feed">feed</option>
			            <option value="snackNutrient">snackNutrient</option>
			            <option value="hygiene">hygiene</option>
			            <option value="beautyCare">beautyCare</option>
			            <option value="living">living</option>
			            <option value="walkPlay">walkPlay</option>
			            <option value="clothesAccessorie">clothesAccessorie</option>
			        </select>
			    </td>
			    <td><input type="text" name="product_name" value=""></td>
			    <td><input type="text" name="product_description" value=""></td>
			    <td><input type="text" name="product_price" value=""></td>
			    <td><input type="text" name="product_stock" value="100"></td>
			    <td><input type="text" name="product_sales" value="0"></td>
			    <td><input type="file" name="uploadfilef" id="uploadfilef"></td>
			    <td><input type="number" step="0.1" name="product_rating" value="0.0" pattern="\d+(\.\d{1})?"></td>
			</tr>
		</table>
	</form>
</body>
</html>