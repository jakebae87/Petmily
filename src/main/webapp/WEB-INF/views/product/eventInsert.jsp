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

	<form action="/product/einsert" method="Post" enctype="multipart/form-data">
		<table border="1">
			<tr>
				<th>Insert</th>
				<th>EVENT_NAME</th>
				<th>EVENT_DESCRIPTION</th>
				<th>EVENT_START (NOT NULL)</th>
				<th>EVENT_END (NOT NULL)</th>
				<th>EVENT_IMAGEPATH</th>
			</tr>
			
			<tr>
				<td>
					<input type="submit" value="추가">&nbsp;&nbsp;&nbsp;
					<input type="reset" value="취소">		
				</td>
		    	<td><input type="text" name="event_name" value=""></td>
		    	<td><input type="text" name="event_description" value=""></td>
		    	<td><input type="date" name="event_start" value=""></td>
		    	<td><input type="date" name="event_end" value=""></td>
		    	<td><input type="file" name="uploadfilef" id="uploadfilef"></td>
			</tr>
		</table>
	</form>
</body>
</html>