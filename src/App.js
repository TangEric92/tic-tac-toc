import React from "react";
import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Grid from "./Components/Grid";
import Case from "./Components/Case";
import Line from "./Components/Line";

class App extends React.Component {
  state = {
    case11: null,
    case12: null,
    case13: null,
    case21: null,
    case22: null,
    case23: null,
    case31: null,
    case32: null,
    case33: null,
    xIsNext: true
  };

  winner = null;

  // line est un tableau avec 3 elements => [case11, case12, case13]
  // lineNbr qui est la position de la ligne
  createLine = (line, lineNbr) => {
    const generetedLine = line.map((elem, j) => (
      <Case
        state={elem}
        onClick={() => {
          // Si l'elem (etant le state de la case) est assigné a qqch on skip le onClick
          if (elem !== null || this.winner !== null) return;

          // i est la ligne, on met +1 car on commence a 0
          // j est la colonne, on met +1 car on commence a 0
          // caseName est le nom de la variable stocké dans le state
          const caseName = `case${lineNbr + 1}${j + 1}`;

          // On fait ça car on a besoin du nom de la variable du state pour la mettre a jour
          this.setState({
            [caseName]: this.nextPlayer, // ici on met caseName entre [] car on interprete son contenu
            xIsNext: !this.state.xIsNext
          });
        }}
      />
    ));

    // generetedLine est l'ensemble des 3 cases précédement generées
    // On l'encapsule dans un component Line
    return <Line>{generetedLine}</Line>;
  };

  nextTurn = () => {
    // On passe pas au tour suivant si il y a un gagnant
    if (this.winner !== null) return;

    this.nextPlayer = "O"; // Par default c'est au joueur O
    if (this.state.xIsNext) {
      // SI le prochain est le joueur X
      this.nextPlayer = "X"; // On set nextPlayer a X
    }
  };

  checkIfWinner = () => {
    // On enumere toute les possibilitées
    const possibilities = [
      // horizontal
      [this.state.case11, this.state.case12, this.state.case13],
      [this.state.case21, this.state.case22, this.state.case23],
      [this.state.case31, this.state.case32, this.state.case33],
      // vertical
      [this.state.case11, this.state.case21, this.state.case31],
      [this.state.case12, this.state.case22, this.state.case32],
      [this.state.case13, this.state.case23, this.state.case33],
      // diagonal
      [this.state.case11, this.state.case22, this.state.case33],
      [this.state.case13, this.state.case22, this.state.case31]
    ];

    // On check chaque possibilitées
    for (let i = 0; i < possibilities.length; i++) {
      // On recupere une possibilité
      const possibility = possibilities[i];

      // On check si CHAQUE element de la ligne est identique
      const sameValueOnpossibility =
        possibility[0] === possibility[1] && possibility[1] === possibility[2];

      // Si oui et different de null on retourne le vainqueur
      if (sameValueOnpossibility && possibility[0] !== null) {
        return possibility[0];
      }
    }
    return null;
  };

  render = () => {
    // Ici on transforme les states en tableau de tableau
    // A l'image d'un morpion
    this.morpion = [
      [this.state.case11, this.state.case12, this.state.case13],
      [this.state.case21, this.state.case22, this.state.case23],
      [this.state.case31, this.state.case32, this.state.case33]
    ];

    // Ici on recuperer le gagnant si il y en a un
    this.winner = this.checkIfWinner();

    // Ici on appelle la fonction qui permet de préparer le tour suivant
    this.nextTurn();

    return (
      <div className="App">
        <Header winner={this.winner} nextPlayer={this.nextPlayer} />
        <Grid>
          {this.morpion.map((line, i) => {
            return this.createLine(line, i);
          })}
        </Grid>
      </div>
    );
  };
}

export default App;
