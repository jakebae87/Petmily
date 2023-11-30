import { Link } from "react-router-dom";

export default function InquiryWrite() {
    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div>

                <div className="selectStarRegist">
                    <select name="selectSubject" onChange="window.open(value,'_self');">
                        <option value="./writeInquiry.html">상품문의</option>
                        <option value="./writeReview.html">상품후기</option>
                    </select>

                    <div id="registButton"> {/* form 태그의 등록버튼을 form태그 외부로 빼서 사용 */}
                        <input type="submit" form="submitBoard" value="등록" />
                    </div>
                </div>

                <div>
                    <form action="#" id="submitBoard" method="get">
                        <input id="title" name="title" type="text" placeholder="제목을 입력하세요." maxlength="100" required />

                        <input type="file" id="fileUpload" name="fileUpload" multiple
                            accept="image/gif,image/jpeg,image/png" />

                        <textarea id="contents" name="contents" rows="30" cols="100"></textarea>
                    </form>
                </div>

            </div>

            <div id="bottomBoard">
                <Link to="/community/inquiry"><input type="button" value="목록" /></Link>
            </div>
        </div>
    )
}
