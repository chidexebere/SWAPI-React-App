import React from "react";
import Ships from "./ships";

class Main extends React.Component {
  render() {
    //const ships = this.props.ships;
    return (
      <section className="main">
        <Ships shipInfo={this.props.ships} />
        {/* {ships.map(ship => {
          return (
            <div>
              <Ships shipInfo={ship} />
            </div>
          );
        })} */}
      </section>
    );
  }
}

export default Main;
