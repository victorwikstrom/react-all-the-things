import React, { CSSProperties } from "react";

function Navbar() {
  return (
    <div style={rootStyle}>
      <h1>This is the header</h1>
    </div>
  );
}

const rootStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  textAlign: "center",
};

export default Navbar;
