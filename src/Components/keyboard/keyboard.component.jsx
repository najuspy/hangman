import React from "react";

import "./keyboard.styles.scss";

import KeyButton from "../KeyButton/KeyButton.component";

import Keywords from "../../Helper/keyGenerator";

const KeyBoard = () => {
  return (
    <div className="keyboard-container">
      {Keywords.map((word, index) => (
        <KeyButton word={word} key={index} />
      ))}
    </div>
  );
};

export default KeyBoard;
