import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsBlock from "./components/NewsBlock";
// import Dropdown from "./components/Dropdown";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Dropdown/> */}
        <NewsBlock
          country="in"
          category="general"
          apiKey="d48ae45c841f4260ac0de51f82be4f8a"
        />
      </div>
    );
  }
}
