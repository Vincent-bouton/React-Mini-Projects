// 28/02/2020

import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home {this.props.name}</h1>
      </div>
    );
  }
}

export default Home;
