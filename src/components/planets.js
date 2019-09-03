import React from "react";
import planets from "../data/planetData";
import Title from "./title";

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

  return (
    <section className="planets">
      <Title
        displayTitleLogo={false}
        text="Popular Planets"
        textStyle={textStyle}
        lineStyle={lineStyle}
      />
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active" />
          <li data-target="#demo" data-slide-to="1" />
          <li data-target="#demo" data-slide-to="2" />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="card-deck mb-3 text-center">
                {props.planetsData1.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(planets, planet.name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{planet.name}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="container">
              <div className="card-deck mb-3 text-center">
                {props.planetsData2.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(planets, planet.name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{planet.name}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="container">
              <div className="card-deck mb-3 text-center">
                {props.planetsData3.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(planets, planet.name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{planet.name}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Planets;
