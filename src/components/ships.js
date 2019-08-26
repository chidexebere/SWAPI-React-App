import React from "react";
import starShips from "../data/shipData";
import Title from "./title";
import ViewMoreBtn from "./viewMoreBtn";

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
      />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {props.ships.map(ship => {
              return (
                <div key={ship.url} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top embed-responsive-item"
                      src={
                        Object.values(
                          props.getResource(starShips, ship.name)
                        )[3]
                      }
                      alt={ship.name}
                    />
                    <div className="card-body">
                      <div className=" card-inner">
                        <h2 className="card-title">{ship.name}</h2>
                        <p className="card-text">
                          {
                            Object.values(
                              props.getResource(starShips, ship.name)
                            )[2]
                          }
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
      </div>

      <ViewMoreBtn></ViewMoreBtn>
    </section>
  );
}

export default Ships;
