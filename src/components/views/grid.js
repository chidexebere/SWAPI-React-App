import React from "react";

function Grid(props) {
  return (
    <section className="grid-view">
      <div className="container">
        <div className="row mb-2">
          {props.apiData.map(char => {
            const { url, name, birth_year, gender } = char;
            return (
              <div key={url} className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div
                    className="col-auto d-none d-lg-block"
                    style={{
                      backgroundImage: `url(${
                        Object.values(
                          props.getResource(props.helpData, name)
                        )[4]
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      {name}
                    </strong>
                    <small className="text-muted">
                      <strong>Born:</strong> {birth_year}
                    </small>
                    <small className="text-muted">
                      <strong>Gender:</strong> {gender}
                    </small>
                    <div className="mb-1 text-muted">
                      <i>
                        {
                          Object.values(
                            props.getResource(props.helpData, name)
                          )[2]
                        }
                      </i>
                    </div>
                    <p className="mb-auto">
                      {
                        Object.values(
                          props.getResource(props.helpData, name)
                        )[3]
                      }
                      <a href="#" className="stretched-link">
                        <strong>Read More</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Grid;
