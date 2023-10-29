import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./NavBar.css";
import Movies from "../pages/Movie";
import Directors from "../pages/Directors";
import Actors from "../pages/Actors";
import Home from "../pages/Home";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavBar />
      </nav>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
