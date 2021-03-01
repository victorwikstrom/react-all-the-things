import React, { Component, CSSProperties } from "react";
import { centeredContent, fullScreen, fullscreenAbsolute } from "../css";
import ReactDOM from "react-dom";

interface Props {
  persistent?: boolean;
  shouldClose: () => void;
}

export class Modal extends Component<Props> {
  element: HTMLDivElement;
  modalRoot: any;

  constructor(props: Props) {
    super(props);
    this.element = document.createElement("div");
    this.element.className = "modal-root";
  }

  handleOnClick = () => {
    if (!this.props.persistent) {
      this.props.shouldClose();
    }
  };

  componentDidMount() {
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{ ...modalStyle, ...fullscreenAbsolute, ...centeredContent }}
        onClick={this.handleOnClick}
      >
        {this.props.children}
      </div>,
      this.element
    );
  }
}

const modalStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
};

export default Modal;
