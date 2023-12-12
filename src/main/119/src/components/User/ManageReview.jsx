import "./ManageBoard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Star from "../Community/Star";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <a
        key={i}
        href="#"
        className={i === currentPage ? "active" : ""}
        onClick={() => onPageChange(i)}
      >
        {i}
      </a>
    );
  }

  return (
    <div className="paginations">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {pages}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

const ManageReview = ({ board, deleteBoard }) => {
  const [review, setReview] = useState([]);
  const [searchPeriod, setSearchPeriod] = useState("all");
  const [searchCriteria, setSearchCriteria] = useState("subject");
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function reviewDelete(id) {
    let url = "/review/delete/" + id;
    axios
      .delete(url)
      .then((response) => {
        alert("상품후기가 삭제 되었습니다.");
        // navigate("/user/mypage/manageBoard/review");
        window.location.reload();
      })
      .catch((error) => {
        console.error(`에러 응답 = ${error.response},
        error status = ${error.response.status},
        error message = ${error.message}`);
      });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setReview([]); // 검색 결과 초기화
    setSearchPeriod(e.target.searchPeriod.value);
    setSearchCriteria(e.target.searchCriteria.value);
    setSearchWord(e.target.searchWord.value); // 검색어 업데이트
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/review/list", {
          params: {
            searchPeriod,
            searchCriteria,
            searchWord,
          },
        });
        setReview(response.data);
      } catch (error) {
        alert(`자료가 없습니다.`);
      }
    };
    fetchData();
  }, [searchPeriod, searchCriteria, searchWord]);

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return review.slice(startIndex, endIndex);
  };

  return (
    <div className="Review">
      <div className="cateTitle">
        <h1>상품후기</h1>
      </div>
      <div className="communityList">
        <div>
          <ul>
            <li>
              <Link to="/user/mypage/manageBoard/inquiry">상품문의</Link>
            </li>
            <li>
              <Link to="/user/mypage/manageboard/review">상품후기</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="boards">
        <table>
          <colgroup>
            <col style={{ width: 100 }} />
            <col style={{ width: 280 }} />
            <col style={{ width: "auto" }} />
            <col style={{ width: 150 }} />
            <col style={{ width: 120 }} />
            <col style={{ width: 130 }} />
            <col style={{ width: 130 }} />
          </colgroup>
          <tr>
            <th>제목</th>
            <th>제품</th>
            <th>평점</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>

          {paginatedData().map((r) => (
            <tr key={r.inquiry_id}>
              <td style={{ textAlign: "center" }}>
                <Link to={`./${r.review_id}`}>{r.review_title}</Link>
              </td>
              <td>
                <Link to={`/products/productdetail/${r.product_id}`}>
                  <img
                    style={{ width: "180px", height: "150px" }}
                    src={
                      process.env.PUBLIC_URL +
                      `/Images/products/${r.product_mainimagepath}`
                    }
                    alt={r.product_name}
                  />
                </Link>
              </td>
              <td>
                <Star star={r.review_point} />
              </td>
              <td>{r.review_writer}</td>
              <td>{r.review_regdate}</td>
              <td>
                <Link to={`/board/inquiryUpdate/${r.inquiry_id}`}>
                  <input
                    type="button"
                    id="updateButton"
                    name="updateButton"
                    value="수정"
                  />
                </Link>
              </td>
              <td>
                <input
                  onClick={() => {
                    reviewDelete(r.inquiry_id);
                  }}
                  type="button"
                  id="deleteButton"
                  name="deleteButton"
                  value="삭제"
                />
              </td>
            </tr>
          ))}
        </table>

        <Pagination
          totalPages={Math.ceil(review.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageReview;
