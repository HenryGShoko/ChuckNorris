import "./App.css";
import Categories from "./components/categories";
import Joke from "./components/joke";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Categories} />
       <Route exact path="/category/:name" component={Joke} />
    </div>
  );
}

export default App;

