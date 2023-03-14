import {Link} from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { GlobalContext } from "../App";
import styled from "styled-components";

function Navigation(){
    const localGlobal = useContext(GlobalContext);
    const local_set_userSelection = localGlobal.set_userSelection;

    //Set a category selection state-variable in order to save the current state.
    const [categorySelection, set_categorySelection] = useState("navPopular");
    
    function scr_selectionMade(arg_selection) {
        //Update the state-variable according to user selection
        set_categorySelection(arg_selection);
        //Reset the previous selection to white
        document.getElementById(categorySelection).style.color="white";
        //Set the new variable to blue
        if (arg_selection != "navPopular") {
        document.getElementById(arg_selection).style.color="yellow";
    }
        switch (arg_selection) {
            case "navPopular":
                local_set_userSelection("All")
            break;
            case "navAll":
                local_set_userSelection("All")
            break;
            case "navPolitics":
                local_set_userSelection("Politics")
            break;
            case "navEconomy": 
                local_set_userSelection("Economy")
            break;
            case "navSports":
                local_set_userSelection("Sports")
            break;
            case "navNews": 
                local_set_userSelection("News")
            break;
            case "navGossip":
                local_set_userSelection("Gossip")
            break;
            case "navTech": 
                local_set_userSelection("Tech")
            break;

        }
    }

    return(
        <div className="navbar">
            <Link id="navPopular" className="navlink" to="/" onClick={() => scr_selectionMade("navPopular")}>Popular</Link>
            <Link id="navPolitics" className="navlink" to="/politics" onClick={() => scr_selectionMade("navPolitics")}>Politics</Link>
            <Link id="navEconomy" className="navlink" to="/economy" onClick={() => scr_selectionMade("navEconomy")}>Economy</Link>
            <Link id="navSports" className="navlink" to="/sports" onClick={() => scr_selectionMade("navSports")}>Sports</Link>
            <Link id="navNews" className="navlink" to="/news" onClick={() => scr_selectionMade("navNews")}>News</Link>
            <Link id="navGossip" className="navlink" to="/gossip" onClick={() => scr_selectionMade("navGossip")}>Gossip</Link>
            <Link id="navTech" className="navlink" to="/tech" onClick={() => scr_selectionMade("navTech")}>Technology</Link>
            <Link id="navAll" className="navlink" to="/all" onClick={() => scr_selectionMade("navAll")}>All</Link>
        </div>
    )
}

export default Navigation