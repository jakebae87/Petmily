"use strict"


function pTableListf(){
	let resultHtml =
	`<h3>PRODUCT Table List</h3>
	&nbsp;<a onclick="pmProductf()">PROMOTION_PRODUCT</a>&nbsp;
	&nbsp;<a onclick="productf()">PRODUCT</a>&nbsp;
	&nbsp;<a onclick="pImagef()">PRODUCT_IMAGE</a>&nbsp;
	&nbsp;<a onclick="eventf()">EVENT</a>&nbsp;
	`;
	document.getElementById('pTableListArea').innerHTML=resultHtml;
	document.getElementById('newPage').innerHTML="";
} // pTableListf


// 프로모션 상품 테이블 리스트 온클릭
function pmProductf() {
	let url = "/product/pmProductList";
	
	axios.get(
		url
	).then(response => {
		console.log("** pmProductf response 성공 **");
		document.getElementById('resultArea1').innerHTML=response.data;
	}).catch(err => {
		alert("** pmProductf response 실패 => " + err.message);
	});
	
	document.getElementById('insertTableArea').innerHTML="";
	
} // pmProductf


// 상품 테이블 리스트 온클릭
function productf() {
	let url = "/product/productList";
	
	axios.get(
		url
	).then(response => {
		console.log("** productf response 성공 **");
		document.getElementById('resultArea1').innerHTML=response.data;
	}).catch(err => {
		alert("** productf response 실패 => " + err.message);
	});
	
	document.getElementById('insertTableArea').innerHTML="";
	
} // productf


// 상품 이미지 테이블 리스트 온클릭
function pImagef() {
	let url = "/product/pImageList";
	
	axios.get(
		url
	).then(response => {
		console.log("** pImagef response 성공 **");
		document.getElementById('resultArea1').innerHTML=response.data;
	}).catch(err => {
		alert("** pImagef response 실패 => " + err.message);
	});
	
	document.getElementById('insertTableArea').innerHTML="";
	
} // pImagef


// 이벤트 테이블 온클릭
function eventf() {
	let url = "/product/eventList";
	
	axios.get(
		url
	).then(response => {
		console.log("** eventf response 성공 **");
		document.getElementById('resultArea1').innerHTML=response.data;
	}).catch(err => {
		alert("** eventf response 실패 => " + err.message);
	});
	
	document.getElementById('insertTableArea').innerHTML="";
	
} // eventf


// 하나의 상품 아이디에 대한 상품 이미지 테이블 리스트
function showImages(id) {
	let url = "/product/pImageList/" + id;
	
	axios.get(
		url
	).then(response => {
		console.log("** showImages response 성공 **");
		document.getElementById('resultArea1').innerHTML=response.data;
	}).catch(err => {
		alert("** showImages response 실패 => " + err.message);
	});
	
	document.getElementById('insertTableArea').innerHTML="";
	
} // showImages