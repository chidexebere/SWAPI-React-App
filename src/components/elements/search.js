import React from "react";

function Search(props) {
  return (
    <section className="search">
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

export default Search;
