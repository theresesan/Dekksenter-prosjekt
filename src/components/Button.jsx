import React from "react";

const Button = () => {
  function handleClick() {
    window.open("https://sannidal.dekkshop.no/shop/home", "_blank");
  }

  return (
    <button className="Shop-btn" onClick={handleClick}>
      Dekkshop
    </button>
  );
};

export default Button;
