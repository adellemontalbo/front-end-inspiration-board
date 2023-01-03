import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = (props) => {
        return (
          <>
            <h2>All Boards</h2>
            <ul>
              {props.boardData.map((board) => (
                <Board
                  title={board.title}
                />
              ))}
            </ul>
          </>
        );
      };


BoardList.propTypes = {
    boardData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
})),
};

export default BoardList;