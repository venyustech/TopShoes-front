import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family) ;

`
const CodeWrapper = styled.div`
    margin: 0 10%;
    width: 80%;
    @media(max-width: 600px) {
        width: 95%; 
    }
`
const Title = styled.h1`
    font-size: 20px;
    letter-spacing: 0.2em;
    margin: 40px 0px;

`
const SubTitle = styled.h3`
    font-size: 12px;
    letter-spacing: 0.2em;
    margin: 10px 0px;
`
const Text = styled.h4`
    font-size: 12px;
`
const SectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2{
        font-size: 20px;
        letter-spacing: 0.2em;
    }
    @media(max-width: 400px) {
        flex-direction: column;
        align-items: center;
    }
`
const SendWrapper = styled.div`

    width: 40%;
    @media(max-width: 400px) {
        width: 100%;
    }
`
const DevolutionWrapper = styled.div`
    width: 40%;
     @media(max-width: 400px) {
        width: 100%;
    }
`
const HorizontalBar = styled.div`
    margin: 20px 0px;
    height: 1px;
    width: 50px;
    background-color: #000;
`
const SendBox = styled.div`
    width: 100%;
    margin-bottom: 30px;
`
export {
    Container, CodeWrapper, Title, SendWrapper, DevolutionWrapper,
    SectionsWrapper, HorizontalBar, SendBox, SubTitle, Text
}

