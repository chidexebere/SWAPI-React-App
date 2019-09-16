import React from "react";
import planets from "../data/planetData";
import Title from "./title";
import Carousel from "./carousel";
import Grid from "./grid";

function Planets(props) {
  const lineStyle = {
    width: 90,
    border: "3px solid",
    margin: 10
  };

  const textStyle = {
    fontSize: 32,
    paddingLeft: 0
  };

  if (props.displayInGrid) {
    return (
      <section className="planets">
        <Title
          displayTitleLogo={false}
          text="Popular Planets"
          textStyle={textStyle}
          lineStyle={lineStyle}
          path="/planets"
        />

        <Grid
          apiData={props.planetsData}
          helpData={planets}
          getResource={props.getResource}
        />
      </section>
    );
  } else {
    return (
      <section className="planets">
        <Title
          displayTitleLogo={false}
          text="Popular Planets"
          textStyle={textStyle}
          lineStyle={lineStyle}
          path="/planets"
        />

        <Carousel
          apiData1={props.planetsData1}
          apiData2={props.planetsData2}
          apiData3={props.planetsData3}
          helpData={planets}
          getResource={props.getResource}
        />
      </section>
    );
  }
}
export default Planets;
