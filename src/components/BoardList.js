import PropTypes from "prop-types";
import Board from "./Board";
import "./Board.css";

const BoardList = ({ boardsData, onSelectBoard }) => {
  return (
    <>
      <h2>All Boards</h2>
      <ul>
        {boardsData.map(({ id, title, owner }) => (
          <Board
            key={id}
            id={id}
            title={title}
            onSelectBoard={onSelectBoard}
            owner={owner}
          />
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
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
