"use strict"

function Findidf() {

	let url="/user/Findidf";
		axios.get(url
	).then(response => {

		document.getElementById('resultArea1').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}
function findid() {
    let url = "/user/findid";
    const data = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value
    };

    axios.post(url, data)
        .then(response => {
            if (response.data && response.data.user_id) {
                alert(`찾은 아이디: ${response.data.user_id}`);
            } else {
                alert('해당 정보로 아이디를 찾을 수 없습니다.');
            }
        })
        .catch(error => {
            console.error('아이디 찾기 실패:', error);
            alert('아이디를 찾을 수 없습니다.');
        });
}