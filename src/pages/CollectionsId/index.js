import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserContext from '../../Providers/Auth';

function CollectionsId() {

    const { cartItems, setCartItems, userToken } = useContext(UserContext);

    const { index } = useParams();

    const [serverItem, setServerItem]= useState("");

    const [qtd, setQtd] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    useEffect(() => {
        const promise = axios.get(`http://localhost:5002/api/products/${index}`)
        promise.then(response => {
            setServerItem(response.data)
            
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    function handleCart(e)
    {
        if(userToken == null)
        {
            alert("Faça login antes de comprar!")
        }
        else
        {
            e.preventDefault();
            setCartItems([...cartItems, {
                id: index, 
                stock: qtd}])

        }
       
    }

    console.log(cartItems)

    if (serverItem == "")
    {
        return (

            <div>
                Loading...
            </div>

        );
    }
    else
    return(
        <>

            <NavBar />

            <AddProduct>

                <AddImg src={serverItem.picture}/>

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
        
        </>
    );
    


}

export default CollectionsId;

const AddProduct = styled.div`
width: 1250px;
height: 1000px;
margin: auto;
display: flex;`

const AddImg = styled.img`
width: 700px;
height: 700px;
margin-left: 0;
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
font-size: 30px;`

const Button = styled.button`
width: 350px;
height: 50px;
margin-top: 20px;
font-size: 30px;
background-color: yellow;`

const GoBack = styled.div`
width: 350px;
height: 50px;
margin-top: 250px;
font-size: 27px;
background-color: black;
color: white;
line-height: 50px;
text-align: center;
font-style: italic
`

const GbLink = styled(Link)`
text-decoration: none;`