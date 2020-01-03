import React from "react";

class Grid extends React.Component {
  render = () => {
    const lines = this.props.children; // Ici on recupere les 3 lignes
    /*
        [
            Line,
            Line,
            Line,
        ]
     */
    return <div className="grid">{lines}</div>;
  };
}

export default Grid;
