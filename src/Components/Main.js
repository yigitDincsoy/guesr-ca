import Infobox from './Infobox'
import questionData from './FakeData';


function Main()  {
    return(
 
            <div className="mainArea">
            <Infobox className="Infobox" data={questionData[0]}/>
            <Infobox className="Infobox" data={questionData[1]}/>
            <Infobox className="Infobox" data={questionData[2]}/>
            <Infobox className="Infobox" data={questionData[3]}/>
            <Infobox className="Infobox" data={questionData[4]}/>
            <Infobox className="Infobox" data={questionData[5]}/>
            <Infobox className="Infobox" data={questionData[6]}/>
            <Infobox className="Infobox" data={questionData[7]}/>
            <Infobox className="Infobox" data={questionData[8]}/>
          
            </div>
    )
}


export default Main;
