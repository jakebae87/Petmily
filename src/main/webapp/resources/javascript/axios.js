"use strict"

// 1) Save notice and close popup
function saveAndClose() {
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
			에러 상태코드 = ${error.response.status},
			에러 메세지 = ${error.message}`);
		});
	}
}






