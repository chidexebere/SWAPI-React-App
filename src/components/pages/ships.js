import React from "react";
import starShips from "../../data/shipData";
import Title from "../elements/title";
import Card from "../views/card";

function Ships(props) {
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
    <section className="ships">
      <Title
        displayTitleLogo={false}
        text="Popular Starships"
        textStyle={textStyle}
        lineStyle={lineStyle}
        path="/ships"
      />

      <Card
        apiData={props.shipsData}
        helpData={starShips}
        getResource={props.getResource}
      />
      {/* <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {props.shipsData.map(ship => {
              const { url, name, model, cargo_capacity } = ship;
              return (
                <div key={url} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top embed-responsive-item"
                      src={Object.values(props.getResource(starShips, name))[3]}
                      alt={name}
                    />
                    <div className="card-body">
                      <div className=" card-inner">
                        <h2 className="card-title">{name}</h2>
                        <small className="text-muted">
                          <strong>Model:</strong> {model}
                        </small>
                        <small className="text-muted">
                          <strong>Capacity:</strong> {cargo_capacity}
                        </small>
                        <p className="card-text">
                          {Object.values(props.getResource(starShips, name))[2]}
                        </p>
                        <a href="#" className="card-link">
                          Read more ➜
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Ships;
