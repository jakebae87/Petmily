"use strict"

// 1) Save notice and close popup
function noticeInsert() {
	let url = "/notice/insert";

	if (confirm("작성하시겠습니까?")) {
		axios({
			url: url,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: {
				notice_title: document.getElementById('notice_title').value,
				notice_writer: '관리자',
				notice_content: document.getElementById('notice_content').value
			}

		}).then(response => {
			alert(`새로운 공지사항 등록 완료되었습니다.`);
			window.close();
			location.reload();
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// 2) Delete notice and reload list page
function noticeDelete(id) {
	let url = "/notice/delete";

	if (confirm("삭제하시겠습니까?")) {
		axios({
			url: url,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: {
				notice_id: id
			}

		}).then(response => {
			alert(`공지사항 삭제 완료되었습니다.`);
			noticeList();
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}


// 3) Show Notice List
function noticeList() {
	axios.get(
		'/board/noticeList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	});
}


// 4) Insert New Notice
function noticeInsertForm() {
	const popup = window.open('/board/noticeInsertForm', 'popup',
		'width=600, height=400');

	const checkPopupClosed = setInterval(function () {
		if (popup.closed) {
			clearInterval(checkPopupClosed);
			noticeList(); // 목록 새로고침
		}
	}, 1000); // 1초마다 확인
}


// 5) Detail Notice
function noticeDetail(id) {
	const popup = window.open('/board/noticeDetail?notice_id=' + id, 'popup',
		'width=600, height=400');

	const checkPopupClosed = setInterval(function () {
		if (popup.closed) {
			clearInterval(checkPopupClosed);
			noticeList(); // 목록 새로고침
		}
	}, 1000); // 1초마다 확인
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

// ) Show Inquiry List
function inquiryList() {
	axios.get(
		'/board/inquiryList'
	).then(response => {
		document.getElementById('newPage').innerHTML = response.data;
	}).catch(error => {
		alert("error message :" + error.message);
	})
}