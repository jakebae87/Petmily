<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.time.LocalDateTime" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event Table List</title>
</head>
<body>
	<h2>Event Table List</h2>
	&nbsp;<a class="addData" onclick="eInsertTable()">테이블 데이터 추가</a>&nbsp;
	<hr>

	<table border="1">
		<tr>
			<th>Delete</th>
			<th>Update</th>
			<th>EVENT_ID</th>
			<th>EVENT_NAME</th>
			<th>EVENT_DESCRIPTION</th>
			<th>EVENT_START</th>
			<th>EVENT_END</th>
			<th>EVENT_IMAGEPATH</th>
		</tr>
		
		<c:if test="${not empty requestScope.etable}">
			<c:forEach var="s" items="${requestScope.etable}">
				<tr>
					<td><a onclick="eDelete('${s.event_id}')" id="${s.event_id}">삭제</a></td>
					<td><a onclick="eUpdate('${s.event_id}')" id="${s.event_id}">수정</a></td>
					<td>${s.event_id}</td>
					<td>${s.event_name}</td>
					<td>${s.event_description}</td>
					<td><fmt:formatDate value="${s.event_start}" pattern="yyyy-MM-dd" /></td>
					<td><fmt:formatDate value="${s.event_end}" pattern="yyyy-MM-dd" /></td>
					<td>${s.event_imagepath}</td>
					<%-- <td><img alt="MyImage" src="/resources/uploadImages/${s.event_imagepath}" width="60" height="40"></td> --%>
				</tr>
			</c:forEach>
		</c:if>
		
		<c:if test="${empty requestScope.etable}">
			<tr>
				<td colspan="7">출력할 Data가 1건도 없습니다 ~~</td>
			</tr>
		</c:if>
	</table>
	<hr>
</body>
</html>