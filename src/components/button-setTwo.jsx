import React from "react";
import { Button, Grid } from "@mui/material";
import { addStyles } from "react-mathquill";

addStyles();
const ButtonsSetTwoComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\in")}
          style={{ textTransform: "lowercase" }}
        >
          &isin;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\approx")}
          style={{ textTransform: "lowercase" }}
        >
          &asymp;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\notin")}
          style={{ textTransform: "lowercase" }}
        >
          &notin;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\ni")}
          style={{ textTransform: "lowercase" }}
        >
          &#8715;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\cup")}
          style={{ textTransform: "lowercase" }}
        >
          &#8746;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\cap")}
          style={{ textTransform: "lowercase" }}
        >
          &#8745;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\subset")}
          style={{ textTransform: "lowercase" }}
        >
          &#8834;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\supset")}
          style={{ textTransform: "lowercase" }}
        >
          &#8835;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\wedge")}
          style={{ textTransform: "lowercase" }}
        >
          &#8896;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\vee")}
          style={{ textTransform: "lowercase" }}
        >
          &#8897;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\neg")}
          style={{ textTransform: "lowercase" }}
        >
          &#172;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\exists")}
          style={{ textTransform: "lowercase" }}
        >
          &#8707;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\ast")}
          style={{ textTransform: "lowercase" }}
        >
          &#8727;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\circ")}
          style={{ textTransform: "lowercase" }}
        >
          &#8728;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\odot")}
          style={{ textTransform: "lowercase" }}
        >
          &#8857;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\perp")}
          style={{ textTransform: "lowercase" }}
        >
          &#8869;
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsSetTwoComponent;
