"use strict"

// CartForm(장바구니, 주문, 주문상세)
function cartForm() {
	let resultHtml =
	`&nbsp;
	<span class="textlink" onclick="cartInsertf()">CartInsert</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="cartList()">CartList</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderProductInsertf()">OrderInsert</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderList()">OrderList</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderDetailInsertf()">OrderDetailInsert</span>&nbsp;
	&nbsp;
	<span class="textlink" onclick="orderDetailList()">OrderDetail</span>&nbsp;
	&nbsp;
	<a href="/home">[Home]</a>
	`;
	document.getElementById('resultArea1').innerHTML = resultHtml;
}

// CartList(장바구니)
function cartList() {
	let url = "/cart/cartList";
	axios.get(url
	).then(response => {
		alert("** response 성공");
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}

// CartInsert(장바구니 추가페이지) Get
function cartInsertf() {
	let url = "/cart/cartInsert";
	axios.get(url
	).then(response => {
		alert("** response 성공");
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}

// CartInsert(장바구니 추가페이지) Post
function cartInsert() {
	// 1) Data 준비
	// => JS의 내장객체 FormData에 담아서 전송
	let formData = new FormData(document.getElementById('cartform'));
	
	// axios 요청
	let url="cart/cartInsertP";
	
	axios.post(url, formData,
				{headers:{"Content-Type":"multipart/form-data"}
	}).then( response => {
				alert(`** response.data:${response.data}`);
				// 장바구니 리스트로 이동
				cartList();
	}).catch( err => {
				if ( err.response.status=='502' ) alert("~~ 입력 오류!! 다시하세요 ~~");  				
				else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
	
	document.getElementById('resultArea2').innerHTML="";
}

// cartDelete(장바구니 삭제)
function cDelete(user_id, product_id) {
	let url = "/cart/cdelete/" + user_id + "/" + product_id;
	axios.delete(url).then(response => {
		alert(response.data);
		// 장바구니 리스트로 이동
		cartList();
	}).catch(err => {
		if (err.response.status) alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
}

// pagination
function cartPageList(a) {
	let url = "/cart/cartList" + a;
	axios.get(url
	).then(response => {
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}