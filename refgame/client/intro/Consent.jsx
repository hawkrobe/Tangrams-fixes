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
          Esta investigación la llevan a cabo Robert Hawkins, investigador postdoctoral,
          Irina Liu y Alicia Chen, asistentes de investigación, y Tom Griffiths, profesor,
          todos forman parte de la Universidad de Princeton. Este estudio dura aproximadamente 30 minutos, pero
          variará un poco en función del tiempo que tenga que esperar a que se incorporen otros participantes.

            consent to participate. Read this information carefully. If you
          Su participación en esta investigación es voluntaria. Puede negarse a participar,
          y puede dejar de participar en cualquier momento. Puede dejar de participar
          en este estudio en cualquier momento sin penalización alguna. A continuación encontrará una descripción del proyecto de investigación y su
          consentimiento para participar. Lea atentamente esta información. Si acepta participar, haga clic en "Acepto" para indicar que ha leído y
          comprendido la información facilitada en este formulario de consentimiento.
          </p>

          <h5 className="bp3-heading">PROCEDIMIENTO</h5>
          <p>
          Si acepta participar en la investigación, jugará a una serie de juegos de comunicación
          con otros participantes: uno de ustedes describirá una imagen para que el otro la elija entre
          una serie de imágenes. Toda la información que obtengamos durante la investigación será
          confidencial y no se asociará a su nombre en modo alguno. Sin embargo, sí
          se asociará a su identificación de participante. Una vez finalizado el estudio, sustituiremos su ID de participante por un código aleatorio.
          </p>

          <h5 className="bp3-heading">Beneficios y Riesgos</h5>
          <p>
            <strong>Benefits:</strong> El equipo de investigación espera comprender mejor
            cómo los seres humanos se comunican y resuelven problemas juntos.
            Los resultados se compratirán en una o más publicaciones académicas. Usted recibirá
            su pago tras completar esta sesión, así como cualquier beneficio público
            que pueda derivarse de la divulgación de los resultados entre la
            comunidad científica y el público en general.{" "}
          </p>
          <p>
            <strong>Riesgos: </strong> Durante su participación, puede
            experimentar frustración si no es capaz de comunicarse eficazmente con su compañero o si uno de sus compañeros se desconecta y termina el juego antes de tiempo.
            Para ayudar a reducir estos riesgos, el equipo de investigación incluirá pasos de comprobación de la comprensión
            para asegurarse de que todos los participantes entienden la tarea.
          </p>

          <h5 className="bp3-heading">SU CONSENTIMIENTO PARA PARTICIPAR</h5>
          <p>
          Usted declara que tiene pleno derecho y autoridad para firmar
          este formulario y, si es menor de edad, que cuenta con el consentimiento
          de su tutor legal para firmar y aceptar este formulario. Al firmar este formulario, confirma que comprende la
          propósito del proyecto y la forma en que se llevará a cabo y consiente en
          participar en los términos expuestos anteriormente.

          Si tiene alguna pregunta sobre esta investigación, no dude en ponerse en contacto con Robert
          Hawkins a través de hawkrobe@gmail.com. Si tiene alguna pregunta sobre sus derechos o trato
          como participante en este proyecto de investigación, póngase en contacto con la Oficina de
          Integridad y Garantía de la Investigación de la Unuiversidad de Princeton por teléfono
          al 609-258-0865 o por correo electrónico a través de ria@princeton.edu.
          </p>

          <p>
          Al dar su consentimiento para participar, reconoce que es mayor de 18 años,
          ha leído este formulario de consentimiento, está de acuerdo con su contenido y acepta participar en esta investigación.
          Si no desea dar su consentimiento, cierre esta página y devuelva la tarea.
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
