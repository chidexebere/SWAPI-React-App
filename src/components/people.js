import React from "react";
import people from "../data/peopleData";
import Title from "./title";
import DropDown from "./dropDown";
import Grid from "./grid";

function People(props) {
  const lineStyle = {
    width: 90,
    border: "3px solid",
    margin: 10
  };

  const textStyle = {
    fontSize: 32,
    paddingLeft: 0
  };

  if (props.displayFilter) {
    return (
      <section className="people">
        <Title
          displayTitleLogo={false}
          text="Starwars Characters"
          textStyle={textStyle}
          lineStyle={lineStyle}
          path="/people"
        />
        <DropDown />
        <Grid
          apiData={props.peopleData}
          helpData={people}
          getResource={props.getResource}
        />
      </section>
    );
  } else {
    return (
      <section className="people">
        <Title
          displayTitleLogo={false}
          text="Popular Character"
          textStyle={textStyle}
          lineStyle={lineStyle}
          path="/people"
        />

        <Grid
          apiData={props.peopleData}
          helpData={people}
          getResource={props.getResource}
        />
      </section>
    );
  }
}
export default People;
