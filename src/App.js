import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: []
    };

    //this.getPeople = this.getPeople.bind(this);
  }

  getShips = () => {
    return axios
      .get("https://swapi.co/api/starships/?page=1")
      .then(response => {
        console.log(response.data.results);
        this.setState({
          ships: response.data.results
        });
      });
  };

  getPlanets = () => {
    return axios.get("https://swapi.co/api/planets/?page=1").then(response => {
      console.log(response.data.results);
      this.setState({
        planets: response.data.results
      });
    });
  };

  getPeople = () => {
    return axios.get("https://swapi.co/api/people/?page=1").then(response => {
      console.log(response.data.results);
      this.setState({
        people: response.data.results
      });
    });
  };

  componentDidMount() {
    this.getShips();
    this.getPlanets();
    this.getPeople();
  }

  render() {
    // const { ships } = this.state.ships;

    return (
      <div className="app">
        <Header />
        <Main ships={this.state.ships} />
      </div>
    );
  }
}

export default App;
