import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ name: string }> {}

function DetailView(props: Props) {
  const { name } = props.match.params;
  const imgSrc = `../assets/${name}.jpg`;

  console.log(imgSrc);
  return (
    <div>
      <h1>{}</h1>
      <img style={imgStyle} src={imgSrc} alt="" />
    </div>
  );
}

const imgStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

export default DetailView;
