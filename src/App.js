import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TopHeadlines from "./components/TopHeadlines/TopHeadlines";
import Authors from "./components/Authors/Authors";
import Everything from "./components/Everything/Everything";
import AuthorsDetail from "./components/Authors/AuthorsDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topnews" component={TopHeadlines} />
          <Route path="/allnews" component={Everything} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/authors/:id" component={AuthorsDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
