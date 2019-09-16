import React from "react";
import axios from "axios";
import Ships from "./ships";
import Planets from "./planets";
import People from "./people";
import Home from "./home";
import Spinner from "./spinner";
import Pagination from "./pagination";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      planets: [],
      people: [],
      isLoading: true,
      error: null,
      shipsCount: null,
      planetsCount: null,
      peopleCount: null,
      shipsNext: null,
      shipsPrevious: null,
      planetsNext: null,
      planetsPrevious: null,
      peopleNext: null,
      peoplePrevious: null,
      firstItemNo: null,
      lastItemNo: null
    };
  }

  getNumOfItems = (arr, startIndex, endIndex) => {
    return arr.filter((item, index) => {
      return index >= startIndex && index <= endIndex;
    });
  };

  getShips = endpoint => {
    return axios
      .get(endpoint)
      .then(response => {
        this.setState({
          ships: response.data.results,
          shipsCount: response.data.count,
          shipsPrevious: response.data.previous,
          shipsNext: response.data.next,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPlanets = endpoint => {
    return axios
      .get(endpoint)
      .then(response => {
        this.setState({
          planets: response.data.results,
          planetsCount: response.data.count,
          planetsPrevious: response.data.previous,
          planetsNext: response.data.next,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  getPeople = endpoint => {
    return axios
      .get(endpoint)
      .then(response => {
        this.setState({
          people: response.data.results,
          peopleCount: response.data.count,
          peoplePrevious: response.data.previous,
          peopleNext: response.data.next,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    let shipsEndpoint = `https://swapi.co/api/starships/?page=1`;
    let planetsEndpoint = `https://swapi.co/api/planets/?page=1`;
    let peopleEndpoint = `https://swapi.co/api/people/?page=1`;

    this.getShips(shipsEndpoint);
    this.getPlanets(planetsEndpoint);
    this.getPeople(peopleEndpoint);
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

  handlePreviousShips = () => {
    const { shipsPrevious } = this.state;

    if (shipsPrevious !== null) {
      this.getShips(shipsPrevious);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo } = prevState;
        return {
          firstItemNo: firstItemNo - 10,
          lastItemNo: lastItemNo - 10,
          isLoading: true
        };
      });
    }
  };

  handlePreviousPlanets = () => {
    const { planetsPrevious } = this.state;

    if (planetsPrevious !== null) {
      this.getPlanets(planetsPrevious);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo } = prevState;
        return {
          firstItemNo: firstItemNo - 10,
          lastItemNo: lastItemNo - 10,
          isLoading: true
        };
      });
    }
  };

  handlePreviousPeople = () => {
    const { peoplePrevious } = this.state;

    if (peoplePrevious !== null) {
      this.getPeople(peoplePrevious);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo } = prevState;
        return {
          firstItemNo: firstItemNo - 10,
          lastItemNo: lastItemNo - 10,
          isLoading: true
        };
      });
    }
  };

  handleNextShips = () => {
    const { shipsNext } = this.state;
    if (shipsNext !== null) {
      this.getShips(shipsNext);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo, ships } = prevState;
        return {
          firstItemNo: firstItemNo + ships.length,
          lastItemNo: lastItemNo + ships.length,
          isLoading: true
        };
      });
    }
  };

  handleNextPlanets = () => {
    const { planetsNext } = this.state;

    if (planetsNext !== null) {
      this.getShips(planetsNext);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo } = prevState;
        return {
          firstItemNo: firstItemNo + 10,
          lastItemNo: lastItemNo + 10,
          isLoading: true
        };
      });
    }
  };

  handleNextPeople = () => {
    const { peopleNext } = this.state;

    if (peopleNext !== null) {
      this.getPeople(peopleNext);
      this.setState(prevState => {
        const { firstItemNo, lastItemNo } = prevState;
        return {
          firstItemNo: firstItemNo + 10,
          lastItemNo: lastItemNo + 10,
          isLoading: true
        };
      });
    }
  };

  render() {
    const {
      isLoading,
      ships,
      planets,
      people,
      shipsCount,
      planetsCount,
      peopleCount,
      firstItemNo,
      lastItemNo
    } = this.state;
    if (!isLoading) {
      if (this.props.displayShips) {
        return (
          <React.Fragment>
            <Ships shipsData={ships} getResource={this.getResource} />
            <Pagination
              count={shipsCount}
              clickPrevious={this.handlePreviousShips}
              clickNext={this.handleNextShips}
              firstItemNo={firstItemNo + 1}
              lastItemNo={lastItemNo + ships.length}
            />
          </React.Fragment>
        );
      } else if (this.props.displayPlanets) {
        return (
          <React.Fragment>
            <Planets
              planetsData={planets}
              getResource={this.getResource}
              displayInGrid={true}
            />
            <Pagination
              count={planetsCount}
              clickPrevious={this.handlePreviousPlanets}
              clickNext={this.handleNextPlanets}
              firstItemNo={firstItemNo + 1}
              lastItemNo={lastItemNo + planets.length}
            />
          </React.Fragment>
        );
      } else if (this.props.displayPeople) {
        return (
          <React.Fragment>
            <People
              peopleData={people}
              getResource={this.getResource}
              displayFilter={true}
            />
            <Pagination
              count={peopleCount}
              clickPrevious={this.handlePreviousPeople}
              clickNext={this.handleNextPeople}
              firstItemNo={firstItemNo + 1}
              lastItemNo={lastItemNo + people.length}
            />
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
