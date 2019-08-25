import React from "react";
import axios from "axios";
import Ships from "./ships";
import Planets from "./planets";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      planets: [],
      planet: []
    };
  }

  getNumOfItems = (arr, num) => {
    return arr.filter(item => {
      return arr.indexOf(item) < num;
    });
  };

  getShips = () => {
    return axios
      .get("https://swapi.co/api/starships/?page=1")
      .then(response => {
        this.setState({
          //ships: response.data.results
          ships: this.getNumOfItems(response.data.results, 6)
        });
      });
  };

  getPlanets = () => {
    return axios.get("https://swapi.co/api/planets/?page=1").then(response => {
      console.log(response.data.results);
      this.setState({
        planets: this.getNumOfItems(response.data.results, 3),
        planet: response.data.results[0]
      });
    });
  };

  getPeople = () => {
    return axios.get("https://swapi.co/api/people/?page=1").then(response => {
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
    return (
      <section className="main">
        <Ships ships={this.state.ships} />
        <Planets planets={this.state.planets} planetInfo={this.state.planet} />
      </section>
    );
  }
}

export default Main;
