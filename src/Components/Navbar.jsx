import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    cursor: pointer; 
    ${mobile({ display: "none" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    width: 65%
`

const NavbarLinks = styled.div`
flex:1;
`
const NavbarLinkNewWithTag = styled.div`
flex:1;
Color: #dcc850
`
const NavbarLinkSale = styled.div`
flex:1;
Color: red
`
export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                 <NavbarLinks>New Arrivals</NavbarLinks>
                 <NavbarLinks>Designer</NavbarLinks>
                 <NavbarLinks>Bags</NavbarLinks>
                 <NavbarLinks>Shoes</NavbarLinks>
                 <NavbarLinks>Clothing</NavbarLinks>  
                 <NavbarLinks>Jewelery</NavbarLinks>
                 <NavbarLinks>Accessories</NavbarLinks>
                 <NavbarLinkNewWithTag>New with tag</NavbarLinkNewWithTag>
                 <NavbarLinkSale>Sale</NavbarLinkSale>
            </Wrapper>
        </Container>
    )
}
