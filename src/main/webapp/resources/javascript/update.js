"use strict"

function Userupdate(id) {
    let url = "/user/Updatef/" + id;

    axios.get(url)
        .then(response => {
            console.log("** Update response 성공 **");
           
             document.getElementById('resultArea1').innerHTML = response.data;
        })
        .catch(err => {
            alert("** Update response 실패 => " + err.message);
        });

    document.getElementById('resultArea1').innerHTML = "";
}
