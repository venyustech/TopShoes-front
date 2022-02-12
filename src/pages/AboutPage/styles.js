import styled from "styled-components";


const Container = styled.div`
    background-color: var(--background-color);
    font-family: var(--font-family);
    font-size: 14px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const InfosWrapper = styled.div`
    width: 100%;
    padding-top: 36px;
    display: flex;
    justify-content: center;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        min-height: fit-content;
    }
`
const InfosBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    width: 50%;
`
const ImgLogo = styled.img`
    height: 500px;
    margin-left: 4em;

`
const Section1 = styled.section`
    display: flex;
    background-color:#F3DBC5;
    width: 400px;
    padding: 8px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         border: 1px solid var(--font-color);
        padding: 40px 40px;
        h2{
            font-size: 20px;
            letter-spacing: 0.2em;
        }
        p{
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            margin-top: 10px;
            font-style: italic;
        }
    }

`
const Section2 = styled.section`
    width: 400px;
    padding: 50px 0;
    
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        margin-top: 10px;
    }

`

const LogosWrapper = styled.div`
    width: 70%;
    margin: 30px  0px;
    display: flex;
    justify-content: space-between;
    img{
        width: 70px;
        height: 70px;
    }
`

export { Container, InfosWrapper, InfosBox, ImgLogo, Section2, Section1, LogosWrapper }