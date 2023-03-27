import React from "react";
import { Alert, Intent, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Centered, shared } from "meteor/empirica:core";

export default class Lobby extends React.Component {
    componentWillMount() {}
    state = {
        remainingTime : (1000 * 60 * 5),
        earlyExit : false
    }

  render() {
    const { gameLobby, treatment, player } = this.props;
    const total = treatment.factor("playerCount").value;
    const exisiting = gameLobby.playerIds.length;
    const timeElapsed = Date.now() - player.readyAt;
    const showExtensionAlert = timeElapsed > this.state.remainingTime;

    console.log(gameLobby)

    if (exisiting >= total) {
      return (
          <div className="core">
          <div className="game-lobby">
            <NonIdealState
              icon={IconNames.PLAY}
              title="Cargando el juego..."
              description="¡Prepárate, el juego está por comenzar!"
            />
          </div>
        </div>
      );
    } else if (this.state.earlyExit) {
      // player.set('exited', true)
      player.online = false
      player.exit("Gracias por esperar, y siento que no hubiera suficientes jugadores para que tu partida empezara a tiempo.")
    } else {
      return (
       <div className="core">
        <div className="game-lobby">
          <NonIdealState
            icon={IconNames.TIME}
            title="Lobby"
            description={
              <>
                <p>El juego está casi listo...</p>
                <p>
                  {exisiting} / {total} jugadores listos.
                </p>
                  <p> Llevas esperando {(timeElapsed / 1000 / 60).toFixed(2)} minutos.</p>
              </>
            }
          />
        </div>
        <Alert
          intent={Intent.PRIMARY}
          isOpen={showExtensionAlert}
          confirmButtonText="Esperar un poco más"
          cancelButtonText="Abandonar el juego"
          onConfirm={() => {this.state.remainingTime += (1000 * 60 * 5)}}
          onCancel={() => {this.state.earlyExit = true}}
        >
          <p>
            Sentimos la espera.
          </p>
        </Alert>
      </div>
    );
    }
  }
}//     render() {
//         const { player, gameLobby } = this.props;
//         return (
//         <header className="lobby">
//             <h1>Please wait until the game is ready...</h1>
//             <p>
//                 There are {gameLobby.readyCount} players ready out of{" "}
//                 {gameLobby.treatment.playerCount} expected total.
//             </p>
//         </header>
//     )
//   }
// }
