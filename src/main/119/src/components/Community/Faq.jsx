import { Link } from "react-router-dom";
import SearchedFaq from "./SearchedFaq";

export default function Faq() {
    return (

        <div className="Faq">
            <div className="cateTitle">
                <h1>자주묻는질문</h1>
            </div>
            <div className="commnunityList">
                <ul>
                    <li><Link to="/community/notice">공지사항</Link></li>
                    <li><Link to="/community/inquiry">상품문의</Link></li>
                    <li><Link to="/community/review">상품후기</Link></li>
                    <li><Link to="/community/faq">자주묻는질문</Link></li>
                </ul>
            </div>

            <SearchedFaq />

            <div className="search">
                <form action="#">
                    <div className="searchConditions">
                        <div>
                            <select name="searchPeriod">
                                <option value="all">전체</option>
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="firstQuarter">세달</option>
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
