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
      planets1: [],
      planets2: [],
      planets3: []
    };
  }

  getNumOfItems = (arr, num) => {
    return arr.filter((item, index) => {
      return index < num;
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
        planets: response.data.results,
        planets1: this.getNumOfItems(response.data.results, 3),
        planets2: [
          response.data.results[3],
          response.data.results[4],
          response.data.results[5]
        ],
        planets3: [
          response.data.results[6],
          response.data.results[7],
          response.data.results[8]
        ]
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

  getResource = (searched, fromApi) => {
    let randIndex = Math.floor(Math.random() * searched.length);
    let findName = searched.find(({ name }) => {
      return name === fromApi;
    });
    if (findName === undefined) {
      return searched[randIndex];
    } else {
      return findName;
    }
  };
  render() {
    return (
      <section className="main">
        <Ships ships={this.state.ships} getResource={this.getResource} />
        <Planets
          planets={this.state.planets}
          planets1={this.state.planets1}
          planets2={this.state.planets2}
          planets3={this.state.planets3}
          getResource={this.getResource}
        />
      </section>
    );
  }
}

export default Main;
