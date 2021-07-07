import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa'

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

/* const Top = styled.div`
    background-color: rgba(95, 66, 4, 0.62);
    background-color: rgba(0, 0, 0, 1);
    height: 13vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;


    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
` */

const Bottom = styled.div`
    /* background-color: rgba(95, 68, 4, 0.77); */
    background-color: rgba(0, 0, 0, 1);
    height: 13vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding-top: 20px;

    @media screen and (max-width: 600px) {
        font-size: 9px;
        text-align: center;
        padding: 10px;
    }
`

{/* <Top><a href='https://www.instagram.com/tatangonzalezc/' target='_blank' style={{textDecoration: 'none', color: 'white'}}>Instagram</a></Top>
 */}

const Footer = () => {
    return (
        <FooterWrapper>
            <Bottom>
                <a href='https://www.instagram.com/tatangonzalezc/' target='_blank' style={{color: 'white', fontSize: 40, marginTop: 15 }}><FaInstagram /></a>
                <br />
                <h3 style={{marginTop: 0}}>Copyright &copy; 2021 Tatan Gonzalez | Design: Nicolas Canala-Echevarria</h3>
                <br />
            </Bottom>
        </FooterWrapper>
    )
}

export default Footer
