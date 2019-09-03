import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

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
            <Route path="/" component={Main} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
