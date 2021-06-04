import React from "react";

import "../../ZStyles/Contacto/style.css";

class Contacto extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { mail: "gut19111@uvg.edu.gt", phone: "50241749982" };
    this.onClickSentMail = this.onClickSentMail.bind(this);
    this.onClickDoCall = this.onClickDoCall.bind(this);
  }

  onClickSentMail() {
    const { mail } = this.state;
    window.location.href = `mailto:${mail}`;
  }

  onClickDoCall() {
    const { phone } = this.state;
    window.location.href = `tel:${phone}`;
  }

  render() {
    return (
      <div>
        <div className="Contact">
          <div className="div1">
            <h1>Contacto: </h1>
            <button type="button" className="button1" onClick={() => this.onClickSentMail()}>
              <i className="fa fa-envelope fa-2x" />
            </button>
            <button type="button" className="button2" onClick={() => this.onClickDoCall()}>
              <i className="fa fa-phone fa-2x" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
