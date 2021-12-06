import { Container, CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import MathCalc2 from "./components/math-calc2";
import MathematicTypesTabs from "./components/tabPanelComponent";
import CalculationTextBox from "./components/textFieldComponent";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <MathCalc2 />
        {/* <CalculationTextBox />
        <MathematicTypesTabs /> */}
      </Container>
    </React.Fragment>
  );
}

export default App;
