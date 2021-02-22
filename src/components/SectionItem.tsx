import React, { CSSProperties } from "react";

interface Props {
  id: number;
  title: string;
  imgPath: string;
}

function SectionItem(props: Props) {
  return (
    <div style={rootStyle}>
      <h1 style={headingStyle}>{props.title}</h1>
      <img style={imageStyle} src={props.imgPath} alt="Image" />
    </div>
  );
}

const rootStyle: CSSProperties = {
  position: "relative",
  height: "600px",
  margin: "15px",
  cursor: "pointer",
};

const imageStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "3px",
};

const headingStyle: CSSProperties = {
  color: "#f3f3f3",
  position: "absolute",
  top: "5%",
  left: "2%",
  fontSize: "5rem",
  textTransform: "uppercase",
};

export default SectionItem;
