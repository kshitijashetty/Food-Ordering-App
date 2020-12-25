import React from "react";
import { Grid, Container } from "./GridCon";
import Card from "./Card";
export default function FastFood(props) {
  return (
    <Grid>
      <Container />
      {props.menu.map((x, i) => (
        <Card con={x} key={i} id={`FF${i}`} fCo={props.updateCount} />
      ))}
    </Grid>
  );
}
