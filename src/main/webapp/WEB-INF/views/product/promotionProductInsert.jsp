<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Promotion_Product Table Insert</title>
</head>
<body>

	<form action="/product/pmpinsert" method="Post" enctype="multipart/form-data">
		<table border="1">
			<tr>
				<th>Insert</th>
				<th>PROMOTION_ID (PK)</th>
				<th>PROMOTION_NAME</th>
				<th>PROMOTION_IMAGE</th>
				<th>PROMOTION_START (NOT NULL)</th>
				<th>PROMOTION_END (NOT NULL)</th>
				<th>PROMOTION_DISCOUNT (DEFAULT 0)</th>
				<th>PROMOTION_VALUE1</th>
			</tr>
			
			<tr>
				<td>
					<input type="submit" value="추가">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소">		
				</td>
		    	<td><input type="text" name="promotion_id" value=""></td>
		    	<td><input type="text" name="promotion_name" value=""></td>
		    	<td><input type="file" name="uploadfilef" id="uploadfilef"></td>
		    	<td><input type="date" name="promotion_start" value=""></td>
		    	<td><input type="date" name="promotion_end" value=""></td>
		    	<td><input type="text" name="promotion_discount" value="0"></td>
		    	<td><input type="text" name="promotion_value1" value=""></td>
			</tr>
		</table>
	</form>
</body>
</html>