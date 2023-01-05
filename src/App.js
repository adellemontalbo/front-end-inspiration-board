import axios from "axios";
import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

const EXAMPLE_CARD_1 = {
  id: 1,
  boardId: 1,
  message: "test message 1",
  likesCount: 0,
};

const EXAMPLE_CARD_2 = {
  id: 2,
  boardId: 1,
  message: "test message 2",
  likesCount: 0,
};

const EXAMPLE_BOARD_1 = {
  id: 1,
  title: "my first board",
  owner: "jimbo",
  cards: [EXAMPLE_CARD_1, EXAMPLE_CARD_2],
};

const EXAMPLE_BOARD_2 = {
  id: 2,
  title: "my second board",
  owner: "jimbo",
  cards: [],
};

const EXAMPLE_BOARD_LIST = [EXAMPLE_BOARD_1, EXAMPLE_BOARD_2];

const CARDS_ONLY = EXAMPLE_BOARD_1.cards;

// Should we change this to be an arrow function for consistency?
function App() {
  const [boardsData, setBoardsData] = useState(EXAMPLE_BOARD_LIST);
  const [currentBoard, setCurrentBoard] = useState({
    title: "test title",
    owner: "test owner",
    id: null,
    cards: [],
  });

  const selectBoard = (board) => {
    setCurrentBoard(board);
  };

  const addBoardData = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        const newBoardsList = [...boardsData];
        newBoardsList.push(response);
        setBoardsData(newBoardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section className="sidebar">
        <BoardForm addBoardData={addBoardData} />
        <BoardList boardsData={boardsData} onSelectBoard={selectBoard} />
      </section>
      <section>
        <h2>
          {currentBoard.title} - {currentBoard.owner}
        </h2>
        <h2>Add New Card</h2>
        {/* <CardForm /> */}
        <div className="cardDisplay">
          <CardList cardsData={currentBoard.cards} />
        </div>
      </section>
    </div>
  );
}

export default App;
