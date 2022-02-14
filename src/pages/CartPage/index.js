import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import UserContext from '../../Providers/Auth';

// import { Container } from './styles';



function CartPage() {

    const { cartItems, setCartItems, userToken } = useContext(UserContext);

    const { serverItems, setServerItems } = useContext(UserContext);

    let total = 0;

    useEffect(() => {
        const promise = axios.get(`http://localhost:5002/api/products`)
        promise.then(response => {
            setServerItems(response.data)
            
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    for (let i=0; i<cartItems.length; i++)
    {
        total = total + serverItems[i].price * cartItems[i].stock;
    }

    function handlePurchase ()
    {
        
            /*const promise = axios.put(`http://localhost:5002/api/products`, cartItems)
            promise.then(response => {
                console.log(response.data)
                
            });
            promise.catch(error => console.log("erro#1-PlansPage: ", error.response));*/
            console.log(cartItems)
            console.log(typeof(cartItems[0].stock))
    
       
    
    }

    if (cartItems == "")
    {
        return (
            <div>
                Loading ...
            </div>
        );
    }
    else
    return (
        <>
            <NavBar />

            <Container>
            <Body>

                {cartItems.map( (cartItem) =>
                <Item>
                    <ItemImg src={serverItems[cartItem.id].picture}/>
                        <ItemDesc>
                        {serverItems[cartItem.id].name}<br></br>
                        <Span>R$  {serverItems[cartItem.id].price},00<br></br></Span>
                        Quantidade no Carrinho:  {cartItem.stock}<br></br>
                        Disponíveis:  {serverItems[cartItem.id].stock}<br></br>

                        </ItemDesc>
                </Item>)}

            </Body>
            
            <Total>

                Resumo de Pedido<br></br>
                Total a ser Pago:   <Span>R${total},00</Span>
                <Button onClick={()=>handlePurchase()}>
                    Finalizar Pedido
                </Button>

            </Total>
            
            </Container>


            
        </>
    );
}

export default CartPage;

const Container = styled.div`
display: flex;
font-family: var(--font-family);
width: 80%;
margin: auto;
justify-content: space-evenly;`

const Body = styled.div`
width: 1200px;
margin: auto;


`

const Total = styled.div`
height: 200px;
line-height: 60px;
margin-top: 20px;
font-size: 40px;
font-style: bolder;
position: fixed;
left: 65%;`

const Item = styled.div`
margin-top: 30px;
width: 1200px;
height: 300px;
display: flex;
`

const ItemImg = styled.img`
height: 300px;
width: 300px;
`

const ItemDesc = styled.div`
height: 300px;
font-style: italic;
margin-left: 100px;
font-size: 30px;
line-height: 60px;
`

const Button = styled.button`
    margin-top: 30px;
    height: 52px;
    width: 80%;
    background-color: var(--details-color); 
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
`

const Span = styled.span`
font-family: 'Roboto', sans-serif;`