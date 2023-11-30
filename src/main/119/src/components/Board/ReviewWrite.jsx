import { Link } from "react-router-dom";
import { useState } from "react";
import Star from "../Board/Star";

export default function ReviewWrite() {

    // 상품후기의 별점 수 받기 시작
    const [score, setScore] = useState(0);

    const onChangeScore = (data) => {
        setScore(data);
    }
    // 상품후기의 별점 수 받기 끝

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <select name="selectSubject" onchange="window.open(value,'_self');">
                        <option value="./writeInquiry.html">상품후기</option>
                        <option value="./writeInquiry.html">상품문의</option>
                    </select>

                    <div className="productRating">
                        <Star onChangeScore={onChangeScore} />
                    </div>

                    <div id="registButton"> {/* form 태그의 등록버튼을 form태그 외부로 빼서 사용 */}
                        <input type="submit" form="submitBoard" value="등록" />
                    </div>
                </div>

                <div>
                    <form action="#" id="submitBoard">
                        <input id="title" name="title" type="text" placeholder="제목을 입력하세요." maxlength="100" required />

                        <input type="file" id="fileUpload" name="fileUpload" multiple
                            accept="image/gif,image/jpeg,image/png" />

                        <input type="hidden" id="star" name="star" value={score} />

                        <textarea id="contents" name="contents" rows="30" cols="100"></textarea>
                    </form>
                </div>
            </div>

            <div id="bottomBoard">
                <Link to="/community/review"><input type="button" value="목록" /></Link>
            </div>
        </div>
    )
}