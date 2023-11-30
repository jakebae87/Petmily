"use strict"

function Joinf() {
	let url = "/user/Joinf";
	axios.get(url
	).then(response => {

		document.getElementById('resultArea1').innerHTML = response.data;
	}).catch(err => {
		alert("** response 실패 => " + err.message);
	});

	document.getElementById('resultArea1').innerHTML = "";
}

function Join() {
    let formData = new FormData(document.getElementById('joinform'));

    let firstPart = document.getElementsByName("user_phone1")[0].value;
    let secondPart = document.getElementsByName("user_phone2")[0].value;
    let thirdPart = document.getElementsByName("user_phone3")[0].value;

    let formattedPhoneNumber = `${firstPart}-${secondPart}-${thirdPart}`;

    formData.append('user_phone', formattedPhoneNumber);


    let url = "/user/join";
    axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    }).then(response => {
    
        alert(`** response.data:${response.data}`);
        location.reload(); // 화면 새로고침
    }).catch(err => {
        if (err.response.status == '502') alert("~~ 입력 오류!! 다시하세요 ~~");
        else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
    });

    document.getElementById('resultArea1').innerHTML = "";
}