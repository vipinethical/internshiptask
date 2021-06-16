import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/registration";
import Login from "./components/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route exact path="/">
          <Registration />
        </Route>
      </Router>
    </div>
  );
}

export default App;
