import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../../ZStyles/ProjectOne/AboutProjectOne_style.css";

class AboutProjectOne extends React.Component {
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
      <div>
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 700 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <Fade bottom when={!visibility} distance="10%">
            <div className="No3Work">
              <div className="div1">
                <h1>Recreando una pagina </h1>
                <p>
                  Como parte de practicar diseño y animacion, intenté recrear una pagina ya
                  existente que combinaba muy bien estas areas, adicionalmente la paleta de colores,
                  el tamaño y estilos de los componentes y animaciones se miraban muy bien en la
                  pagina original por la cual tomé el reto de hacer un &quot;clon&quot; de ello.
                </p>
              </div>
              <div className="row">
                <div className="column cd">
                  <h1 className="copyright">Pagina Original Rollpark</h1>
                  <button type="button" className="b1" onClick={() => openInNewTab("http://rollpark.us/")}>
                    <i className="fa fa-industry fa-2x" />
                  </button>
                </div>
                <div className="column">
                  <h1>Recreacion</h1>
                  <button type="button" className="b2" onClick={() => openInNewTab("http://stw-uvg.site/proyectos/proyecto1/Gut19111/dist/index.html")}>
                    <i className="fa fa-television fa-2x" aria-label="Mute volume" />
                  </button>
                  <button type="button" className="b3" onClick={() => openInNewTab("https://github.com/ElGutiz/Proyecto-WEB")}>
                    <i className="fa fa-github fa-2x" aria-label="Mute volume" />
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </VisibilitySensor>
      </div>
    );
  }
}

export default AboutProjectOne;
