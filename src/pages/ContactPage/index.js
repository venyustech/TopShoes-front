import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { mask, unMask } from "remask";
import { Bold, Button, Container, ImgLogo, InfosBox, InfosCard, InfosWrapper, Input, InputMessage, TextMessage } from './styles';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState("")
    const [maskCell, setMaskCell] = useState("")
    const [wppMessage, setWppMessage] = useState("");


    const [inputLoading, setInputLoading] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChangeCell = ev => {
        const originalValue = unMask(ev.target.value);
        const masckedValue = mask(originalValue, [
            '(99) 9999-9999',
            '(99) 9 9999-9999'
        ])
        setCell(originalValue);
        setMaskCell(masckedValue)
    };

    function handleMessage(e) {
        e.preventDefault();

        let mensagem = ` Olá, Meu nome é *${name}*
    *- Email:* ${email} 
    *- Telefone:* ${maskCell}
    *- Estou entrando em contado para falar sobre:* ${wppMessage}
       Aguardo resposta por e-mail ou whatsapp`

        const send = encodeURIComponent(mensagem);
        window.location.href = `https://wa.me/5581997850393?text=${send}`
    }
    return (
        <>
            <Container>
                <NavBar />
                <InfosWrapper>
                    <InfosBox>
                        <div>
                            <InfosCard>
                                <div>
                                    <h2>DÚVIDAS?</h2>
                                    <Bold><p>Contate-nos</p></Bold>
                                    <p> <Bold>0800-000-0000</Bold> Ligação gratuita</p>
                                    <p>TopShoes@meuemail.com</p>
                                    <p>Ou preencha o formulário e entraremos em contato pelo WhatsApp em Breve</p>
                                </div>

                            </InfosCard>

                            <form onSubmit={handleMessage} >
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
                                <Input type="tel"
                                    name="doc"
                                    onChange={onChangeCell}
                                    value={maskCell}
                                    placeholder="(99)9 9999-9999"
                                    keyboardType="numeric"
                                />
                                <TextMessage disabled={inputLoading}
                                    onChange={(e) => setWppMessage(e.target.value)}>
                                    Insira a menssagem aqui
                                </TextMessage>
                                <Button>{isLoading ?
                                    ("loading...") : ("Encaminhar")}
                                </Button>
                            </form>
                        </div>
                        <ImgLogo src="https://i.imgur.com/96meB3b.png" alt="img-logo" />
                    </InfosBox>

                </InfosWrapper>

            </Container>
        </>
    );
}

export default ContactPage;