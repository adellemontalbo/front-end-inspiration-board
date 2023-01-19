import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, owner, cards, onSelectBoard, currentBoardId }) => {
  const selectedBoard =
    id === currentBoardId ? "selected-board" : "unselected-board";

  return (
    <li
      onClick={() => onSelectBoard({ id, title, owner, cards })}
      className={selectedBoard}
    >
      {title}
    </li>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Board;
