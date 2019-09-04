import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/ships" render={() => <Main displayShips={true} />} />
            <Route
              path="/planets"
              render={() => <Main displayPlanets={true} />}
            />
            <Route
              path="/people"
              render={() => <Main displayPeople={true} />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
