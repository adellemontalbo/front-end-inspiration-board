import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, owner, cards, onSelectBoard }) => {
  // We were referring to board, but that doesn't exist
  return (
    <li onClick={() => onSelectBoard({ id, title, owner, cards })} className="">
      {title}
    </li>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Board;
