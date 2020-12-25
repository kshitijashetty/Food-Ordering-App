import React from "react";
import { Grid, Container } from "./GridCon";
import Card from "./Card";

export default function FromTheBarnyard(props) {
  return (
    <Grid>
      <Container />
      {props.menu.map((x, i) => (
        <Card con={x} key={i} id={`FTB${i}`} fCo={props.updateCount} />
      ))}
    </Grid>
  );
}
