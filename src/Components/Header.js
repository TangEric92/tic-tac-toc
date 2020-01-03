import React from "react";

class Header extends React.Component {
  render = () => {
    const { nextPlayer, winner } = this.props;

    if (winner) {
      return (
        <div className="header">
          Le gagnant est
          <span
            style={{
              paddingLeft: 5,
              color: nextPlayer === "X" ? "white" : "black"
            }}
          >
            {nextPlayer}
          </span>
        </div>
      );
    } else {
      return (
        <div className="header">
          C'est au tour de
          <span
            style={{
              paddingLeft: 5,
              color: nextPlayer === "X" ? "white" : "black"
            }}
          >
            {nextPlayer}
          </span>
        </div>
      );
    }
  };
}

export default Header;
