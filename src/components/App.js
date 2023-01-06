import React, { Component, useState } from "react";
import "../styles/App.css";
// import RelativeLi from "./RelativeLi";

class App extends Component {
  render() {
    const relatives = ["Kaka", "mavshi", "Aatya", "didi"];

    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map((name, ind) => {
            return <li key={`relativeListItem${ind + 1}`}>{name}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
