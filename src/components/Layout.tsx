import React, { Component, CSSProperties } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

export class Layout extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <Navbar />
        <Content />
      </div>
    );
  }
}
const rootStyle: CSSProperties = {
  backgroundColor: "#000000",
};

export default Layout;
