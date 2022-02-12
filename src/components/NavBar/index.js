import React from 'react';
import { Cart, Container, HorizontalBar, LateralMenu, Login, Quantity, Title } from './styles';
import { GiShoppingBag } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <p onClick={() => navigate('/')}>Home</p>
                <p onClick={() => navigate('/collections')}>Coleção</p>
                <p onClick={() => navigate('/about')}>Sobre nós</p>
                <p onClick={() => navigate('/contact')}>Contato</p>
                <p onClick={() => navigate('/faq')}>FAQ</p>
                <LateralMenu>
                    <Login onClick={() => navigate('/login')}>login</Login>
                    <Cart onClick={() => navigate('/cart')}>
                        <GiShoppingBag />
                        <Quantity>0</Quantity>
                    </Cart>
                </LateralMenu>
            </Container>
            <Title><p onClick={() => navigate('/')}>TopShoes</p></Title>
            <HorizontalBar />
        </>

    );
}

export default NavBar;