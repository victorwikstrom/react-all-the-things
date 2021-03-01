import React, { CSSProperties, Component } from "react";
import { fullscreenAbsolute } from "../../css";
import { RouteComponentProps } from "react-router-dom";
import Modal from "../Modal";

interface Props extends RouteComponentProps {
  id: string;
}

interface State {
  isModalVisible: boolean;
}

class DetailView extends Component<Props, State> {
  state: State = {
    isModalVisible: false,
  };

  constructor(props: Props) {
    super(props);
  }

  view = this.props.match.url.substr(1);
  imageSrc = `../assets/${this.view}.jpg`;

  openModal = () => this.setState({ isModalVisible: true });
  closeModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <div style={container}>
        <button style={modalButtonStyle} onClick={this.openModal}>
          Open Modal
        </button>
        <img src={this.imageSrc} style={fullscreenAbsolute} />
        {this.state.isModalVisible && (
          <Modal persistent shouldClose={this.closeModal}>
            <h3>
              This modal was opened from&nbsp;
              <span style={{ color: "red", textTransform: "capitalize" }}>
                {this.view}
              </span>
            </h3>
            <button onClick={this.closeModal}>Close modal</button>
          </Modal>
        )}
      </div>
    );
  }
}

const container: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const modalButtonStyle: CSSProperties = {
  position: "absolute",
  zIndex: 100,
  top: "5%",
  left: "5%",
};

export default DetailView;
