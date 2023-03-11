import styled from "styled-components";



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
  background: papayawhip;
  border: 2px solid black;
  width:50%;
  margin: auto;
  margin-bottom: 5%;
  min-height: 20rem;
`;

function Infobox(props) {
    const boxData = props.data;
  return (
    <Wrapper>
        <InfoboxImage  src={"stockphotos/"+boxData["photo"]} />
        <InfoboxTitle>{boxData["title"]}</InfoboxTitle>
        <InfoboxButtonArea>
        <InfoboxButton>Option 1</InfoboxButton>
        <InfoboxButton>Option 2</InfoboxButton>
        </InfoboxButtonArea>
    </Wrapper>
  );
}

export default Infobox;
