import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    //this.getPeople = this.getPeople.bind(this);
  }

  getPeople = () => {
    return axios.get("https://swapi.co/api/people/?page=1").then(response => {
      console.log(response.data.results);
      this.setState({
        people: response.data.results
      });
    });
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people } = this.state;

    return (
      <div className="app">
        <Header />
        <Main people={people} />
      </div>
    );
  }
}

export default App;
