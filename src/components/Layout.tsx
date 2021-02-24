import React, { Component, CSSProperties } from "react";
import ViewContainer from "./ViewContainer";
import Header from "./Header";

export class Layout extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <Header />
        <ViewContainer />
      </div>
    );
  }
}
const rootStyle: CSSProperties = {
  backgroundColor: "#000000",
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",
};

export default Layout;
