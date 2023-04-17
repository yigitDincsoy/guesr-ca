import React, { useContext } from "react";
import { GlobalContext } from "../App";

import Infobox from "./Infobox/Infobox";

function Main() {
  const localGlobal = useContext(GlobalContext);
  const localServerData = localGlobal.serverData_question.data;


  //Filter the data according to the user selection and create a new, smaller question array to be used for rendering
  let categoryFilter = localGlobal.categoryFilter;
  let filtered_qData = [];

  for (let i = 0; i < localServerData.length; i++) {
    if (categoryFilter == "all") {
      filtered_qData.push(localServerData[i]);
    } else if (localServerData[i].category == categoryFilter)
    {
      filtered_qData.push(localServerData[i]);
    }
    


 


  }

  //Create another array, that determines how many Infoboxes should be rendered on the screen
  let toRender_boxes = [];
  for (let i = 0; i < filtered_qData.length; i++) {
     toRender_boxes.push(
   <Infobox className="Infobox" data={filtered_qData[i]}  localID={i}/>
    );
  }

 

  return (
  <div className="mainArea">{toRender_boxes}</div>
  );
}

export default Main;
