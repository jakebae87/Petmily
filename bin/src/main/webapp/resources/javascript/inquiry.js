"use strict"

// 1) Delete inquiry and reload list page
function inquiryDelete(id) {
	let url = "/inquiry/delete/" + id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(
			url
		).then(response => {
			alert(`상품문의가 삭제 완료되었습니다.`);
			inquiryList();
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// 2) Show Inquiry List
function inquiryList() {
	axios.get(
		'/board/inquiryList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}


// 3) Detail Inquiry
function inquiryDetail(id) {
	const popup = window.open('/board/inquiryDetail?inquiry_id=' + id, 'popup',
		'width=600, height=400');

	const checkPopupClosed = setInterval(function () {
		if (popup.closed) {
			clearInterval(checkPopupClosed);
			inquiryList(); // 목록 새로고침
		}
	}, 1000); // 1초마다 확인
}

// 4) Update Inquiry answer
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
			inquiryList();
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// ) Show Review List
function reviewList() {
	axios.get(
		'/board/reviewList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}

// ) Show Faq List
function faqList() {
	axios.get(
		'/board/faqList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}


// ) Show Notice List
function noticeList() {
	axios.get(
		'/board/noticeList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}