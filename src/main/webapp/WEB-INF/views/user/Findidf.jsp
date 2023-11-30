<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/findid.js"></script>
</head>
<body>
<form id="findidform">
<table>
	<tr height="40"><td><label for="name">이름</label></td>
		<td><input type="text" id="name" name="user_name"></td>
	</tr>
	<tr height="40"><td><label for="email">Email</label></td>
		<td><input type="email" id="email" name="user_email"></td>
	</tr>
	<tr height="40"><td></td>
		<td><span class="textlink" onclick="findid()">아이디찾기</span>&nbsp;&nbsp;
			<input type="reset" value="취소">
		</td>
	</tr>
</table>
</form>

</body>
</html>