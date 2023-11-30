"use strict"



// 프로모션 상품 삭제
function pmpDelete(id) {
	let url = "/product/pmpDelete/" + id;
	axios.delete(url).then(response => {
		alert("** 삭제 성공 => " + response.data);
		// ** 삭제 성공후
		// => Delete -> Deleted, Gray_color, Bold 로
		// => onclick 이벤트 제거
		// => Style 제거 (removeclass, textlink)
		document.getElementById(id).innerHTML="Deleted";
		document.getElementById(id).style.color="Gray";
		document.getElementById(id).style.fontWeight="bold";
		document.getElementById(id).classList.remove('textlink');
		document.getElementById(id).removeAttribute('onclick');
		
	}).catch(err => {
		if(err.response.status=='502') alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
} // pmpDelete


// 상품 삭제
function pDelete(id) {
	let url = "/product/pDelete/" + id;
	axios.delete(url).then(response => {
		alert("** 삭제 성공 => " + response.data);
		document.getElementById(id).innerHTML="Deleted";
		document.getElementById(id).style.color="Gray";
		document.getElementById(id).style.fontWeight="bold";
		document.getElementById(id).classList.remove('textlink');
		document.getElementById(id).removeAttribute('onclick');
		
	}).catch(err => {
		if(err.response.status=='502') alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
} // pDelete


// 상품 이미지 삭제
function piDelete(id) {
	let url = "/product/piDelete/" + id;
	axios.delete(url).then(response => {
		alert("** 삭제 성공 => " + response.data);
		document.getElementById(id).innerHTML="Deleted";
		document.getElementById(id).style.color="Gray";
		document.getElementById(id).style.fontWeight="bold";
		document.getElementById(id).classList.remove('textlink');
		document.getElementById(id).removeAttribute('onclick');
		
	}).catch(err => {
		if(err.response.status=='502') alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
} // piDelete


// 상품 이미지 삭제
function eDelete(id) {
	let url = "/product/eDelete/" + id;
	axios.delete(url).then(response => {
		alert("** 삭제 성공 => " + response.data);
		document.getElementById(id).innerHTML="Deleted";
		document.getElementById(id).style.color="Gray";
		document.getElementById(id).style.fontWeight="bold";
		document.getElementById(id).classList.remove('textlink');
		document.getElementById(id).removeAttribute('onclick');
		
	}).catch(err => {
		if(err.response.status=='502') alert(err.response.data);
		else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
} // eDelete