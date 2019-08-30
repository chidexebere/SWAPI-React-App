import React from "react";
import Title from "./title";
import Search from "./search";
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
        titleStyle={{ margin: 0 }}
      />
      <Search />
    </section>
  );
}

export default Header;
