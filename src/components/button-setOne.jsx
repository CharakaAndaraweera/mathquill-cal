import React from "react";
import { Button, Grid } from "@mui/material";
import { addStyles, StaticMathField } from "react-mathquill";

addStyles();
const ButtonsComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\sqrt")}
          style={{ textTransform: "lowercase" }}
        >
          &radic;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("|")}
          style={{ textTransform: "lowercase" }}
        >
          |x|
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\nthroot")}
          style={{ textTransform: "lowercase" }}
        >
          n√x
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\frac")}
          style={{ textTransform: "lowercase", fontSize: "9px" }}
        >
          <StaticMathField>{"\\frac{x}{y}"}</StaticMathField>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("^")}
          style={{ textTransform: "lowercase" }}
        >
          <StaticMathField>{"{x}^{y}"}</StaticMathField>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("_")}
          style={{ textTransform: "lowercase" }}
        >
          <StaticMathField>{"{x}_{y}"}</StaticMathField>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("(")}
          style={{ textTransform: "lowercase" }}
        >
          ()
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("[")}
          style={{ textTransform: "lowercase" }}
        >
          []
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("{")}
          style={{ textTransform: "lowercase" }}
        >
          &#123; &#125;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("+")}
          style={{ textTransform: "lowercase" }}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("-")}
          style={{ textTransform: "lowercase" }}
        >
          -
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\times")}
          style={{ textTransform: "lowercase" }}
        >
          X
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\slash")}
          style={{ textTransform: "lowercase" }}
        >
          /
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\pm")}
          style={{ textTransform: "lowercase" }}
        >
          &#177;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\div")}
          style={{ textTransform: "lowercase" }}
        >
          &divide;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("=")}
          style={{ textTransform: "lowercase" }}
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsComponent;
