import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "./style.css";
import capture1 from "./Captura.PNG";
import capture2 from "./Captura2.PNG";
import capture3 from "./Captura3.PNG";

class HCIP extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    const openInNewTab = (url) => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    };
    return (
      <VisibilitySensor
        partialVisibility="top"
        offset={{ top: 850 }}
        onChange={(isVisible) => {
          this.setState({ visibility: isVisible });
        }}
      >
        <Fade bottom when={!visibility} distance="10%" opposite={false}>
          <div className="WorkNo4">
            <h1>Proyecto en React Native</h1>
            <p className="WorkNo4D">Proyecto de una aplicacion web hecho con React Native y Expo</p>
            <div className="polaroid">
              <img src={capture1} alt="captura1" style={{ width: "20%" }} />
              <img src={capture2} alt="captura2" style={{ width: "20%" }} />
              <img src={capture3} alt="captura3" style={{ width: "20%" }} />
              <div className="container">
                <p>Imagenes del proyecto</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => openInNewTab("https://github.com/ElGutiz/PROYECTO-HCI")}
            >
              <i className="fa fa-github" />
              {" "}
              Repositorio
            </button>
          </div>
        </Fade>
      </VisibilitySensor>
    );
  }
}

export default HCIP;
