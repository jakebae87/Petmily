"use strict"

function Findpwf() {

	let url="/user/Findpwf";
		axios.get(url
	).then(response => {

		document.getElementById('resultArea1').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
	}

function findpw() {
    let url = "/user/findpw";
    const data = {
        user_id: document.getElementById('id').value,
        user_email: document.getElementById('email').value
    };

    axios.post(url, data)
        .then(response => {
            if (response.data && response.data.user_password) {
                alert(`찾은 패스워드: ${response.data.user_password}`);
            } else {
                alert('해당 정보로 패스워드를 찾을 수 없습니다.');
            }
        })
        .catch(error => {
            console.error('패스워드 찾기 실패:', error);
            alert('패스워드를 찾을 수 없습니다.');
        });
}

/*function newpwf() {

	let url="/user/newpwf";
		axios.get(url
	).then(response => {

		document.getElementById('resultArea2').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea2').innerHTML = "";
	}
	
function changePassword() {
    const currentPassword = document.getElementById('password1').value;
    const newPassword = document.getElementById('newpw').value;
    const confirmPassword = document.getElementById('cpassword2').value;
	
	
	console.log("currentPassword="+currentPassword);
	console.log("newPassword="+newPassword);
	console.log("confirmPassword="+confirmPassword);
    if (newPassword !== confirmPassword) {
        alert('새 비밀번호와 확인용 비밀번호가 일치하지 않습니다.');
        return;
    }

    axios.post('/user/changePassword', { currentPassword, newPassword })
        .then(response => {
            alert('비밀번호가 성공적으로 변경되었습니다.');
            location.reload(); // 페이지 새로고침
        })
        .catch(error => {
            console.error('비밀번호 변경 실패:', error);
            alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        });
}*/