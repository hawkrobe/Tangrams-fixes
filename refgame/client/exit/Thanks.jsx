import React from "react";

import {Centered} from "meteor/empirica:core";

export default class Thanks extends React.Component {
  static stepName = "Thanks";

  componentWillMount() {}

  exitMessage = (player, game) => {
    return (
        <div>
          {" "}
          <h1> Experimento Completado </h1>
          <br />
          <p>
            Tu puntuación{" "}
            <strong>
              <em>{player.get("bonus").toFixed(2) || 0}.</em>
            </strong>{" "}
          </p>
          <p>
            Gracias por tu participación. El objetivo de este experimento es
            entender cómo se establecen las convenciones lingüísticas dentro de
            una comunidad bilingüe como ocurre con la jerga y los dialectos en el
            mundo real.
          </p>
        </div>
    );
  };

  render() {
    const { player, game } = this.props;
    if(!game) {
      return <h1> Error generating code! Please contact requester. </h1>
    }
    return (
      <Centered>
        <div className="game finished">
          {this.exitMessage(player, game)}
          <hr />
          <div className="pt-non-ideal-state-description">
          </div>
        </div>
      </Centered>
    );
  }
}
