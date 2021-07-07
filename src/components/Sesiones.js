import React from 'react'
import styled from 'styled-components'
import { SRLWrapper } from "simple-react-lightbox"


//Images
import  Img1  from '../img/TN SE/1.jpg'
import  Img2  from '../img/TN SE/2.jpg'
import  Img3  from '../img/TN SE/3.jpg'
import  Img4  from '../img/TN SE/4.jpg'
import  Img5  from '../img/TN SE/5.jpg'
import  Img6  from '../img/TN SE/6.jpg'
import  Img7  from '../img/TN SE/7.jpg'
import  Img8  from '../img/TN SE/8.jpg'
import  Img9  from '../img/TN SE/9.jpg'
import  Img10  from '../img/TN SE/10.jpg'
import  Img11  from '../img/TN SE/11.jpg'
import  Img12  from '../img/TN SE/12.jpg'
import  Img13  from '../img/TN SE/13.jpg'
import  Img14  from '../img/TN SE/14.jpg'
import  Img15  from '../img/TN SE/15.jpg'
import  Img16  from '../img/TN SE/16.jpg'

//Big Images
import Image1 from '../img/imga/SE11.jpg'
import Image2 from '../img/imga/SE21.jpg'
import Image3 from '../img/imga/SE31.jpg'
import Image4 from '../img/imga/SE41.jpg'
import Image5 from '../img/imga/SE51.jpg'
import Image6 from '../img/imga/SE61.jpg'
import Image7 from '../img/imga/SE71.jpg'
import Image8 from '../img/imga/SE81.jpg'
import Image9 from '../img/imga/SE91.jpg'
import Image10 from '../img/imga/SE101.jpg'
import Image11 from '../img/imga/SE111.jpg'
import Image12 from '../img/imga/SE121.jpg'
import Image13 from '../img/imga/SE131.jpg'
import Image14 from '../img/imga/SE141.jpg'
import Image15 from '../img/imga/SE151.jpg'
import Image16 from '../img/imga/SE161.jpg'



const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`

const Column = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0;
    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }
    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }
`

const ColImg = styled.img`
    vertical-align: middle;
    width: 100%;

    &:hover {
        filter: drop-shadow(8px 8px 10px grey) blur(1px)
    }
`


const Sesiones = () => {
    return (
        <SRLWrapper>
        <Row>
            <Column> 
                <a href={Image1}><ColImg src={Img1} /></a>
                <a href={Image2}><ColImg src={Img2} /></a>
                <a href={Image3}><ColImg src={Img3} /></a>
                <a href={Image4}><ColImg src={Img4} /></a>
            </Column>
            <Column>
                <a href={Image5}><ColImg src={Img5} /></a>
                <a href={Image6}><ColImg src={Img6} /></a>
                <a href={Image7}><ColImg src={Img7} /></a>
                <a href={Image8}><ColImg src={Img8} /></a>
            </Column>
            <Column>
                <a href={Image9}><ColImg src={Img9} /></a>
                <a href={Image10}><ColImg src={Img10} /></a>
                <a href={Image11}><ColImg src={Img11} /></a>
                <a href={Image12}><ColImg src={Img12} /></a>
            </Column>
            <Column>
                <a href={Image13}><ColImg src={Img13} /></a>
                <a href={Image14}><ColImg src={Img14} /></a>
                <a href={Image15}><ColImg src={Img15} /></a>
                <a href={Image16}><ColImg src={Img16} /></a>
            </Column>
        </Row>
        </SRLWrapper>
    )
}

export default Sesiones
