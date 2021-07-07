import React from 'react'
import styled from 'styled-components'
import { SRLWrapper } from "simple-react-lightbox"


//Images
import  Img1  from '../img/TN PM/1.jpg'
import  Img2  from '../img/TN PM/2.jpg'
import  Img3  from '../img/TN PM/3.jpg'
import  Img4  from '../img/TN PM/4.jpg'
import  Img5  from '../img/TN PM/5.jpg'
import  Img6  from '../img/TN PM/6.jpg'
import  Img7  from '../img/TN PM/7.jpg'
import  Img8  from '../img/TN PM/8.jpg'
import  Img9  from '../img/TN PM/9.jpg'
import  Img10  from '../img/TN PM/10.jpg'
import  Img11  from '../img/TN PM/11.jpg'
import  Img12  from '../img/TN PM/12.jpg'
import  Img13  from '../img/TN PM/13.jpg'
import  Img14  from '../img/TN PM/14.jpg'
import  Img15  from '../img/TN PM/15.jpg'
import  Img16  from '../img/TN PM/16.jpg'

//Big Images
import Image1 from '../img/PM POR/PM01.jpg'
import Image2 from '../img/PM POR/PM02.jpg'
import Image3 from '../img/PM POR/PM03.jpg'
import Image4 from '../img/PM POR/PM04.jpg'
import Image5 from '../img/PM POR/PM05.jpg'
import Image6 from '../img/PM POR/PM06.jpg'
import Image7 from '../img/PM POR/PM07.jpg'
import Image8 from '../img/PM POR/PM08.jpg'
import Image9 from '../img/PM POR/PM09.jpg'
import Image10 from '../img/PM POR/PM010.jpg'
import Image11 from '../img/PM POR/PM011.jpg'
import Image12 from '../img/PM POR/PM012.jpg'
import Image13 from '../img/PM POR/PM013.jpg'
import Image14 from '../img/PM POR/PM014.jpg'
import Image15 from '../img/PM POR/PM015.jpg'
import Image16 from '../img/PM POR/PM016.jpg'




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

const Paisajes = () => {
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

export default Paisajes
