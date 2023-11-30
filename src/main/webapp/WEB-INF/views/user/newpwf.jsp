<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>** SpringBoot Password Update **</title>
<link rel="stylesheet" type="text/css" href="/resources/javascript/myStyle.css" >
<script src="/resources/javascript/findpw.js"></script>
</head>
<body>
<b>=> 새로운 Password 를 입력 하세요 ~~</b><br><br>
<div>
    <label for="password1">현재 비밀번호:</label>
    <input type="password" id="password1" name="currentPassword">
</div>
<div>
    <label for="newpw">새 비밀번호:</label>
    <input type="password" id="newpw" name="newPassword">
</div>
<div>
    <label for="cpassword2">새 비밀번호 확인:</label>
    <input type="password" id="cpassword2" name="confirmPassword">
</div>
<div>
    <span class="textlink" onclick="changePassword()">비밀번호 변경</span>
</div>


</body>
</html>