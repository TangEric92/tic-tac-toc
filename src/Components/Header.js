import React from "react";

function Header(props) {
  const { nextPlayer, winner } = props;
  const style = {
    paddingLeft: 5,
    color: nextPlayer === "X" ? "white" : "black"
  };

  return (
    <div className="header">
      {winner ? "Le gagnant est" : "C'est au tour de"}
      <span style={style}>{nextPlayer}</span>
    </div>
  );
}

export default Header;
