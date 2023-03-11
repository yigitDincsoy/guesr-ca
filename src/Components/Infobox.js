import styled from "styled-components";



//STYLED COMPONENTS
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border: 2px solid black;
  width: 30%;
  margin: auto;
  margin-bottom: 5%;
  height: 20rem;
`;

function Infobox(props) {
    const boxData = props.data;
  return (
    <Wrapper>
        {boxData["title"]}
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
  );
}

export default Infobox;
