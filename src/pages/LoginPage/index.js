import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Providers/Auth';
import styled from "styled-components";
import { Link } from 'react-router-dom';


import { Button, Container, Input, LinkStyled, Title } from './styles';

function LoginPage() {
    const { setUserToken, setUserInfos } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled");
        const promise = axios.post('https://top-shoes.herokuapp.com/login', {
            email: email,
            password: password,
        });
        promise.then(response => {
            setUserToken(response.data.token);
            setUserInfos(response.data);
            setIsLoading(false);
            setInputLoading("");
            alert("Você está logado ^^ aproveite suas compras");
            navigate('/collections')

        })
        promise.catch((error) => {
            console.log(error.response);
            alert("Tenta de novo. Dados incorretos");
            setIsLoading(false);
            setInputLoading("");
        })

    }
    return (
        <Container>
            <Title><p onClick={() => navigate('/')}>TopShoes</p></Title>
            <form onSubmit={handleLogin} >
                <Input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                    disabled={inputLoading}
                />
                <Input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="senha"
                    disabled={inputLoading}
                />
                <Button>{isLoading ?
                    ("loading...") : ("ENTRAR")}
                </Button>
            </form>
            <LinkStyled to="/sign-up" > Não tem uma conta? Cadastre-se! </LinkStyled>

            <LinkStyle to="/">
                <Voltar >
                    Voltar
                </Voltar>
            </LinkStyle>
        </Container>

    )
}

export default LoginPage;

const LinkStyle = styled(Link)`
text-decoration:none;
color:black;
`
const Voltar = styled.div`
width: 200px;
height: 50px;
font-size: 30px;
font-style: italic;
background-color: white;
margin-top: 30px;
line-height: 50px;
text-align: center;
border-radius: 10px;
font-family: var(--font-family);
`