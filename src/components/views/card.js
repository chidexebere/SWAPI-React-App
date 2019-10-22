import React from "react";

function Card(props) {
  return (
    <section className="card-view">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {props.apiData.map(ship => {
              const { url, name, model, cargo_capacity } = ship;
              return (
                <div key={url} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top embed-responsive-item"
                      src={
                        Object.values(
                          props.getResource(props.helpData, name)
                        )[3]
                      }
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
                          {
                            Object.values(
                              props.getResource(props.helpData, name)
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
    </section>
  );
}

export default Card;
