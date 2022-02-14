import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserContext from '../../Providers/Auth';
import { FooterBox } from '../../components/Footer/styles';
import Footer from '../../components/Footer';

function CollectionsId() {

    const { cartItems, setCartItems, userToken } = useContext(UserContext);

    const { index } = useParams();

    const [serverItem, setServerItem] = useState("");

    const [qtd, setQtd] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://top-shoes.herokuapp.com/api/products/${index}`)
        promise.then(response => {
            setServerItem(response.data)

        });
        promise.catch(error => alert("erro#1-PlansPage: ", error.response));

    }, [])

    function handleCart(e) {
        if (userToken == null) {
            alert("Faça login antes de comprar!")
        }
        else {
            e.preventDefault();
            setCartItems([...cartItems, {
                id: parseInt(index),
                stock: parseInt(qtd)
            }])

        }

    }

    if (serverItem == "") {
        return (

            <div>
                Loading...
            </div>

        );
    }
    else
        return (
            <>
                <Container>
                    <NavBar />

                    <AddProduct>

                        <AddImg src={serverItem.picture} />

                        <RightSide>
                            <ProductName>
                                {serverItem.name}<br></br>
                                R${serverItem.price},00
                            </ProductName>

                            <form onSubmit={handleCart} >
                                <Input type="text"
                                    onChange={(e) => setQtd(e.target.value)}
                                    value={qtd}
                                    placeholder="Quantidade"
                                    disabled={inputLoading}
                                />
                                <Button>{isLoading ?
                                    ("loading...") : ("Adicionar ao Carrinho")}
                                </Button>
                            </form>

                            <GbLink to="/collections">
                                <GoBack>
                                    Voltar para a Coleção
                                </GoBack>
                            </GbLink>
                        </RightSide>


                    </AddProduct>
                    <Footer />
                </Container>
            </>
        );



}

export default CollectionsId;

const Container = styled.div`
    background-color: var(--background-color);
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AddProduct = styled.div`
width: 80%;
height: 100vh;
margin: auto;
display: flex;
justify-content: center;
`

const AddImg = styled.img`
width: 400px;
height: 400px;
margin-left: 0;
margin-right: 10px;
margin-top: 0;`

const RightSide = styled.div`
width: 500px;
height: 700px;
margin-left: 50px;`

const ProductName = styled.div`
font-style: italic;
font-size: 30px;
line-height: 50px;
margin-top: 30px;`

const Input = styled.input`
width: 350px;
height: 50px;
margin-top: 80px;
font-size: 30px;

`

const Button = styled.button`
width: 350px;
height: 50px;
margin-top: 20px;
font-size: 30px;
background-color: yellow;
border: none;
cursor: pointer;
    :focus{
        filter: brightness(95%);
    }
`

const GoBack = styled.div`
width: 350px;
height: 50px;
margin-top: 60px;
font-size: 27px;
background-color: black;
color: white;
line-height: 50px;
text-align: center;
font-style: italic
`

const GbLink = styled(Link)`
text-decoration: none;`