import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../App";
import styled from "styled-components";

function Navigation() {
  const localGlobal = useContext(GlobalContext);
  const local_set_categoryFilter = localGlobal.set_categoryFilter;

  //Set a category selection state-variable in order to save the current state.
  const [categorySelection, set_categorySelection] = useState("navTrending");

  function scr_selectionMade(arg_selection) {

    switch (arg_selection) {
      case "navTrending":
        local_set_categoryFilter("all");
        break;
      case "navAll":
        local_set_categoryFilter("all");
        break;
      case "navPolitics":
        local_set_categoryFilter("politics");
        break;
      case "navEconomy":
        local_set_categoryFilter("economy");
        break;
      case "navGossip":
        local_set_categoryFilter("gossip");
        break;
      case "navTech":
        local_set_categoryFilter("tech");
        break;
    }
  }

  return (
    <div className="navbar">
      <Link
        id="navTrending"
        className="navlink"
        to="/"
        onClick={() => scr_selectionMade("navTrending")}
      >
        trending
      </Link>
      <Link
        id="navPolitics"
        className="navlink"
        to="/politics"
        onClick={() => scr_selectionMade("navPolitics")}
      >
        politics
      </Link>
      <Link
        id="navEconomy"
        className="navlink"
        to="/economy"
        onClick={() => scr_selectionMade("navEconomy")}
      >
        economy
      </Link>
      <Link
        id="navGossip"
        className="navlink"
        to="/gossip"
        onClick={() => scr_selectionMade("navGossip")}
      >
        gossip
      </Link>
      <Link
        id="navTech"
        className="navlink"
        to="/tech"
        onClick={() => scr_selectionMade("navTech")}
      >
        tech
      </Link>
  
    </div>
  );
}

export default Navigation;
