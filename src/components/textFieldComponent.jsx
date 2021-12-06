import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

const CalculationTextBox = () => {
  const [latex, setLatex] = useState("");
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
          mathquillDidMount={(mathField) => {
            mathField.focus();
          }}
        />
        {/* </TextField> */}
        <p>{latex}</p>
      </div>
    </React.Fragment>
  );
};

export default CalculationTextBox;
