import styled from 'styled-components';

//STYLED COMPONENTS
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `;

    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `;

function Infobox()
{
    return(
         
// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
    )
}


export default Infobox;
