"use strict"

// 1) Delete inquiry and reload list page
function inquiryDelete(id) {
	let url = "/inquiry/delete/" + id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(
			url
		).then(response => {
			alert(`상품문의가 삭제 완료되었습니다.`);
			inquiryPagingList('/board/inquiryPagingList'); // 목록 새로고침
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// 2) Detail Inquiry
function inquiryDetail(id) {
	const popup = window.open('/board/inquiryDetail?inquiry_id=' + id, 'popup',
		'width=600, height=400');

	const checkPopupClosed = setInterval(function () {
		if (popup.closed) {
			clearInterval(checkPopupClosed);
			inquiryPagingList('/board/inquiryPagingList'); // 목록 새로고침
		}
	}, 1000); // 1초마다 확인
}

// 3) Update Inquiry answer
function updateInquiryAnswer(id) {
	let url = "/inquiry/update";

	if (confirm("수정하시겠습니까?")) {
		axios({
			url: url,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: {
				answer_content: document.getElementById('answer_content').value,
				inquiry_id: id,
			}

		}).then(response => {
			alert(`답변 수정 완료되었습니다.`);
			window.close();
			inquiryPagingList('/board/inquiryPagingList'); // 목록 새로고침
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// ) Show Pagination Notice List
function noticePagingList(url) {
	axios.get(
		url
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}
// ) Show Pagination Inquiry List
function inquiryPagingList(url) {
	axios.get(
		url
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}
// ) Show Pagination Review List
function reviewPagingList(url) {
	axios.get(
		url
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}
// ) Show Pagination Faq List
function faqPagingList(url) {
	axios.get(
		url
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}