import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { Button, Container, Input, LinkStyled, Title } from './styles';

function SignUpPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled");

        const promise = axios.post('https://top-shoes.herokuapp.com/sign-up', {
            name: name,
            email: email,
            password: password,
        });

        promise.then(response => {
            alert("Usuário cadastrado. Faça Login agora")
            navigate('/login')

        })
        promise.catch(error => {
            alert("deu ruim! tenta de novo.")
            setIsLoading(false);
            setInputLoading("");
        })
    }
    return (
        <Container>
            <Title><p onClick={() => navigate('/')}>TopShoes</p></Title>
            <form onSubmit={handleLogin} >
                <Input type="name"
                    placeholder="nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
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
            <LinkStyled to="/login" > Já possui conta? Faça login. </LinkStyled>

            <Link to="/">
                <Voltar >
                    Voltar
                </Voltar>
            </Link>
        </Container>

    )
}

export default SignUpPage;

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
`