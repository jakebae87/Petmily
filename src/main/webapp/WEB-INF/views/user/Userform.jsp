<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/login.js" ></script>
<script src="/resources/javascript/join.js" ></script>
<script src="/resources/javascript/findid.js" ></script>
<script src="/resources/javascript/findpw.js" ></script>
<script src="/resources/javascript/userList.js" ></script>
<script src="/resources/javascript/update.js" ></script>
</head>
<body>
<h2>User form</h2>
<c:if test="${not empty sessionScope.loginID}">
	=> ${sessionScope.loginName}님 안녕하세요 ~~<br> 
</c:if>
<c:if test="${not empty requestScope.message}">
	=> ${requestScope.message}<br>
</c:if>
<hr>
&nbsp;<span class="textlink" onclick="Loginf()">Login</span>&nbsp;
&nbsp;<span class="textlink" onclick="Joinf()">Join</span>&nbsp;
&nbsp;<span class="textlink" onclick="UserList()">userList</span>&nbsp; 
<c:if test="${not empty sessionScope.loginID}">
	&nbsp;<span class="textlink" onclick="userLogout()">Logout</span>&nbsp;
</c:if>
&nbsp;<a href="/home" >[Home]</a>  
<hr>
<div id="resultArea1"></div>
<div id="resultArea2"></div>

</body>
</html>