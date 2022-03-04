import React from 'react'
import { Navbar } from '../Components/Navbar'
import styled from 'styled-components'
import { Announcement } from '../Components/Announcement'
import {Wishlist} from '../Components/Wishlist'

const Logo = styled.img`
padding: 10px 20px;
margin: auto;
display: block;
width: 20%;
height: auto;
`

const Home = () => {
    return (
        <div>
            <Logo src="https://media.lampoo.com/logo/websites/1/Lampoo_logotype_black_1_.png"/>
            <Navbar/>
            <Announcement/>
            <Wishlist/>
        </div>
    )
}

export default Home
