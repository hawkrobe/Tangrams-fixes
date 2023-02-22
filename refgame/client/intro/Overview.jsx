import React from "react";

import { Centered } from "meteor/empirica:core";
import { Button } from "@blueprintjs/core";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1 className={"bp3-heading"}> Descripción del Juego </h1>
          <p>
            Esta tarea se trata de un juego en equipo en donde verán una serie de imágenes
            como en el siguiente ejemplo:
          </p>

          <div className="image">
            <center><img width="300px" src="/experiment/tangrams.PNG" /></center>
          </div>

          <p>
            En el juego hay dos roles que se asignarán al azar.
            Uno de ustedes será el <strong>DIRECTOR</strong> y el otro será el {" "}
            <strong>MATCHER</strong>.
          </p>

          <p>
            El DIRECTOR, verá una caja negra
            marcando una de las imágenes como el {" "} <strong>target</strong>.
          </p>

          <div className="image">
            <center><img width="300px" src="/experiment/target.PNG" /></center>
          </div>

          <p>
            La tarea del DIRECTOR consiste en describir el target lo mejor posible a través del
            chatbox para que el MATCHER pueda elegirlo correctamente entre las opciones.
            Pueden escribir cualquier descripción que se crea oportuna y en cualquier idioma(s)
            como lo harían normalmente en un chat.
            OJO: Tomen en cuenta que las imágenes están mezcladas y cambian de orden
            aleatoriamente en cada ronda. Descripciones como "la de la izquierda", "la de abajo", o
            "el segundo" no funcionarán. Por favor, limiten el chat a la descripción del target de cada
            ronda. No hagan referencias a otras rondas ni escriban sobre otros temas.
          </p>

          <div className="image">
            <center><img width="250px" src="/experiment/typing.PNG" /></center>
            <br/>
          </div>

          <p>
            El MATCHER también puede responder a través del chat.
            En cuanto el MATCHER elija una de las imágenes, ambos recibirán feedback.
            El DIRECTOR verá qué imagen seleccionó el MATCHER y el MATCHER verá el target
            correcto.
          </p>

          <p>
            La comunicación y el trabajo en equipo son esenciales, por lo que <strong>ambos
            recibirán la misma puntuación en cada ronda </strong>.
            Para cada respuesta acertada, recibirán un {" "} <strong> bono de 3 puntos </strong> así
            que ¡presenten atención!
          </p>

          <button
            type="button"
            className="bp3-button bp3-intent-nope bp3-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Atrás
          </button>
          <button
            type="button"
            className="bp3-button bp3-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Continuar
            <span className="bp3-icon-standard bp3-icon-double-chevron-right bp3-align-right"/>
          </button>
        </div>
      </Centered>
    );
  }
}
