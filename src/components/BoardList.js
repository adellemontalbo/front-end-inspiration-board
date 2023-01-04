import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = (props) => {
  return (
    <>
      <h2>All Boards</h2>
      <ul>
        {props.boardsData.map((board) => (
          <Board id={board.id} title={board.title} />
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
};

export default BoardList;
