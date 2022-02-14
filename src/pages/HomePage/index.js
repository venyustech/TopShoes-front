import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




function HomePage() {

    const [serverItems, setServerItems] = useState("");

    const NewCollectionItems = [
        {
            name: "Havaiana de pau",
            price: "Rs 59,00",
            image: "data:image/png;base64,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"
        },
        {
            name: "Havaiana de rato",
            price: "Rs 20,50",
            image: "https://designbuzz.com/wp-content/uploads/2019/03/rat-shoe.jpg"
        },
        {
            name: "Havaiana de ferro",
            price: "Rs 100,00",
            image: "https://preview.redd.it/b1wxjdayulz31.jpg?auto=webp&s=cd41a02639159916c19c1a418b5f19f82501b377"
        }]

    const salesImgs = [
        "https://cidadedoheroi.com.br/wp-content/uploads/2021/11/Pikachu-capa.jpg",
        "https://static.wixstatic.com/media/7e1518_7a3467385d51481fb8355b45abb5fff1~mv2.jpg/v1/fill/w_1000,h_500,al_c,q_90,usm_0.66_1.00_0.01/7e1518_7a3467385d51481fb8355b45abb5fff1~mv2.jpg",
        "https://sm.ign.com/ign_br/screenshot/default/blob_bkmv.jpg"
    ]


    useEffect(() => {
        const promise = axios.get(`https://top-shoes.herokuapp.com/api/products`)
        promise.then(response => {
            setServerItems(response.data)

        });
        promise.catch(error => alert("erro#1-PlansPage: ", error.response));

    }, [])


    if (serverItems == "") {
        return (
            <div>
                Loading
            </div>
        )
    }
    else
        return (
            <>
                <Container>
                    <NavBar />
                    <Promotions>

                        <OfferImg src="https://www.natalriograndedonorte.com/wp-content/uploads/2014/04/brazilfashion4.jpg" />

                        <OfferBox>

                            <OfferBoxText>
                                Menos 20%
                                MODA DE OUTONO
                            </OfferBoxText>

                            <OfferLink to="collections">
                                <OfferBoxButton>
                                    Comprar Coleção
                                </OfferBoxButton>
                            </OfferLink>

                        </OfferBox>

                    </Promotions>

                    <MidSection>
                        <BootAd>

                            <OfferImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pMJ_WfX1W4JKz2KFuFaOVDYQWzgZmwzHNw&usqp=CAU" />

                            <BootAdTxt>
                                Encontre o sapato ideal! <br></br>
                                <OfferLink2 to="collections">
                                    COMPRAR BOTAS
                                </OfferLink2>
                            </BootAdTxt>


                        </BootAd>


                        <SubscribeBox>
                            <InnerSubscribeBox>
                                <SubscribeBoxTxt>
                                    Seja o primeiro a saber sobre as últimas tendências e nossas ofertas!
                                </SubscribeBoxTxt>

                                <OfferLink to="/sign-up">
                                    <SubscribeBoxButton>
                                        Se inscreva!
                                    </SubscribeBoxButton>
                                </OfferLink>

                            </InnerSubscribeBox>
                        </SubscribeBox>
                    </MidSection>

                    <NewCollection>
                        <NewCollectionHead>
                            Suba no salto com a nossa
                        </NewCollectionHead>
                        <OfferLink to="/collections">
                            <NewCollectionTxt>
                                Nova Coleção
                            </NewCollectionTxt>
                            <NewCollectionOffers>

                                <NewCollectionOffer>

                                    <NewOfferImg src={serverItems[0].picture} />
                                    {serverItems[0].name}<br></br>
                                    R${serverItems[0].price}

                                </NewCollectionOffer>

                                <NewCollectionOffer>

                                    <NewOfferImg src={serverItems[1].picture} />
                                    {serverItems[1].name}<br></br>
                                    R${serverItems[1].price}

                                </NewCollectionOffer>

                                <NewCollectionOffer>

                                    <NewOfferImg src={serverItems[2].picture} />
                                    {serverItems[2].name}<br></br>
                                    R${serverItems[2].price}

                                </NewCollectionOffer>

                            </NewCollectionOffers>
                        </OfferLink>


                    </NewCollection>

                    <FooterBox>
                        2022<br></br>
                        Venyus, Gabriel e Vitor productions<br></br>
                        Driven TM
                    </FooterBox>
                </Container>
            </>
        );
}

export default HomePage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Promotions = styled.div`
position: relative;
width: 80%;
background-color: green;
margin: auto;
margin-top: 20px;
display: block;`

const OfferBox = styled.div`
position: relative;
width: 300px;
margin-left: 30px;
margin-top: 30px;
margin-bottom: 20px;

display: inline-block;
background-color: rgba(236,236,236,0.5);`

const OfferBoxText = styled.div`
width: 250px;
margin: auto;
margin-top: 50px;
color: black;
font-size: 45px;`

const OfferBoxButton = styled.div`
width: 250px;
height: 50px;
margin: auto;
margin-top: 10px;
background-color: white;
align-text: center;
text-align: center;
vertical-align: middle;
line-height: 50px;
font-style: italic;
cursor: pointer;
&:hover{
    background-color: black;
    color: white;
}`

const OfferImg = styled.img`
position: absolute;
left: 0px;
top: 0px;
height: 100%;
width: 100%;
z-index: 0;`

const MidSection = styled.div`
position: relative;
width: 80%;
margin: auto;
margin-top: 20px;
display: flex;`

const BootAd = styled.div`
position: relative;
width: 680px;
background-color: pink;`

const BootAdTxt = styled.div`
position: absolute;
font-size: 35px;
font-style: bolder;
color: white;
height: 200px;
width: 300px;
margin-left: 30px;
margin-top: 60px;
z-index: 1;
`

const SubscribeBox = styled.div`
width: 300px;
margin-left: 20px;
background-color: #E8C872;
`

const InnerSubscribeBox = styled.div`
height: 270px;
width: 270px;
margin-top: 12px;
margin-left: 12px;
border-width: 3px;
border-style: solid;
border-color: black;`

const SubscribeBoxTxt = styled.div`
height: 100px;
width: 230px;
margin: auto;
margin-top: 50px;
font-size: 20px;
font-family: "Brush Script MT";
font-style: italic;`

const SubscribeBoxButton = styled.div`
width: 230px;
height: 40px;
margin: auto;
margin-top: 20px;
background-color: white;
align-items: center;
text-align: center;
vertical-align: middle;
line-height: 40px;
font-style: italic;
cursor: pointer;
&:hover{
    background-color: black;
    color: white;
}`

const NewCollection = styled.div`
width: 80%;
background-color: lightgray;
margin: auto;
margin-top: 20px;
display: block;`

const NewCollectionHead = styled.div`
text-align: center;
line-height: 50px;
margin-top: 40px;
font-size: 40px;`

const NewCollectionTxt = styled.div`
text-align: center;
font-size: 40px;
font-style: italic;
font-family: "Brush Script MT";`

const OfferLink = styled(Link)`
text-decoration: none;
color: black;`

const OfferLink2 = styled(Link)`
text-decoration: none;
color: white;
line-height: 30px;
`


const NewCollectionOffers = styled.div`
display: flex;
height: 400px;
width: 900px;
margin: auto;
margin-top: 50px;`

const NewCollectionOffer = styled.div`
text-align: center;
height: 400px;
width: 250px;
margin: auto;
font-size: 30px;
line-height: 40px;`

const NewOfferImg = styled.img`
width: 250px;
height: 250px;
margin-top: 20px;`

const FooterBox = styled.div`
margin: auto;
margin-top: 20px;
width: 1000px;
height: 100px;
font-size: 15px;
font-style: italic;
`



