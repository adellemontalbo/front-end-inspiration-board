import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

// Should we change this to be an arrow function for consistency?
function App() {
  // boardsData useState([])?
  const [boardsData, setBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({
    title: "test title",
    owner: "test owner",
    id: 1,
    cards: [],
  });

  const effectHelper = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardsData(response.data.boards);
        console.log({ message: "we're in useEffect" });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    effectHelper();
  }, []);

  const selectBoard = (board) => {
    setCurrentBoard(board);
  };

  const addBoardData = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        const newBoardsList = [...boardsData];
        newBoardsList.push(response.data);
        setBoardsData(newBoardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Inspiration Board</h1>
      </div>
      <section className="sidebar">
        <BoardForm addBoardData={addBoardData} />
        <BoardList boardsData={boardsData} onSelectBoard={selectBoard} />
      </section>
      <CardList currentBoard={currentBoard} />
    </div>
  );
}

export default App;
