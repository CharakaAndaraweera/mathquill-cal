import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
addStyles();

const EditableMathExample = () => {
  const [latex, setLatex] = useState("");
  const mathfield = useRef(null);

  const addText = (p) => {
    mathfield.current.cmd(p);
    mathfield.current.focus();
    // return (
    //   document.getElementById("my") ==
    //   (
    //     <EditableMathField
    //       style={{
    //         width: "100%",
    //       }}
    //       latex={latex}
    //       mathquillDidMount={(mathField) => {
    //         mathField.cmd(p);
    //         mathField.focus();
    //         setLatex(mathField.latex());
    //       }}
    //       onChange={(mathField) => {
    //         setLatex(mathField.latex());
    //       }}
    //       config={{
    //         spaceBehavesLikeTab: true,
    //       }}
    //     />
    //   )
    // );
  };

  return (
    <React.Fragment>
      <div>
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
        <p>{latex}</p>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "lowercase" }}
          onClick={() => addText("\\frac")}
        >
          &radic;{" "}
        </Button>
      </div>
    </React.Fragment>
  );
};

const MathCalc2 = () => (
  <div>
    <h2>Calculations Here</h2>
    <EditableMathExample />
    <br />
  </div>
);

export default MathCalc2;
