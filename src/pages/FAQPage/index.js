import React from 'react';
import NavBar from '../../components/NavBar';

import {
    CodeWrapper, Container, DevolutionWrapper, HorizontalBar, SectionsWrapper,
    SendBox, SendWrapper, SubTitle, Text, Title
} from './styles';

function FAQPage() {
    return (
        <>
            <Container >
                <NavBar />
                <CodeWrapper>
                    <Title>FAQ</Title>
                    <SectionsWrapper>
                        <SendWrapper>
                            <h2>Envio</h2>
                            <HorizontalBar />
                            <SendBox>
                                <SubTitle>Envio nacional</SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, neque. Consequuntur fugit molestiae dolor nostrum cum repellat enim, fugiat asperiores, provident explicabo pariatur architecto consequatur molestias? Hic voluptatibus iusto alias.</Text>

                            </SendBox>
                            <SendBox>
                                <SubTitle>Envio internacional</SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium ad deserunt officiis non natus? Dignissimos esse reprehenderit nemo iusto! Incidunt, beatae nihil! Eos enim deleniti soluta voluptatem dolorum eius!</Text>
                            </SendBox>
                            <SendBox>
                                <SubTitle>Taxas alfandegárias e outras taxas</SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt, expedita ducimus rerum nesciunt aspernatur deserunt eius itaque aperiam, voluptas distinctio dignissimos ipsa. A ipsum unde iure perspiciatis, debitis dolor!</Text>

                            </SendBox>

                        </SendWrapper>
                        <DevolutionWrapper>
                            <h2>Devoluções</h2>
                            <HorizontalBar />
                            <SendBox>
                                <SubTitle>Como devolver</SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, provident aliquid. Culpa hic, quibusdam dignissimos deserunt magni eaque facere quasi, dolorem fugit fugiat, qui excepturi cumque eius repellendus nemo ducimus.</Text>

                            </SendBox>
                            <SendBox>
                                <SubTitle>Itens com defeito ou incorretos </SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, debitis aliquid. Laboriosam accusamus voluptas deleniti reprehenderit, nemo delectus laudantium corporis recusandae corrupti molestias omnis facere quas sit nihil minus tempore?</Text>

                            </SendBox>
                            <SendBox>
                                <SubTitle>Trocas </SubTitle>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique ullam vero earum, esse pariatur cumque, illo facere mollitia magni rem, obcaecati asperiores debitis. Excepturi perspiciatis nam aut dolorum doloremque?</Text>

                            </SendBox>
                        </DevolutionWrapper>
                    </SectionsWrapper>

                </CodeWrapper>
            </Container>
        </>
    );
}

export default FAQPage;