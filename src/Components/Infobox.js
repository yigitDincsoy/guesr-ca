
import styled from "styled-components";

//OUT-OF-FUNCTION LOGIC
const myBackgroundColor = "white";

const pastelColours = [
    "#836953","#89cff0","#99c5c4","#aa9499","#aaf0d1","#b2fba5","#9adedb","#b39eb5","#bdb0d0","#bee7a5","#befd73","#c1c6fc","#c6a4a4","#c8fb0","#cb99c9","#cef0cc","#cfcfc4","#d6fffe","#d8a1c4","#dea5a4","#deece1","#dfd8e1","#e5d9d3","#e9d1bf","#f49ac2","#f4bfff","#fdfd96","#ff6961","#ff964f","#ff9899","#ffb7ce","#ca9bf7", "#77dd77"];


//STYLED COMPONENTS
const InfoboxTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  min-height: 3rem;
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoboxImage = styled.img`
  width: 100%;
`;

const InfoboxButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoboxButton = styled.button`
  width: 51%;
  margin-bottom: 10px;
`;

const InfoboxWrapper = styled.section`
  background-color: ${props => props.bgColor ? props.bgColor : "white"};
  border: 3px solid white;
  width: 30%;
  margin: auto;
  margin-bottom: 5%;
  margin-left: 1%;
  margin-right: 1%;
  min-height: 30rem;
  max-height: 30rem;

  & .imageText {
    font-size: 1.5rem;
    position: relative;
    top: -30px;
    right: -3px;
    color: white; 
    height: 0px;
    font-weight: 1000;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
      }

    & .Green {
      margin-left: 5px;
      background-color: green;
      padding: 5px;
      color: white;
      }
      
    & .Red {
      background-color: darkred;
      padding: 5px;
      color: white;
      }

`;



function Infobox(props) {
  const boxData = props.data;

  return (
    <InfoboxWrapper bgColor={pastelColours[boxData["id"]]}>
      <InfoboxImage src={"stockphotos/" + boxData["photo"]} />
      <div className="imageText">{boxData["category"]}</div>
      <p>5 Days 3 Hours</p>
      <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
      <InfoboxButtonArea>
          <InfoboxButton>Yes ({boxData["rewardRates"][0]})</InfoboxButton>
          <InfoboxButton>No ({boxData["rewardRates"][1]})</InfoboxButton>
      </InfoboxButtonArea>
      <p><span className="Green">{boxData["totalGuesses"][0]} 👍</span><span className="Red"> {boxData["totalGuesses"][1]} 👎</span></p>
    </InfoboxWrapper>
  );
}

export default Infobox;
