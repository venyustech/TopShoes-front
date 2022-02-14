import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import UserContext from '../../Providers/Auth';

function CollectionsPage() {

    const { serverItems, setServerItems } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get(`http://localhost:5002/api/products`)
        promise.then(response => {
            setServerItems(response.data)
            
        });
        promise.catch(error => console.log("erro#1-PlansPage: ", error.response));

    }, [])

    if (serverItems == "")
    {
        return (
            <div>
                Loading...
            </div>
        );
    }
    else
    return (
        <>
            <NavBar />
            <Items>

                {serverItems.map( (serverItem) =>
                <Link to={`/collections/${serverItem.id}`}>
                <Item>
                    <ItemImg src={serverItem.picture}/>
                    <Title>
                        {serverItem.name}
                    </Title>
                    <Price>
                        R$ {serverItem.price},00
                    </Price>
                </Item></Link>)}

            </Items>
            
        </>
    );
}

export default CollectionsPage;

const Items = styled.div`
width: 1400px;
margin: auto;
margin-top: 50px;
display: flex;
flex-wrap: wrap;
Link: {text-decoration: none;}`

const Item = styled.div`
width: 300px;
height: 400px;
margin-left: 50px;
margin-top: 20px;`

const ItemImg = styled.img`
width: 275px;
height: 275px;
margin-top: 12px;
margin-left: 12px;`

const Title = styled.div`
font-style: italic;
font-size: 22px;
margin-top: 15px;
margin-left: 12px;`

const Price = styled.div`
font-size: 22px;
color: gray;
margin-top: 15px;
margin-left: 12px;
font-style: italic;`