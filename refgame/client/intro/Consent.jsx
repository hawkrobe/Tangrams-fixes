import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";
import BrowserDetection from "react-browser-detection";

export default class Consent extends React.Component {
  static renderConsent() {
    return (
      <Centered>
        <div className="consent bp3-ui-text">
          <h5 className="bp3-heading">INTRODUCCIÓN</h5>
          <p>
          Gracias por decidir participar en este proyecto de investigación.
          Este experimento forma parte de la investigación llevada a cabo por la Dra. Giuli Dussias en el BrainTracking Lab de Penn State University.
          El mismo tiene una duración aproximada de 30 minutos.
          </p>

          <h5 className="bp3-heading">CONSENTIMIENTO PARA PARTICIPAR</h5>
          <p>
          Pulsa ACEPTO para dar tu consentimiento y continuar a la descripción del experimento.
          </p>

          <ConsentButton text="ACEPTO" />
        </div>
      </Centered>
    );
  }

  renderNoFirefox = () => {
    console.log("this is fire fox");
    return (
      <div className="consent">
        <h1 className="bp3-heading" style={{ textAlign: "center", color: "red" }}>
          DO NOT USE FIREFOX!!
        </h1>
        <p style={{ textAlign: "center" }}>
          Please, don't use firefox! It breaks our game and ruins the experience
          for your potential teammates!
        </p>
      </div>
    );
  };

  render() {
    const browserHandler = {
      default: browser =>
        browser === "firefox" ? this.renderNoFirefox() : Consent.renderConsent()
    };

    return (
      <Centered>
        <BrowserDetection>{browserHandler}</BrowserDetection>
      </Centered>
    );
  }
}
