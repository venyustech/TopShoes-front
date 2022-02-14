import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import axios from 'axios';
import UserContext from '../../Providers/Auth';
import { useNavigate } from 'react-router-dom';

function CartPage() {

    const { cartItems, setCartItems, userToken, userInfos } = useContext(UserContext);

    const { serverItems, setServerItems } = useContext(UserContext);
    const navigate = useNavigate();


    let total = 0;

    useEffect(() => {
        const promise = axios.get(`http://localhost:5002/api/products`)
        promise.then(response => {
            setServerItems(response.data)

        });
        promise.catch(error => alert("erro#1-PlansPage: ", error.response));

    }, [])

    for (let i = 0; i < cartItems.length; i++) {
        total = total + serverItems[i].price * cartItems[i].stock;
    }

    function handlePurchase() {

        const promise = axios.put(`http://localhost:5002/api/products`, cartItems)
        promise.then(response => {
            alert(`Realizada a compra!^^
            Compra no valor de: R$ ${total},00
            Obrigado pela preferência, ${userInfos.name}! Volte sempre. `)
            setCartItems([]);
            navigate('/');

        });
        promise.catch(error => alert("erro#1-PlansPage: ", error.response));
    }

    if (cartItems == "") {
        return (
            <div>
                Loading ...
            </div>
        );
    }
    else
        return (
            <Cont>
                <NavBar />
                <Section>
                    <Body>
                        {cartItems.map((cartItem) =>
                            <Item>
                                <ItemImg src={serverItems[cartItem.id].picture} />
                                <ItemDesc>
                                    <p><Bold>{serverItems[cartItem.id].name}</Bold></p>
                                    <p><Span>R$  {serverItems[cartItem.id].price},00</Span></p>
                                    <p> Quantidade no Carrinho:  {cartItem.stock}</p>
                                    <p> Disponíveis:  {serverItems[cartItem.id].stock}</p>
                                </ItemDesc>
                            </Item>)}
                    </Body>
                    <Total>
                        <Bold>Resumo de Pedido</Bold><br></br>
                        <Bold> Total a ser Pago:   </Bold><Span>R${total},00</Span>
                        <Button onClick={() => handlePurchase()}>
                            Finalizar Pedido
                        </Button>

                    </Total>
                </Section>
            </Cont >
        );
}

export default CartPage;

const Cont = styled.div`
background-color: var(--background-color);
width: 100%;
height: 100vh;
`

const Section = styled.div`
display: flex;
font-family: var(--font-family);

width: 80%;
margin: auto;
justify-content: space-between;

`
const Bold = styled.span`
    font-weight: bold;
`
const Body = styled.div`

margin-left: 10px ;
`

const Total = styled.div`
line-height: 60px;
margin-top: 10px;
font-size: 20px;
font-style: bolder;
position: fixed;
left: 65%;`

const Item = styled.div`
margin-top: 10px;
display: flex;

`

const ItemImg = styled.img`
height: 150px;
width: 150px;
`

const ItemDesc = styled.div`
font-style: italic;
margin-left: 30px;
font-size: 18px;
margin-top: 5px;
    p{
        margin-top: 10px;
    }
`

const Button = styled.button`
    height: 48px;
    background-color: var(--details-color); 
    color: #FFFFFF;
    font-family: var(--font-family);
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
   
`

const Span = styled.span`
font-family: 'Roboto', sans-serif;`