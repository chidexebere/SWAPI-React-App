import React from "react";
import Title from "./title";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <section className="header">
      <img className="top-logo" src={logo} alt="Star Wars Logo" />

      <Title
        displayTitleLogo={true}
        text="Directory"
        img={logo}
        imgAlt="Star Wars Logo"
      />
      <label className="search-text">
        Find your favorite Characters, Films, Species, <br />
        Starships and Planets
      </label>

      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="text"
          id="site-search"
          className="form-control"
          placeholder="Enter a search term"
        />
      </div>
    </section>
  );
}

export default Header;
