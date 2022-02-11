import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: #151515;
    font-family: var(--font-family);
    font-size: 14px;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    gap: 16px;

    @media(max-width: 300px) {

            Img, Input, Button{
            width: 80%;
        }
    }
`
const Title = styled.h1`
    font-family: var(--font-title);
    color: #fff;
    font-size: 60px;
    margin-bottom: 50px;
    @media(max-width: 300px) {
        font-size: 50px;
    }
`
const Input = styled.input`
    height: 46px;
    width: 80%;

    background-color: #FFFFFF;
    color: #222222;
    font-size:20px;
    margin-bottom: 18px;
    border: 1px solid #D5D5D5;
    border-radius: 8px; 
    ::placeholder {
      color: #DBDBDB;
      font-family:  var(--font-family);
      padding-left: 10px;
    }
    @media(min-width: 800px) {
        width: 500px; 
    }
`;

const Button = styled.button`
    height: 52px;
    width: 80%;
    background-color: var(--botton-color); 
    color: #FFFFFF;
    font-family: var(--font-family);
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media(min-width: 800px) {
        width: 500px; 
    }
`;

const LinkStyled = styled(Link)`
    width: 100%;
    height: 17px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;

    color:  #52B6FF;
    font-family: var(--font-family);
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

`;
export { Container, Title, Input, Button, LinkStyled }