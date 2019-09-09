import React from "react";
import { Link } from "react-router-dom";
import Title from "./title";
import Search from "./search";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <header className="header">
      <Link className="top-logo" to="/">
        <img className="top-logo-img" src={logo} alt="Star Wars Logo" />
      </Link>

      <Title
        displayTitleLogo={true}
        text="Directory"
        img={logo}
        imgAlt="Star Wars Logo"
        titleStyle={{ margin: 0 }}
        textStyle={{ color: "white" }}
      />
      <Search />
    </header>
  );
}

export default Header;
