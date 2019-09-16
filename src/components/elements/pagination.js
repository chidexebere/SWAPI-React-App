import React from "react";

const Pagination = props => {
  return (
    <div className="pagination-cover">
      <p className="page-number">
        {props.firstItemNo} - {props.lastItemNo} of {props.count}
      </p>
      <ul className="pagination">
        <li className="page-item" onClick={props.clickPrevious}>
          <a className="page-link" href="#">
            &#60;
          </a>
        </li>
        <li className="page-item" onClick={props.clickNext}>
          <a className="page-link" href="#">
            &#62;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
