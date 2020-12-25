import React from "react";
import Card from "./Card";
import { Grid, Container } from "./GridCon";

export default function Biryani(props) {
  return (
    <Grid>
      <Container />
      {props.menu.map((x, i) => (
        <Card con={x} key={i} id={`B${i}`} fCo={props.updateCount} />
      ))}
    </Grid>
  );
}
