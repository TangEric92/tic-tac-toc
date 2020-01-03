import React from "react";

class Case extends React.Component {
  render = () => {
    const { onClick, state } = this.props;
    // onClick qui va mettre a jour le state correspondant a la case
    // state qui est l'état actuel de la case

    return (
      <div
        className="case"
        onClick={onClick}
        style={{ color: state === "X" ? "white" : "black" }}
      >
        {state}
      </div>
    );
  };
}

export default Case;
