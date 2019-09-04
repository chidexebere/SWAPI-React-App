import React from "react";
import axios from "axios";
import Ships from "./ships";
import Planets from "./planets";
import People from "./people";
import Home from "./home";
import Spinner from "./spinner";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      planets: [],
      people: [],
      isLoading: true,
      error: null
    };
  }

  getNumOfItems = (arr, startIndex, endIndex) => {
    return arr.filter((item, index) => {
      return index >= startIndex && index <= endIndex;
    });
  };

  getShips = () => {
    return axios
      .get("https://swapi.co/api/starships/?page=1")
      .then(response => {
        console.log(response.data.results);
        this.setState({
          ships: response.data.results,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPlanets = () => {
    return axios
      .get("https://swapi.co/api/planets/?page=1")
      .then(response => {
        this.setState({
          planets: response.data.results,
          isLoading: false
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
          isLoading: false
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
    const { isLoading, ships, planets, people} = this.state;
    if (!isLoading) {
      if (this.props.displayShips) {
        return (
          <React.Fragment>
            <Ships shipsData={ships} getResource={this.getResource} />
          </React.Fragment>
        );
      } else if (this.props.displayPlanets) {
        return (
          <React.Fragment>
            <Planets planetsData={planets} getResource={this.getResource} />
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
              ships1={this.getNumOfItems(ships, 0, 5)}
              planets1={this.getNumOfItems(planets, 0, 2)}
              planets2={this.getNumOfItems(planets, 3, 5)}
              planets3={this.getNumOfItems(planets, 6, 8)}
              people1={this.getNumOfItems(people, 0, 3)}
              getResource={this.getResource}
            />
          </React.Fragment>
        );
      }
    } else {
      return <Spinner />;
    }
  }
}

export default Main;
