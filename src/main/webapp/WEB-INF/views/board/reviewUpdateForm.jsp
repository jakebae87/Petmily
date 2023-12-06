<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<title>Board List</title>
<link rel="stylesheet" type="text/css" href="/resources/style/style.css" />
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/javascript/review.js"></script>
</head>
<body>
	<!-- -------------비동기 페이지------------- -->
	<div id="newPage">
		<h2>[상품후기 수정페이지]</h2>
		<button id="crud" onclick="history.back()">뒤로</button>
		<button id="crud" onclick="top.window.close()">창닫기</button>
		<br> <br>
		<form id="updateReviewForm" enctype="multipart/form-data">
			<table id="boardDetail">
				<tr>
					<th>글제목</th>
					<td>
					<input type="text" name="review_title" value="${requestScope.review.review_title}" />
					<input type="hidden" name="review_id" value="${requestScope.review.review_id}" />
					</td>
				</tr>
				<tr>
					<th>작성자</th>
					<td><input type="text" name="review_writer"
						value="${requestScope.review.review_writer}" readonly="readonly" /></td>
				</tr>
				<tr>
					<th>평점</th>
					<td>
						<select name="review_point">
							<option value="1" <c:if test="${requestScope.review.review_point eq '1' }">selected</c:if>>1</option>
							<option value="2" <c:if test="${requestScope.review.review_point eq '2' }">selected</c:if>>2</option>
							<option value="3" <c:if test="${requestScope.review.review_point eq '3' }">selected</c:if>>3</option>
							<option value="4" <c:if test="${requestScope.review.review_point eq '4' }">selected</c:if>>4</option>
							<option value="5" <c:if test="${requestScope.review.review_point eq '5' }">selected</c:if>>5</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>글내용</th>
					<td><input type="text" name="review_content"
						value="${requestScope.review.review_content}" /></td>
				</tr>
				<tr>
					<th>후기 이미지1</th>
					<td>
						<img alt="사진1" class="selectImage1" src="/resources/uploadImages/${requestScope.review.review_image1 }"  width="80" height="100">
						<input type="hidden" name="review_image1" value="${requestScope.review.review_image1 }"><br>
						<input type="file" name="uploadfile1" id="uploadfile1" size="20">
					</td>
				</tr>
				<tr>
					<th>후기 이미지1</th>
					<td>
						<img alt="사진2" class="selectImage2" src="/resources/uploadImages/${requestScope.review.review_image2 }"  width="80" height="100">
						<input type="hidden" name="review_image2" value="${requestScope.review.review_image2 }"><br>
						<input type="file" name="uploadfile2" id="uploadfile2" size="20">
					</td>
				</tr>
			</table>
		</form>
		<button id="crud"
			onclick="updateReview()">확인</button>
	</div>

	<!-- -------------비동기 페이지 끝------------- -->

</body>
<script type="text/javascript">
document.getElementById('uploadfile1').onchange = function (e) {
	if (this.files && this.files[0]) {
		let reader = new FileReader;
		reader.readAsDataURL(this.files[0]);
		reader.onload = function (e) { //img src 변경
			document.getElementsByClassName("selectImage1")[0].src = e.target.result;
		}
	}
};
document.getElementById('uploadfile2').onchange = function (e) {
	if (this.files && this.files[0]) {
		let reader = new FileReader;
		reader.readAsDataURL(this.files[0]);
		reader.onload = function (e) { //img src 변경
			document.getElementsByClassName("selectImage2")[0].src = e.target.result;
		}
	}
};
</script>
</html>
