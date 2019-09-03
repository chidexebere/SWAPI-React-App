import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <Header />
//         <Main />
//       </div>
//     );
//   }
// }

// export default App;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
