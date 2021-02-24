import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={rootStyle}>
      <Link to="/">
        <h1>This is the header</h1>
      </Link>
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

export default Header;
