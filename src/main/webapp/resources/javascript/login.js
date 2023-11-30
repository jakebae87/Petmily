"use strict"

function Loginf() {

	let url="/user/Loginf";
	axios.get(url
	).then(response => {

		document.getElementById('resultArea1').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
}
	
function Login() {
    let url = "/user/Login";
    
    const data = {
        user_id: document.getElementById('id').value,
        user_password: document.getElementById('password').value
    };

    axios.post(url, data, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            alert(`** response : id=${response.data.user_id}, password=${response.data.user_password}`);
            location.reload();
        })
        .catch(err => {
            console.error(`** err.response=${err.response}, err.response.status=${err.response.status}, err.message=${err.message}`);
            if (err.response.status == 401) {
                alert("~~ id 또는 password 오류!! 다시하세요 ~~");
            } else {
                alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
            }
        });
}

function userLogout() {
let url = "/user/logout";
    axios.get(url) // 로그아웃을 처리하는 엔드포인트로 요청을 보냅니다.
        .then(response => {
            alert('로그아웃 되었습니다.'); // 로그아웃 성공 시 알림을 표시합니다.
            location.reload(); // 페이지를 새로고침합니다.
        })
        .catch(error => {
            console.error('로그아웃 실패:', error); // 로그아웃 실패 시 에러를 콘솔에 출력합니다.
        });
}
