"use strict"

// 1) Delete review and reload list page
function reviewDelete(id) {
	let url = "/review/delete/" + id;

	if (confirm("삭제하시겠습니까?")) {
		axios.delete(
			url
		).then(response => {
			alert(`상품후기가 삭제 완료되었습니다.`);
			reviewList();
		}).catch(error => {
			console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
		});
	}
}

// 2) Detail Review
function reviewDetail(id) {
	const popup = window.open('/board/reviewDetail?review_id=' + id, 'popup',
		'width=600, height=600');

	const checkPopupClosed = setInterval(function () {
		if (popup.closed) {
			clearInterval(checkPopupClosed);
			reviewList(); // 목록 새로고침
		}
	}, 1000); // 1초마다 확인
}

// 3) Update Review
function updateReview() {
	let formData = new FormData(document.getElementById('updateReviewForm'));

	if (confirm("수정하시겠습니까?")) {
		axios.post(
			'/review/update',
			formData,
			{
				headers: { 'Content-Type': 'multipart/form-data' }
			}).then(response => {
				alert(`상품후기 수정 완료되었습니다.`);
				window.close();
				reviewList();
			}).catch(error => {
				if (error.response.status == '502') alert("입력 오류입니다.")
				else alert("시스템 오류입니다." + error.message);
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