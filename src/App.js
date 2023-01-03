import "./App.css";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

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
  cards: []
};

function App() {
  return (
    <div className="App">
        <h1>Inspiration Board</h1>
        <section classname="sidebar">
          <BoardForm />
          <BoardList />
        </section>
        <section>
          <h2>BoardName and BoardOwner</h2>
          <h2>Add New Card</h2>
          <CardForm />
          <div classname="cardDisplay">
            CARDLIST
          </div>
        </section>
        
         
    </div>
  );
}

export default App;

