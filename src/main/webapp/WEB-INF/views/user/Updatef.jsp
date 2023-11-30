<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/resources/javascript/jquery-3.2.1.min.js"></script>
<script src="/resources/javascript/update.js"></script>

</head>
<body>
	<form action="/user/Userupdate" method="Post" enctype="multipart/form-data"
		id="updateform">
		<table>
			<tr height="40">
				<th bgcolor="aqua">I D</th>
				<td><input type="text" name="user_id" id="id"
					placeholder="영어, 10글자이내" size="20"
					value="${requestScope.banana.user_id}" readOnly> <br> <span
					id="iMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">Password</th>
				<td><input type="password" name="user_password" id="password"
					placeholder="영어, 숫자, 특수문자" size="20"
					value="${requestScope.banana.user_password}"><br> <span
					id="pMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">Pw 확인</th>
				<td><input type="password" id="password2" placeholder="재입력 확인"><br>
					<span id="p2Message" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">Name</th>
				<td><input type="text" name="user_name" id="name"
					placeholder="한글 또는 영어" size="20"
					value="${requestScope.banana.user_name}"><br> <span
					id="nMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">email</th>
				<td><input type="text" name="user_email" id="email" size="20"
				value="${requestScope.banana.user_email}"><br>
					<span id="nMessage" class="eMessage"></span></td>
			</tr>

			<tr height="40">
				<th bgcolor="aqua">Birthday</th>
				<td><input type="date" name="user_birthday" id="birthday"
					size="20" value="${requestScope.banana.user_birthday}"><br>
					<span id="bMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">phone</th>
				<td>
        <input type="text" className="number" name="user_phone" size="20" value="${requestScope.banana.user_phone}"   />
<!--         <input id="contact" type="text" className="number" name="user_phone2" size="1" minLength="3" maxLength="4" required  /> -->
<!--         <input type="text" className="number" name="user_phone3" size="1" minLength="3" maxLength="4" required  /> -->
    </td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">zipcode</th>
				<td><input type="text" name="zipcode" id="zipcode"
					placeholder="우편변호" size="20"><br> <span id="nMessage"
					class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">addr</th>
				<td><input type="text" name="addr" id="addr" placeholder="주소"
					size="20"><br> <span id="nMessage" class="eMessage"></span></td>
			</tr>
			<tr height="40">
				<th bgcolor="aqua">addr_detail</th>
				<td><input type="text" name="addr_detail" id="addr_detail"
					placeholder="상세주소" size="20"><br> <span id="nMessage"
					class="eMessage"></span></td>
			</tr>


			<tr height="40"><th></th>
			<td><input type="submit" value="수정">&nbsp;&nbsp;&nbsp;
				<input type="reset" value="취소">		
			</td>
		</tr>
		</table>
	</form>
</body>
</html>