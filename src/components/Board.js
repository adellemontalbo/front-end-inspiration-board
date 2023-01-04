import PropTypes from "prop-types";

const Board = ({ id, title, owner, onSelectBoard}) => {
  // const onSelectBoardClick = () => 
  console.log()
  return (<div onClick={() => onSelectBoard(board)}>{title}</div>);
};


Board.propTypes = {
  title: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired
}


export default Board;
