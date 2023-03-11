import styled from "styled-components";


//OUT-OF-FUNCTION LOGIC
const myBackgroundColor = "white";

const pastelColours = [
    "#77dd77","#836953","#89cff0","#99c5c4","#9adedb","#aa9499","#aaf0d1","#b2fba5","#b39eb5","#bdb0d0","#bee7a5","#befd73","#c1c6fc","#c6a4a4","#c8fb0","#cb99c9","#cef0cc","#cfcfc4","#d6fffe","#d8a1c4","#dea5a4","#deece1","#dfd8e1","#e5d9d3","#e9d1bf","#f49ac2","#f4bfff","#fdfd96","#ff6961","#ff964f","#ff9899","#ffb7ce","#ca9bf7"];


//STYLED COMPONENTS
const InfoboxTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
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

const Wrapper = styled.section`
  background: ${myBackgroundColor};
  border: 2px solid black;
  width: 50%;
  margin: auto;
  margin-bottom: 5%;
  min-height: 20rem;
`;



function Infobox(props) {
  const boxData = props.data;
  return (
    <Wrapper>
      <InfoboxImage src={"stockphotos/" + boxData["photo"]} />
      <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
      <InfoboxButtonArea>
        <InfoboxButton>Option 1</InfoboxButton>
        <InfoboxButton>Option 2</InfoboxButton>
      </InfoboxButtonArea>
    </Wrapper>
  );
}

export default Infobox;
