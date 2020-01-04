import React from "react";

function Retry(props) {
  const { onClick, display } = props;

  // Désolé Farid
  return (
    <div className={display ? "retry" : "retry-hidden"} onClick={onClick}>
      Rejouer la partie
    </div>
  );
}

export default Retry;
