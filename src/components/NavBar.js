import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../img/imga/logo-tatan-blanco.png'
import useMediaQuery from '../utils/useMediaQuery'
import Hamburger from './Hamburger'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    background-color: black;
    height: 9vh;
    /* font-family: sans-serif; */

    @media screen and (max-width: 600px) {
        height: 3vh;
        position: sticky;
        top: 0;
    }
`

const Nav = styled.nav`
    margin-right: -100px;
`

const Ul = styled.ul`
    list-style: none;
    
`

const Li = styled.li`
    display: inline-block;
    padding: 0 20px;
    color: white;
    font-size: 20px; 
`

const LogoImg = styled.img`
    width: 9%;
    margin-left: -100px;
    cursor: pointer;
    margin-right: -60px;

    @media screen and (max-width: 600px) {
        margin-left: -20px;
        width: 20%;
        margin-right: -10px;
    }
`

const Title = styled.a`
    margin-right: 90px;
    color: white;
    font-size: 40px;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;


    @media screen and (max-width: 600px) {
        font-size: 25px;
        margin: 0;
    }

    @media screen and (max-width: 380px) {
        font-size: 20px;
        margin: 0;
    }
`

const LINK = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        color: green;
    }
`

const NavBar = () => {
    const matches = useMediaQuery('(min-width: 600px)');
    const [open, setOpen] = useState(false); //drop down menu

    return (
        <Header>
            <LogoImg src={Logo} />
            <Title href='/'>TATAN GONZALEZ</Title>
            {!matches ? <Hamburger open={open} setOpen={setOpen} /> :
            <Nav>
                <p style={{position: 'absolute', color: 'white', top: 75, left: 260, fontStyle: 'italic'}}>- Fotografia y Naturaleza</p>
                <Ul>
                    <Li><LINK tag='flora' href='/'>Flora y Fauna</LINK></Li>
                    <Li><LINK tag='paisajes' href='/paisajes'>Paisajes Magicos</LINK></Li>
                    <Li><LINK tag='sesiones' href='/sesiones'>Sesiones</LINK></Li>
                    <Li><LINK tag='tarifas' href='/tarifas'>Tarifas</LINK></Li>
                    <Li><LINK tag='contacto' href='/contacto'>Contacto</LINK></Li>
                </Ul>
            </Nav>}
        </Header>
    )
}

export default NavBar
