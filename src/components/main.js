import React from "react";
import axios from "axios";
import Ships from "./ships";
import Planets from "./planets";
import People from "./people";
import Home from "./home";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      ships1: [],
      planets: [],
      planets1: [],
      planets2: [],
      planets3: [],
      people: [],
      people1: [],
      loading: false,
      error: null
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
        console.log(this.getNumOfItems(response.data.results, 6));
        this.setState({
          ships: response.data.results,
          ships1: this.getNumOfItems(response.data.results, 6)
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPlanets = () => {
    return axios
      .get("https://swapi.co/api/planets/?page=1")
      .then(response => {
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
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPeople = () => {
    return axios
      .get("https://swapi.co/api/people/?page=1")
      .then(response => {
        this.setState({
          people: response.data.results,
          people1: this.getNumOfItems(response.data.results, 4)
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
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
    if (this.props.displayShips) {
      return (
        <React.Fragment>
          <Ships shipsData={this.state.ships} getResource={this.getResource} />
        </React.Fragment>
      );
    } else if (this.props.displayPlanets) {
      return (
        <React.Fragment>
          <Planets
            planetsData={this.state.planets}
            planets1={this.state.planets1}
            planets2={this.state.planets2}
            planets3={this.state.planets3}
            getResource={this.getResource}
          />
        </React.Fragment>
      );
    } else if (this.props.displayPeople) {
      return (
        <React.Fragment>
          <People
            peopleData={this.state.people}
            getResource={this.getResource}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Home
            ships1={this.state.ships1}
            planets1={this.state.planets1}
            planets2={this.state.planets2}
            planets3={this.state.planets3}
            people1={this.state.people1}
            getResource={this.getResource}
          />
        </React.Fragment>
      );
    }
  }
}

export default Main;
