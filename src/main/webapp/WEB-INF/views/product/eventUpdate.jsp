<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event Table Update</title>
</head>
<body>
	<h2>Event Table Update</h2>
	<hr>

	<!-- <form action="/product/productupdate" method="Post"> -->
	<form action="/product/eupdate" method="Post" enctype="multipart/form-data">
	<table>
	  <c:if test="${not empty requestScope.etable}">
		<tr><th>EVENT_ID</th>
			<td><input type="text" name="event_id" value="${requestScope.etable.event_id}" readonly></td></tr>
		<tr><th>EVENT_NAME</th>
			<td><input type="text" name="event_name" value="${requestScope.etable.event_name}"></td></tr>
		<tr><th>EVENT_DESCRIPTION</th>
			<td><input type="text" name="event_description" value="${requestScope.etable.event_description}"></td></tr>
		<tr><th>EVENT_START</th>
			<td><input type="date" name="event_start" value='<fmt:formatDate value="${requestScope.etable.event_start}" pattern="yyyy-MM-dd" />'></td></tr>
		<tr><th>EVENT_END</th>
			<td><input type="date" name="event_end" value='<fmt:formatDate value="${requestScope.etable.event_end}" pattern="yyyy-MM-dd" />'></td></tr>
		<%-- <tr><th>EVENT_IMAGEPATH</th>
			<td><input type="text" name="event_imagepath" value="${requestScope.etable.event_imagepath}"></td></tr> --%>
		<tr><th>EVENT_IMAGEPATH</th>
			<td>
				<input type="hidden" name="event_imagepath" value="${requestScope.etable.event_imagepath}" readonly><br>		
				<input type="file" name="uploadfilef" id="uploadfilef">
			</td></tr>
		<tr><th></th>
			<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소">		
			</td>
		</tr>
	  </c:if>
	  <c:if test="${empty requestScope.etable}">
	  	<tr><td>~~ 수정할 자료가 존재하지 않습니다 ~~</td>
	  	</tr>
	  </c:if>
	</table>
	</form>
	<hr>
</body>
</html>