import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({boardsData, onSelectBoard}) => {
  // console.log(props)
  return (
    <>
      <h2>All Boards</h2>
      <ul>
        {boardsData.map((board) => (
          <li key={board.id}> <Board id={board.id} title={board.title} onSelectBoard={onSelectBoard} owner={board.owner}/></li>
        ))}
      </ul>
    </>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onSelectBoard: PropTypes.func.isRequired
};

export default BoardList;
