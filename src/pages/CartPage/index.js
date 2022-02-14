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

    return (
        <>
            <NavBar />

            <Body>
                <Item>
                    <ItemImg/>
                    <ItemDesc>
                        asdasdasd<br></br>
                        123123123<br></br>
                        asdasdasd<br></br>
                        asdasdasd
                    </ItemDesc>
                </Item>

            </Body>
            
        </>
    );
}

export default CartPage;

const Body = styled.div`
width: 1200px;
margin: auto;
background-color: red;`

const Item = styled.div`
margin-top: 30px;
width: 1200px;
height: 300px;
display: flex;
background-color: blue;`

const ItemImg = styled.img`
height: 300px;
width: 300px;
margin-left: 200px;
background-color: green;`

const ItemDesc = styled.div`
width: 300px;
height: 300px;
font-style: italic;
margin-left: 100px;
font-size: 40px;
line-height: 60px;
background-color: purple;`