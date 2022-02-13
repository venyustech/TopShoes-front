import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
    font-family: var(--font-family);
    background-color: var(--font-color);
    height: 60px;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        height: 100%;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }
    p:hover{
        color: var(--details-color);
    }
    svg{
        color: var(--details-color);
        height: 28px;
        width: 28px;

        
    }
`
const Cart = styled.div`
    height: 100%;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover{
        filter: brightness(95%);
        svg{
            color: #ed1a7c;
        }
    }

`
const Quantity = styled.div`
    color: #fff;
    position: relative;
    right: 36%;
    font-size: 12px;
    margin-top: 8px;
`
const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration-line: underline;
    width: 80px;
    height: 100%;
    cursor: pointer;

    :hover{
        color: var(--details-color);
    }

`
const LateralMenu = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
`
const Title = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 130px;
    font-family: var(--font-title);
    font-size: 60px;
    color:var(--font-color);
    background-color: var(--background-color);
    p{
        cursor: pointer;
    }
`
const HorizontalBar = styled.div`
    margin: 0 10%;
    height: 1px;
    width: 80%;
    background-color: #000;
    @media(max-width: 600px) {
        width: 95%; 
    }
`
const LinkStyled = styled(Link)`
   all: none;
`;
export { Container, Quantity, Cart, Login, LateralMenu, Title, HorizontalBar, LinkStyled };