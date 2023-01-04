import PropTypes from "prop-types";

const Board = (props) => {
  return <li>{props.title}</li>;
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Board;
