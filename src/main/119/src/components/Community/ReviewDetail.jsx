import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Review";
import Star from "./Star";

export default function ReviewDetail() {

    const { id } = useParams();
    const review = mockData.find((item) => item.id === parseInt(id));

    const images = review.reviewImage.map((image) => <img className="contentImage" src={image} />)

    const contents = review.contents.split('\n').map((it) => <p>{it}</p>);

    // 외부 이미지 주소를 배열로 담아 사용할 위치에 인덱스를 입력한다.

    return (
        <div className="ReviewDetail">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div className="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>{review.subject}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{review.username}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{review.createDate.toLocaleDateString()}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{review.hit}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
                            <Link to={`/productdetail/${review.id}`}>{review.productName}</Link>
                        </td>
                        <th scope="row">평점</th>
                        <td>
                            <Star star={review.star} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>

                                {images}

                            </div>
                            <div className="contents">
                                {contents}
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/review"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
