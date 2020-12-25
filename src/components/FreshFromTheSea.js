import React from "react";
import { Grid, Container } from "./GridCon";
import Card from "./Card";

export default function FreshFromTheSea(props) {
  return (
    <Grid>
      <Container />
      {props.menu.map((x, i) => (
        <Card con={x} key={i} id={`FFS${i}`} fCo={props.updateCount} />
      ))}
    </Grid>
  );
}
