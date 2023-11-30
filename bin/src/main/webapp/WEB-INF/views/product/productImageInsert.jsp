<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Product_Image Table Insert</title>
</head>
<body>

	<form action="/product/piinsert" method="Post" enctype="multipart/form-data">
		<table border="1">
			<tr bgcolor="DeepSkyBlue">
				<th>Insert</th>
				<th>PRODUCT_ID (FK)</th>
				<th>PRODUCT_IMAGE</th>
				<th>PRODUCT_VALUE1</th>
			</tr>
			
			<tr>
				<td>
					<input type="submit" value="추가">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소">		
				</td>
		    	<td><input type="text" name="product_id" value=""></td>
		    	<td><input type="file" name="uploadfilef" id="uploadfilef"></td>
		    	<td>
		    		<select name="product_value1" id="product_value1">
			            <option value="10">10: 기본 상세이미지</option>
			            <option value="1">1: 기타 이미지1</option>
			            <option value="2">2: 기타 이미지2</option>
			            <option value="3">3: 기타 이미지3</option>
			            <option value="4">4: 기타 이미지4</option>
			            <option value="5">5: 기타 이미지5</option>
			        </select>
		        </td>
			</tr>
		</table>
	</form>
	<hr>
</body>
</html>