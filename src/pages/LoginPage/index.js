import axios from 'axios';
import React, { useContext, useState } from 'react';
import UserContext from '../../Providers/Auth';

import { Button, Container, Input, LinkStyled, Title } from './styles';

function LoginPage() {
    const { setUserToken, setUserInfos } = useContext(UserContext);

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
            console.log("deu bom")
            setUserToken(response.data.token);
            setUserInfos(response.data);
            setIsLoading(false);
            setInputLoading("");
            console.log(response.data.token)

        })
        promise.catch((error) => {
            console.log(error.response);
            alert("Tenta de novo. Dados incorretos");
        })

    }
    return (
        <Container>
            <Title>TopShoes</Title>
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
        </Container>

    )
}

export default LoginPage;