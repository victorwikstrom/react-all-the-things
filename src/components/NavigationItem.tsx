import React, { Component, CSSProperties } from "react";
import { Link } from "react-router-dom";

interface Props {
  key: number;
  title: string;
  imgPath: string;
}
interface State {
  isHovered: boolean;
}

class NavigationItem extends Component<Props, State> {
  state: State = {
    isHovered: false,
  };

  handleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };

  getImageStyle = (): CSSProperties => {
    return {
      opacity: this.state.isHovered ? "1" : "0.5",
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "3px",
      transition: "all 700ms ease",
    };
  };

  render() {
    return (
      <Link to={"/" + this.props.title} style={rootStyle}>
        <h1 style={headingStyle}>{this.props.title}</h1>
        <img
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
          style={this.getImageStyle()}
          src={this.props.imgPath}
          alt="Image"
        />
      </Link>
    );
  }
}

const rootStyle: CSSProperties = {
  padding: "1rem",
  position: "relative",
  cursor: "pointer",
};

const headingStyle: CSSProperties = {
  color: "#f3f3f3",
  position: "absolute",
  top: "5%",
  left: "2%",
  fontSize: "3rem",
  textTransform: "uppercase",
  zIndex: 10,
};

export default NavigationItem;
