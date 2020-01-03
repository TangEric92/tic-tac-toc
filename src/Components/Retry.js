import React from "react";

class Retry extends React.Component {
  render = () => {
    const { onClick, display } = this.props;

    // Désolé Farid
    return (
      <div className={display ? "retry" : "retry-hidden"} onClick={onClick}>
        Rejouer la partie
      </div>
    );
  };
}

export default Retry;
