"use strict"

// OrderProductList(주문내역)
function orderList() {
	let url = "/cart/orderProduct";
	axios.get(url
	).then(response => {
		alert("** response 성공");
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}

// OrderProductInsert(주문내역 추가페이지) Get
function orderProductInsertf() {
	let url = "/cart/orderProductInsert";
	axios.get(url
	).then(response => {
		alert("** response 성공");
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}

// OrderProductInsert(주문내역 추가페이지) Post
function orderProductInsert() {
	// 1) Data 준비
	// => JS의 내장객체 FormData에 담아서 전송
	let formData = new FormData(document.getElementById('orderproductform'));
	
	// axios 요청
	let url="cart/orderProductInsertP";
	
	axios.post(url, formData,
				{headers:{"Content-Type":"multipart/form-data"}
	}).then( response => {
				alert(`** response.data:${response.data}`);
				// 주문내역 리스트로 이동
				orderList();
	}).catch( err => {
				if ( err.response.status=='502' ) alert("~~ 입력 오류!! 다시하세요 ~~");  				
				else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
	
	document.getElementById('resultArea2').innerHTML="";
}

// OrderProductDetail(주문내역 상세)
function opDetail(order_key) {
	let url = "/cart/opdetail?jCode=U&order_key=" + order_key;

	axios.get(url
	).then(response => {
		alert("** response 성공");
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}

// OrderProductInsert(주문내역 추가페이지) Post
function orderProductUpdate() {
	// 1) Data 준비
	// => JS의 내장객체 FormData에 담아서 전송
	let formData = new FormData(document.getElementById('orderproductUpdateform'));
	
	// axios 요청
	let url="cart/orderProductUpdateP";
	
	axios.post(url, formData,
				{headers:{"Content-Type":"multipart/form-data"}
	}).then( response => {
				alert(`** response.data:${response.data}`);
				// 주문내역 리스트로 이동
				orderList();
	}).catch( err => {
				if ( err.response.status=='502' ) alert("~~ 입력 오류!! 다시하세요 ~~");  				
				else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
	
	document.getElementById('resultArea2').innerHTML="";
}

// delete(주문내역 삭제)
function opDelete(order_key) {
	let url = "/cart/opdelete/" + order_key;
	axios.delete(url).then(response => {
		alert(response.data);
		// 주문내역 리스트로 이동
		orderList();
	}).catch(err => {
		if (err.response.status == '502') alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
}

// pagination
function orderProduct(a) {
	let url = "/cart/orderProduct" + a;
	axios.get(url
	).then(response => {
		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}