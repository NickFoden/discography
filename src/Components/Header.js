import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-div">
        <h1>
          {" "}
          <a href="/">Discography </a>
        </h1>
      </div>
    );
  }
}

export default Header;
