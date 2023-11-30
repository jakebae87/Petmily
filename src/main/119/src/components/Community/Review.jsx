import { Link } from "react-router-dom";
import SearchedReview from "./SearchedReview";

export default function Review() {
    return (

        <div className="Review">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>
            <div className="commnunityList">
                <div>
                    <ul>
                        <li><Link to="/community/notice">공지사항</Link></li>
                        <li><Link to="/community/inquiry">상품문의</Link></li>
                        <li><Link to="/community/review">상품후기</Link></li>
                        <li><Link to="/community/faq">자주묻는질문</Link></li>
                    </ul>
                </div>
            </div>

            <div className="boardList">
                <table>
                    <colgroup>
                        <col className="attr1" />
                        <col className="attr2" />
                        <col className="attr3" />
                        <col className="attr4" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <th>평점</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>

                    <SearchedReview />

                </table>
            </div>

            <div className="search">
                <form action="#">
                    <div className="searchConditions">
                        <div>
                            <select name="searchSelections">
                                <option value="newest">최신순</option>
                                <option value="starRating">별점순</option>
                                <option value="recommendation ">추천순</option>
                            </select>
                            <select name="searchCriteria">
                                <option value="subject">제목</option>
                                <option value="content">내용</option>
                                <option value="writer">글쓴이</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchInput">
                        <div>
                            <input className="searchWord" name="searchWord" type="text" />
                            <input type="submit" value="검색" />
                        </div>
                        <div className="board_write">
                            <a><Link to="/board/review">글쓰기</Link></a>
                        </div>
                    </div>
                </form>
            </div>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}
