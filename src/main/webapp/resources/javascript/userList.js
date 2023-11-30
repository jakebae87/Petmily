"use strict"

function UserList() {

	let url="/user/UserList";
	$.ajax({
		type: 'Get',
		url: url,
		success:function(resultPage) {
			document.getElementById('resultArea1').innerHTML=resultPage;
		},
		error:function() {
			document.getElementById('resultArea1').innerHTML="~~ Ajax Error !! ~~";
		}
	}); //ajax
	document.getElementById('resultArea1').innerHTML="";
	}

function UserDelete(id){
   let url = "/user/UserDelete/" + id;
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

   
}
