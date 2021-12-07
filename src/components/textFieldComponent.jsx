import React from "react";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

const CalculationTextBox = (props) => {
  const { latex, setLatex, mathfield } = props;
  return (
    <React.Fragment>
      <div>
        <h3>Enter your calculation here</h3>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined"> */}
        <EditableMathField
          id="my"
          style={{
            width: "100%",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
          config={{
            spaceBehavesLikeTab: true,
          }}
          mathquillDidMount={(mf) => {
            mathfield.current = mf;
          }}
        />
        {/* For the personal refference */}
        <p>{latex}</p>
      </div>
    </React.Fragment>
  );
};

export default CalculationTextBox;
