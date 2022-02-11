import axios from 'axios';
import React, { useState } from 'react';

import { Button, Container, Input, LinkStyled, Title } from './styles';

function SignUpPage() {
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
            console.log(response);
            console.log(response.data);

        })
        promise.catch(error => alert("deu ruim! tenta de novo."))
    }
    return (
        <Container>
            <Title>TopShoes</Title>
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
        </Container>

    )
}

export default SignUpPage;