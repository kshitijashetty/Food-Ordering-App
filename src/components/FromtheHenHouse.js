import React from "react";
import { Grid, Container } from "./GridCon";
import Card from "./Card";

export default function FromtheHenHouse(props) {
  return (
    <Grid>
      <Container />
      {props.menu.map((x, i) => (
        <Card con={x} key={i} id={`FHH${i}`} fCo={props.updateCount} />
      ))}
    </Grid>
  );
}
