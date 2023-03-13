import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import styled from "styled-components";

function Navigation()
{
    const [categorySelection, set_categorySelection] = useState("eyy");
    return(
        <div className="navbar">
            <Link className="navlink popular" to="/">Popular</Link>
            <Link className="navlink politics" to="/politics">Politics</Link>
            <Link className="navlink economy" to="/economy">Economy</Link>
            <Link className="navlink sports" to="/sports">Sports</Link>
            <Link className="navlink news" to="/news">News</Link>
            <Link className="navlink gossip" to="/gossip">Gossip</Link>
            <Link className="navlink tech" to="/tech">Technology</Link>
            <Link className="navlink all" to="/all">All</Link>
            <Link className="navlink market" to="/market">Market</Link>
        </div>
    )
}

export default Navigation