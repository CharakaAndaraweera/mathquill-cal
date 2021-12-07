import React from "react";
import { Button, Grid } from "@mui/material";
import { addStyles } from "react-mathquill";

addStyles();
const ButtonsSetThreeComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\forall")}
          style={{ textTransform: "lowercase" }}
        >
          &forall;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\mp")}
          style={{ textTransform: "lowercase" }}
        >
          &#8723;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("<")}
          style={{ textTransform: "lowercase" }}
        >
          &#60;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick(">")}
          style={{ textTransform: "lowercase" }}
        >
          &#62;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\le")}
          style={{ textTransform: "lowercase" }}
        >
          &#8804;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\ge")}
          style={{ textTransform: "lowercase" }}
        >
          &#8805;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\parallel")}
          style={{ textTransform: "lowercase" }}
        >
          &#8741;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\angle")}
          style={{ textTransform: "lowercase" }}
        >
          &#8736;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\infty")}
          style={{ textTransform: "lowercase" }}
        >
          &#8734;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\sim")}
          style={{ textTransform: "lowercase" }}
        >
          &#8764;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\oplus")}
          style={{ textTransform: "lowercase" }}
        >
          &#8853;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\otimes")}
          style={{ textTransform: "lowercase" }}
        >
          &#8855;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\because")}
          style={{ textTransform: "lowercase" }}
        >
          &#8757;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\therefore")}
          style={{ textTransform: "lowercase" }}
        >
          &#8756;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\Delta")}
          style={{ textTransform: "lowercase" }}
        >
          &#x2206;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\partial")}
          style={{ textTransform: "lowercase" }}
        >
          &#8706;
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsSetThreeComponent;
