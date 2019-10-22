import React from "react";
import Ships from "../pages/ships";
import Planets from "../pages/planets";
import People from "../pages/people";
import ViewMoreBtn from "../elements/viewMoreBtn";

function Home(props) {
  return (
    <section className="home">
      <Ships shipsData={props.ships1} getResource={props.getResource} />
      <ViewMoreBtn path="/ships" />

      <Planets
        planetsData1={props.planets1}
        planetsData2={props.planets2}
        planetsData3={props.planets3}
        getResource={props.getResource}
      />

      <People peopleData={props.people1} getResource={props.getResource} />
      <ViewMoreBtn path="/people" />
    </section>
  );
}

export default Home;
