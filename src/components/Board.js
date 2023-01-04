import PropTypes from "prop-types";

const Board = (props) => {
  // const onSelectBoardClick = () => 
  console.log(props)
  return (<div onClick={() => props.onSelectBoard(props.board)}>{props.title}</div>);
};


Board.propTypes = {
  title: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired
}


export default Board;
