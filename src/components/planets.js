import React from "react";
import planets from "../data/planetData";

function Planets(props) {
  const getResource = (searched, fromApi) => {
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

  // const style = {
  //   backgroundImage: `url(${Object.values(getResource(planets))[2]})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat"
  // };
  return (
    <section className="planets">
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
                {props.planets.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(getResource(planets, planet.name))[2]
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
                {props.planets.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(getResource(planets, planet.name))[2]
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
                {props.planets.map(planet => {
                  return (
                    <div
                      key={planet.url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(getResource(planets, planet.name))[2]
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
