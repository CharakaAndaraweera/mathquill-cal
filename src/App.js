import { Container, CssBaseline } from "@mui/material";
import React, { useState, useRef } from "react";
import "./App.css";
import MathematicTypesTabs from "./components/tabPanelComponent";
import CalculationTextBox from "./components/textFieldComponent";

function App() {
  const [latex, setLatex] = useState("");
  const mathfield = useRef(null);

  const addText = (p) => {
    mathfield.current.cmd(p);
    mathfield.current.focus();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <MathCalc2 /> */}
        <CalculationTextBox
          latex={latex}
          setLatex={setLatex}
          mathfield={mathfield}
        />
        <MathematicTypesTabs onClick={addText} />
      </Container>
    </React.Fragment>
  );
}

export default App;
