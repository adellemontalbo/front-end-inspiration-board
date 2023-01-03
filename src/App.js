import CardList from "./components/CardList";
import "./App.css";

const EXAMPLE_CARD = {
  cardId: 1,
  boardId: 1,
  message: "test message",
  likesCount: 0,
};

const EXAMPLE_BOARD = {
  boardId: 1,
  title: "my first board",
  owner: "jimbo",
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
