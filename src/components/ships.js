import React from "react";
import starShips2 from "../assets/starship-2.jpg";

function Ships(props) {
  //   const findUsingName = (tofind ,resource) => {
  //     searched.find(({name}) => {
  //         return name === resource.name;
  //       });
  //   }

  //   const getResource = (searched, resource) => {
  //     //let randIndex = Math.floor(Math.random * searched.length);
  //     const searches = searched.map(search => {
  //       return search;
  //     });

  //     //     //   if (found == undefined) {
  //     //     //       return searched[randIndex];
  //     //     //   }
  //     //     //   else {
  //     //     //       return found;
  //     //     //   }

  //     return searched[randIndex].des;
  //   };

  //   const style = {
  //     backgroundImage: `url(${starShips2})`,
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat"
  //   };
  return (
    <section className="ships">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {props.shipInfo.map(ship => {
              return (
                <div key={ship.url} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      src={starShips2}
                      alt="starwars"
                    />
                    <div className="card-body">
                      <div class=" card-inner">
                        <h2 class="card-title">{ship.name}</h2>
                        <p class="card-text">
                          The Raven's Claw was a fast light courier that
                          replaced Kyle Katarn's old ship, the Moldy Crow
                        </p>
                        <a href="#" class="card-link">
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

export default Ships;
