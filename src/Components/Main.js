import React, { useContext } from 'react';
import { ThemeContext } from "../App";

import Infobox from './Infobox'
import qData from './FakeData';



function Main()  {
    const darkTheme = useContext(ThemeContext);
    
    //Filter the data according to the user selection and create a new, smaller question array to be used for rendering
    let userSelection = "All";
    let filtered_qData = [];

    for (let i = 0; i < qData.length; i++) {

        if ((qData[i]["category"] == userSelection) || (userSelection == "All")) {
            filtered_qData.push(qData[i]);
        }
        
    }



    //Create another array, that determines how many Infoboxes should be rendered on the screen
    let toRender_boxes = [];
    for (let i = 0; i < filtered_qData.length; i++) {
        toRender_boxes.push(<Infobox className="Infobox" data={filtered_qData[i]}/>)
    }

    return(
            <div className="mainArea">
             {toRender_boxes}
             {darkTheme}
            </div>
    )
}


export default Main;
