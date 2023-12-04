<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/findpw.js"></script>
</head>
<body>

<table>
	<tr height="40"><td><label for="id">ID</label></td>
		<td><input type="text" id="id" name="id"></td>
	</tr>
	<tr height="40"><td><label for="email">Email</label></td>
		<td><input type="email" id="email" name="email"></td>
	</tr>
	<tr height="40"><td></td>
		<td><span class="textlink" onclick="findpw()">패스워드찾기</span>&nbsp;&nbsp;
			<input type="reset" value="취소">
		</td>
	</tr>
</table>


</body>
</html>