import React from 'react';
import NavBar from "../../components/NavBar"
import { Container, ImgLogo, InfosBox, InfosWrapper, LogosWrapper, Section1, Section2 } from './styles';

function AboutPage() {
    return (
        <Container>
            <NavBar />
            <InfosWrapper>
                <div>
                    <InfosBox>
                        <Section1>
                            <div>
                                <h2>SOBRE NÓS</h2>
                                <p>Somos apaixonados por sapatos e nos dedicamos a oferecer os designers mais exclusivos e as últimas tendências</p>
                            </div>
                        </Section1>
                        <Section2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quis doloremque doloribus illo esse optio. Quis quaerat, similique ipsa veritatis, alias rerum dolorum vel, quam dolore maxime perspiciatis aliquam possimus.
                                Sed cumque repellendus nesciunt consectetur labore tempora mollitia rem consequatur animi cum. Nemo libero odit voluptatibus maxime odio sed ad fugit dolorum, incidunt totam autem nesciunt dolore. Vitae, voluptate officia!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut voluptatibus error earum labore sit doloremque in, enim eum quibusdam quisquam facilis quo modi, veniam sed eius! Dolorem, nisi consequuntur?</p>
                        </Section2>
                    </InfosBox>
                </div>
                <ImgLogo src="https://i.imgur.com/ckpHWjO.png" alt="img-logo" />
            </InfosWrapper>
            <LogosWrapper>
                <img src="https://i.imgur.com/EYD8VgI.png" alt="logo" />
                <img src="https://i.imgur.com/755bPbA.png" alt="logo" />
                <img src="https://i.imgur.com/8f2R4k5.png" alt="logo" />
                <img src="https://i.imgur.com/pMgejuc.png" alt="logo" />
                <img src="https://i.imgur.com/QAdfs5O.png" alt="logo" />
            </LogosWrapper>
        </Container>
    )
}

export default AboutPage;