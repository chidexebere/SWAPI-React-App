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
      planets: [],
      planets2: [],
      planets3: [],
      people: [],
      isLoading: false,
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
        this.setState({
          ships: response.data.results
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPlanets = () => {
    return axios
      .get("https://swapi.co/api/planets/?page=1")
      .then(response => {
        console.log(response.data.results[3]);
        this.setState({
          planets: response.data.results,
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
          people: response.data.results
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
    const {
      isLoading,
      ships,
      planets,
      planets2,
      planets3,
      people,
      error
    } = this.state;
    if (this.props.displayShips) {
      return (
        <React.Fragment>
          <Ships shipsData={ships} getResource={this.getResource} />
        </React.Fragment>
      );
    } else if (this.props.displayPlanets) {
      return (
        <React.Fragment>
          <Planets
            planetsData={planets}
            planets1={this.getNumOfItems(planets, 3)}
            planets2={planets2}
            planets3={planets3}
            getResource={this.getResource}
          />
        </React.Fragment>
      );
    } else if (this.props.displayPeople) {
      return (
        <React.Fragment>
          <People peopleData={people} getResource={this.getResource} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Home
            ships1={this.getNumOfItems(ships, 6)}
            planets1={this.getNumOfItems(planets, 3)}
            planets2={planets2}
            planets3={planets3}
            people1={this.getNumOfItems(people, 4)}
            getResource={this.getResource}
          />
        </React.Fragment>
      );
    }
  }
}

export default Main;
