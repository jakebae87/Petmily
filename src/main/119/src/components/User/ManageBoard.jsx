import "./ManageBoard.css";
import mockData from "../MockData/MockData_Inquiry";
import { useState } from "react";
import ManageBoardList from "./ManageBoardList";

export default function ManageBoard() {
  const [board, setBoard] = useState(mockData);

  // 게시글 삭제
  const deleteBoard = (it) => {
      setBoard(board.filter((board) => board.id !== it.id));
  };
  
  return (
    <div className="ManageBoard">
      <div className="cateTitle">
        <h1>게시글 관리</h1>
      </div>
      <div className="myBoardList">
        <table>
          <colgroup>
            <col className="boardattr1" />
            <col className="boardattr2" />
            <col className="boardattr3" />
            <col className="boardattr4" />
          </colgroup>
          <tr>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
            <th>삭제</th>
          </tr>
          <ManageBoardList
            board={board}
            deleteBoard={deleteBoard}
          />
        </table>
      </div>

      <div className="search">
        <form action="#">
          <div class="searchConditions">
            <div>
              <select name="searchPeriod">
                <option value="week">일주일</option>
                <option value="month">한달</option>
                <option value="firstQuarter">세달</option>
                <option value="all">전체</option>
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
              <input type="text" />
              <input type="submit" value="검색" />
            </div>
          </div>
        </form>
      </div>

      <div className="pagination">
        <a href="">&laquo;</a>
        <a href=""><strong>1</strong></a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">&raquo;</a>
      </div>
    </div>
  );
}
