import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Biryani from "./components/Biryani";
import FastFood from "./components/FastFood";
import FreshFromTheSea from "./components/FreshFromTheSea";
import FromTheBarnyard from "./components/FromTheBarnyard";
import FromtheHenHouse from "./components/FromtheHenHouse";
import SaladsandSoups from "./components/SaladsandSoups";
import About from "./components/About";

const SLink = styled(Link)`
  padding: 15px;
  background: inherit;
  color: grey;
  text-decoration: none;
`;
const Flex = styled.div`
  position: fixed;
  display: flex;
  background: white;
  top: 12%;
  width: 100%;
  border-bottom: 1px lightgrey solid;
  overflow: auto;
  white-space: nowrap;
`;

const H1 = styled.h1`
  position: fixed;
  height: 10%;
  width: 100%;
  padding: 2%;
  margin: 0;
  background: white;
  display: flex;
  justify-content: center;
`;
const CoDiv = styled.div`
  transform: scale(0.5);
  position: relative;
  top: -10px;
  left: -5px;
`;

export default function App() {
  var [data, setData] = useState([]);
  var [cat, setCat] = useState([]);
  var [countC, setCountC] = useState(0);

  const updateCount = (ac, bool) => {
    return ac === "A"
      ? setCountC(countC + 1)
      : bool
      ? setCountC(countC - 1)
      : null;
  };

  const selected = (i) => {
    [0, 0, 0, 0, 0, 0].map((x, j) =>
      i === j
        ? document.getElementById(j).classList.add("sel")
        : document.getElementById(j).classList.remove("sel")
    );
  };
  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
      .then((response) => {
        setData(response.data);
        setCat(response.data[0].table_menu_list.map((x) => x.menu_category));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <H1>
        {data[0] ? data[0].restaurant_name : ""}
        &#x1F6D2; <CoDiv>{countC}</CoDiv>
      </H1>
      <Router>
        <Flex>
          {cat.map((x, i) => (
            <SLink
              key={i}
              id={i}
              to={`/${x.replaceAll(" ", "")}`}
              onClick={() => selected(i)}
            >
              {x}
            </SLink>
          ))}
        </Flex>
        {data.length ? (
          <Switch>
            <Route
              path="/SaladsandSoup"
              render={(props) => (
                <SaladsandSoups
                  menu={
                    data.length
                      ? data[0].table_menu_list[0].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
            ></Route>
            <Route
              path="/FromTheBarnyard"
              render={(props) => (
                <FromTheBarnyard
                  menu={
                    data.length
                      ? data[0].table_menu_list[1].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
            ></Route>
            <Route
              render={(props) => (
                <FromtheHenHouse
                  menu={
                    data.length
                      ? data[0].table_menu_list[2].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
              path="/FromtheHenHouse"
            ></Route>

            <Route
              render={(props) => (
                <FreshFromTheSea
                  menu={
                    data.length
                      ? data[0].table_menu_list[3].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
              path="/FreshFromTheSea"
            ></Route>
            <Route
              render={(props) => (
                <Biryani
                  menu={
                    data.length
                      ? data[0].table_menu_list[4].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
              path="/Biryani"
            ></Route>
            <Route
              render={(props) => (
                <FastFood
                  menu={
                    data.length
                      ? data[0].table_menu_list[5].category_dishes
                      : ""
                  }
                  updateCount={updateCount}
                />
              )}
              path="/FastFood"
            ></Route>
            <Route path="/" component={About}></Route>
          </Switch>
        ) : null}
      </Router>
    </div>
  );
}
