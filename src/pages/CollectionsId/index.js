import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserContext from '../../Providers/Auth';

function CollectionsId() {

    const { cartItems, setCartItems, contador } = useContext(UserContext);

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
        e.preventDefault();
        contador++;
        setCartItems({...cartItems, contador})
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
                        <input type="text"
                            onChange={(e) => setQtd(e.target.value)}
                            value={qtd}
                            placeholder="Quantidade"
                            disabled={inputLoading}
                        />
                        <button>{isLoading ?
                            ("loading...") : ("ENTRAR")}
                        </button>
                    </form> 
                </RightSide>


            </AddProduct>
        
        </>
    );
    


}

export default CollectionsId;

const AddProduct = styled.div`
width: 1250px;
height: 1000px;
background-color: blue;
margin: auto;
display: flex;`

const AddImg = styled.img`
width: 700px;
height: 700px;
margin-left: 0;
margin-top: 0;
background-color: yellow;`

const RightSide = styled.div`
width: 500px;
height: 700px;
margin-left: 50px;
background-color: yellow;`

const ProductName = styled.div`
font-style: italic;
font-size: 30px;
line-height: 50px;
margin-top: 30px;`