import React from "react";
import styled from "styled-components";
import useLocalStorage from "./useLocalStorage";
const Card = styled.div`
  display: grid;
  place-items: center;
  border: 2px solid;
  width: 90%;
  height: auto;
  padding: 20px;
  margin: 0.5%;
  color: #f38024;
  background: white;
  &:hover {
    background: #f38024;
    color: white;
  }
`;
const Flex = styled.div`
  display: flex;
  width: 100%;
  color: inherit;
`;
const EFlex = styled(Flex)`
  align-items: end;
  justify-content: flex-end;
  width: 30%;
`;

const Grid = styled.div`
  display: grid;
  place-items: start;
  text-align: start;
  width: 70%;
  color: inherit;
`;
const H3 = styled.h3`
  color: inherit;
`;
const H5 = styled.h5`
  color: inherit;
`;
const Img = styled.img`
  width: 100px;
  margin: 2%;
  height: 100px;
  border: 2px solid;
`;
const Green = styled.div`
  background: #007e00;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;
const GBox = styled.div`
  display: grid;
  place-items: center;
  border: 2px #007e00 solid;
  width: 16px;
  height: 16px;
  margin-right: 2%;
`;
const Red = styled.div`
  background: #913f21;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;
const RBox = styled.div`
  display: grid;
  place-items: center;
  border: 2px #913f21 solid;
  width: 16px;
  height: 16px;
  margin-right: 2%;
`;
const ARButton = styled.button`
  border: 0;
  margin: 5px;
  color: white;
`;
const ARCon = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 1%;
  background: #46a049;
  margin-top: 1%;
`;
const Count = styled.div`
  border: 0;
  margin: 5px;
  color: white;
`;
const CustAv = styled.h5`
  color: #0077cc;
`;
export default function FromTheBarnyard(props) {
  var [count, setCount] = useLocalStorage(`${props.id}`, 0);
  console.log(props.id);
  return (
    <Card>
      <Flex>
        <Grid>
          <H3>
            <Flex>
              {props.con.dish_Type === 1 ? (
                <RBox>
                  <Red />
                </RBox>
              ) : (
                <GBox>
                  <Green />
                </GBox>
              )}
              {props.con.dish_name}
            </Flex>
          </H3>
          <H5>
            {`${props.con.dish_currency} ${props.con.dish_price}`}
            <br /> {`${props.con.dish_calories} Calories`}
          </H5>
          {props.con.dish_description}
          <br />
          <ARCon>
            <ARButton
              onClick={() => {
                setCount(count + 1);
                props.fCo("A", true);
              }}
            >
              &#43;
            </ARButton>
            <Count>{count}</Count>
            <ARButton
              onClick={() => {
                setCount(count - 1 < 0 ? 0 : count - 1);
                props.fCo("R", count - 1 < 0 ? false : true);
              }}
            >
              &#45;
            </ARButton>
          </ARCon>
          <br />
          {props.con.addonCat.length ? (
            <CustAv>Customizations available</CustAv>
          ) : null}
        </Grid>
        <EFlex>
          {/* <Img src={props.con.dish_image} alt="new" /> */}
          <Img src="data:image/jpeg;base64,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" />
        </EFlex>
      </Flex>
    </Card>
  );
}
