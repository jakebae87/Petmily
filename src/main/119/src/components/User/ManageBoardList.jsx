import "./ManageBoard.css";

const ManageBoardList = ({ board, deleteBoard }) => {
  return (
    <tbody>
      {board.map((item) => (
        <tr>
          <td>{item.subject}</td>
          <td>은**</td>
          <td>{item.createDate.toLocaleDateString()}</td>
          <td><button class="deleteBoard" onClick={() => { deleteBoard(item); }} >삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ManageBoardList;
