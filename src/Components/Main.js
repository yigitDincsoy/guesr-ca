import Infobox from './Infobox'


const questionData = {
    0: {
    id:0,
    category: "Rumour",
    title: "Will Elon Musk tweet about Dogecoin this week?",
    photo: "elon.png",
    options: ["Yes", "No"],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  1: {
    id:1,
    category: "Politics",
    title: "Who will win Oscars tonight?",
    photo: "oscar.png",
    options: ["Dean Tsaltas", "Naruto Uzumaki", "Tim Horton", "Someone Else"],
    openDate: new Date("2022-01-15"),
    closeDate: new Date("2023-01-15"),
  },
  2: {
    id:2,
    category: "Gaming",
    photo: "gamer.png",
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
