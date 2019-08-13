import React from "react";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <section className="header">
      <img className="top-logo" src={logo} alt="Star Wars Logo" />

      <div className="title ">
        <img className="middle-logo" src={logo} alt="Star Wars Logo" />
        <h1 className="logo-title">Directory</h1>
      </div>
      <hr className="underline" />
      <label className="search-text" for="site-search">
        Find your favorite Characters, Films, Species, <br />
        Starships and Planets
      </label>

      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="text"
          id="site-search"
          class="form-control"
          placeholder="Enter a search term"
        />
      </div>
    </section>
  );
}

export default Header;
