import React from 'react'
import styled from 'styled-components'

function Welcome() {

return (
    <Container>
        <Content>
            <Logo>
             <LogoImage src="/images/cta-logo-one.svg"  alt="logo1" />
             <SignupButton>GET ALL THERE</SignupButton>
             <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscripiton.
                As of 3/26/24, the price of Disney+ and the Disney bundle will increase by $1.
             </Description>
             <LogoImage2 src='/images/cta-logo-two.png' alt='logo2'/>
            </Logo>
            <BgImage/>   
        </Content>
    </Container>
)
}

export default Welcome

const Container = styled.div`
height: 100vh;
text-align: center;
overflow: hidden;
display: flex;
flex-direction: column;
`
const Content = styled.div`
margin-bottom:10vw;
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
padding: 80px 80px;
`

const BgImage = styled.div`
background-image: url('/images/login-background.jpg');
width: 100%;
height: 100%;
background-image: cover;
z-index: -1;
position: absolute;
bottom: 0;
top: 0;
left: 0;
right: 0;
`

const Logo = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
  
`

const LogoImage = styled.img`
    max-width: 650px;
    min-height: 1px;
    margin-bottom: 12px;
    width: 100%;
    display: block;
`
const SignupButton = styled.a`
background-color: #0063e5;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: bold;
color: #f9f9f9;
border: 1px solid transparent;
border-radius: 4px;
margin-bottom: 12px;
padding: 16.5px 0px;
letter-spacing: 2px;

&:hover{
    background-color: #0483ee;
}
`

const Description = styled.p`
line-height: 1.5;
letter-spacing: 1.5px;
margin-bottom: 10px;
color: white;
font-size: 11px;
margin-bottom: 24px;
margin-top: 0px;
`

const LogoImage2 = styled.img`
max-width: 650px;
width: 100%;
margin-bottom: 20px;
min-height: 1px;
display: block;
`