import React from "react";

function Title(props) {
  if (props.displayTitleLogo) {
    return (
      <section className="title" style={props.titleStyle}>
        <div className="title-head">
          <img className="title-logo" src={props.img} alt={props.imgAlt} />
          <h1 className="title-text">{props.text}</h1>
        </div>
        <hr className="underline" style={props.lineStyle} />
      </section>
    );
  } else {
    return (
      <section className="title">
        <div className="title-head ">
          <h1 className="title-text" style={props.textStyle}>
            {props.text}
          </h1>
        </div>
        <hr className="underline" style={props.lineStyle} />
      </section>
    );
  }
}

export default Title;
