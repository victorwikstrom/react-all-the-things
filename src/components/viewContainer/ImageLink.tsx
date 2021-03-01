import React, { CSSProperties } from "react";
import { centeredContent, fullscreenAbsolute } from "../../css";
import { Link } from "react-router-dom";
import { testErrorBoundary } from "../errorBoundary";

interface Props {
  view: string;
}

/** React function component */
export default function ImageLink(props: Props) {
  const url = `${props.view}`;
  const imageSrc = `../assets/${props.view}.jpg`;

  return (
    <Link to={url} style={{ ...linkAppearance, ...centeredContent }}>
      <img src={imageSrc} style={fullscreenAbsolute} />
      <h1 style={{ ...centeredAbsolute, ...appearance }}>{props.view}</h1>
    </Link>
  );
}

const linkAppearance: CSSProperties = {
  height: "100%",
  cursor: "pointer",
};

const centeredAbsolute: CSSProperties = {
  position: "absolute",
  margin: 0,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const appearance: CSSProperties = {
  color: "#1E1E1E",
  textShadow: "0 0 3px white",
};
