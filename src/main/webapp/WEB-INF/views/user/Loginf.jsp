<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/login.js"></script>
</head>
<body>

<table>
	<tr height="40"><td><label for="id">id</label></td>
		<td><input type="text" id="id" name="user_id"></td>
	</tr>
	<tr height="40"><td><label for="password">password</label></td>
		<td><input type="password" id="password" name="user_password"></td>
	</tr>
	<tr height="40"><td></td>
		<td><span class="textlink" onclick="Login()">로그인</span>
			<input type="reset" value="취소">
		</td>
	</tr>
</table>


<ul>

<li><a class="textlink" onclick="Findid()">아이디 찾기</a></li>
<li><a class="textlink" onclick="Findpw()">비밀번호 찾기</a></li>
<li><a class="textlink" onclick="Joinf()">회원가입</a></li>
</ul>

</body>
</html>