import React, { Component } from "react";
import { Button, Grid } from "@mui/material";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

class MathCal extends Component {
  state = {
    latex: "",
  };
  addText = (p) => {
    return <EditableMathField latex={p} />;
  };
  render() {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <EditableMathField
            latex={this.state.latex}
            onChange={(mathField) => {
              this.setState({ latex: mathField.latex() });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "lowercase" }}
            onClick={() => this.addText("\\alpha")}
          >
            &alpha;{" "}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default MathCal;
