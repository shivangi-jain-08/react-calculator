import React from "react";
import Button from "./Button";

const Buttons = ({ onACClick, onDelClick, onOperationClick, onEqualClick }) => {
  return (
    <div className="body calc-body">
      <div className="row calc-button-row">
        <Button onClick={onACClick} value="AC" className="ac" />
        <Button onClick={onDelClick} value="DEL" className="del" />
        <Button onClick={onOperationClick} value="/" className="opt" />
      </div>
      <div className="row calc-button-row">
        <Button onClick={onOperationClick} value="1" />
        <Button onClick={onOperationClick} value="2" />
        <Button onClick={onOperationClick} value="3" />
        <Button onClick={onOperationClick} value="*" className="opt" />
      </div>
      <div className="row calc-button-row">
        <Button onClick={onOperationClick} value="4" />
        <Button onClick={onOperationClick} value="5" />
        <Button onClick={onOperationClick} value="6" />
        <Button onClick={onOperationClick} value="-" className="opt" />
      </div>
      <div className="row calc-button-row">
        <Button onClick={onOperationClick} value="7" />
        <Button onClick={onOperationClick} value="8" />
        <Button onClick={onOperationClick} value="9" />
        <Button onClick={onOperationClick} value="+" className="opt" />
      </div>
      <div className="row calc-button-row">
        <Button onClick={onOperationClick} value="." />
        <Button onClick={onOperationClick} value="0" className="zero" />
        <Button onClick={onEqualClick} value="=" className="opt equal" />
      </div>
    </div>
  );
};

export default Buttons;
