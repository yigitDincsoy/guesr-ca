import Infobox from './Infobox'


const questionData = {
    0: {
    category: "Rumour",
    title: "Will Elon Musk tweet about Dogecoin this week?",
    options: ["Yes", "No"],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  1: {
    category: "Politics",
    title: "Who will win Oscars tonight?",
    options: ["Dean Tsaltas", "Naruto Uzumaki", "Tim Horton", "Someone Else"],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  2: {
    category: "Gaming",
    title: "Will Counter Strike 2 announced this month?",
    options: ["Yes", "No"],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
}
;


function Main()
{
    return(
            <div className="mainArea">
            <Infobox data={questionData[0]}/>
            <Infobox data={questionData[1]}/>
            <Infobox data={questionData[2]}/>
            </div>
    )
}


export default Main;
