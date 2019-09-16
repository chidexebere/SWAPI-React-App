import React from "react";
import { Link } from "react-router-dom";

function ViewMoreBtn(props) {
  return (
    <section className="viewMoreBtn">
      <Link className="btn btn-outline-dark" to={props.path}>
        VIEW MORE
      </Link>
    </section>
  );
}

export default ViewMoreBtn;
