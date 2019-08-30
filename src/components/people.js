import React from "react";
import people from "../data/peopleData";
import Title from "./title";
import ViewMoreBtn from "./viewMoreBtn";

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

  return (
    <section className="planets">
      <Title
        displayTitleLogo={false}
        text="Popular Character"
        textStyle={textStyle}
        lineStyle={lineStyle}
      />
      <div className="container">
        <div className="row mb-2">
          {props.people.map(char => {
            return (
              <div key={char.url} className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div
                    className="col-auto d-none d-lg-block"
                    style={{
                      backgroundImage: `url(${
                        Object.values(props.getResource(people, char.name))[4]
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      {char.name}
                    </strong>
                    <div className="mb-1 text-muted">
                      <i>
                        {Object.values(props.getResource(people, char.name))[2]}
                      </i>
                    </div>
                    <p className="mb-auto">
                      {Object.values(props.getResource(people, char.name))[3]}
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

      <ViewMoreBtn />
    </section>
  );
}
export default People;
