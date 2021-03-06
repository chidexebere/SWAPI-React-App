import React from "react";
//import { Link } from "react-router-dom";

function Carousel(props) {
  return (
    <section className="carousel">
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
                {props.apiData1.map(planet => {
                  const { url, name } = planet;
                  return (
                    <div
                      key={url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(props.helpData, name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{name}</h1>
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
                {props.apiData2.map(planet => {
                  const { url, name } = planet;
                  return (
                    <div
                      key={url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(props.helpData, name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{name}</h1>
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
                {props.apiData3.map(planet => {
                  const { url, name } = planet;
                  return (
                    <div
                      key={url}
                      className="card mb-4 shadow-sm"
                      style={{
                        backgroundImage: `url(${
                          Object.values(
                            props.getResource(props.helpData, name)
                          )[2]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      <div className="carousel-caption">
                        <h1>{name}</h1>
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

export default Carousel;
