import axios from 'axios';
import React from 'react';

function Popup({ showPopup, closePopup, data }) {

  const replySubmit = async () => {
    let url = '/review/reply/insert';

    await axios({
      url: url,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        review_id: data,
        // reply_writer: document.getElementById('reply_writer').value,
        reply_content: document.getElementById('reply_content').value
      }
    }).then(response => {
        alert(`댓글 등록 완료되었습니다.`);
        closePopup();
        window.location.reload();
      }
    ).catch(error => {
      console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
    });
  }

  return (
    <>
      {showPopup && (
        <div style={{ marginBottom: '15px' }}>
          <table style={{ width: '100%' }}>
            <tr>
              <div style={{ width: '15%' }}>
                <th>작성자</th>
                <td>더미맨</td>
              </div>
              <div style={{ width: '75%' }}>
                <th>내용</th>
                <td><input id='reply_content' style={{ width: '550px',height:'30px' }} type='text'/></td>
              </div>
              <div>
                <input onClick={replySubmit} type='button' value='등록'></input>
              </div>
            </tr>
          </table>
        </div>
      )}
    </>
  );
}

export default Popup;