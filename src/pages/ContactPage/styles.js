import styled from "styled-components";


const Container = styled.div`
    background-color: var(--background-color);
    font-family: var(--font-family);
    font-size: 14px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const InfosWrapper = styled.div`
    width: 90%;
    min-height: 100vh;
    padding-top: 36px;
`
const InfosBox = styled.div`
    display: flex;
    justify-content: center;
    
    gap:15px;
    width: 100%;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        form{
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

`
const InfosCard = styled.div`
    background-color: #D1E8D3;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    padding: 4px;
    margin-bottom: 20px;
    border: 1px solid var(--font-color);

    h2{
        font-size: 20px;
        letter-spacing: 0.2em;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        margin-top: 10px;
        font-style: italic;
    }
    div{
        border: 1px solid var(--font-color);
        padding: 40px 40px;
    }
`
const Bold = styled.span`
    font-weight: 700;
`
const ImgLogo = styled.img`

`
const Input = styled.input`
    all:unset;
    width:  90% ;
    padding: 8px 0px;
    border: 1px solid var(--font-color);
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;

    :focus{
        filter: brightness(95%);
    }
    ::placeholder {
        color: #DBDBDB;
        font-family:  var(--font-family);
    }
    
`
const TextMessage = styled.textarea`
    width:  90% ;
    padding: 8px 0px;
    border: 1px solid var(--font-color);
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;

    :focus{
        filter: brightness(95%);
    }
`
const Button = styled.button`
    height: 42px;
    width: 80%;
    background-color: var(--font-color); 
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    @media(min-width: 800px) {
        width: 90%; 
    }
`;
export { Container, InfosWrapper, InfosBox, InfosCard, ImgLogo, Bold, Input, TextMessage, Button };