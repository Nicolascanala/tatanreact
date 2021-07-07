import React from 'react'
import styled from 'styled-components'
import Sesiones from '../img/Tarifas/Vendo Packs.jpg'
import Ventas from '../img/Tarifas/VENTA FINAL.jpg'

//Images
import Img1 from '../img/TN GA/1.jpg'
import Img2 from '../img/TN GA/2.jpg'
import Img3 from '../img/TN GA/3.jpg'
import Img4 from '../img/TN GA/4.jpg'
import Img5 from '../img/TN GA/5.jpg'
import Img6 from '../img/TN GA/6.jpg'
import Img7 from '../img/TN GA/7.jpg'
import Img8 from '../img/TN GA/8.jpg'
import Img31 from '../img/TN GA/3,1.jpg'
import Img10 from '../img/TN GA/10.jpg'
import Img12 from '../img/TN GA/12.jpg'
import Img13 from '../img/TN GA/13.jpg'
import Img14 from '../img/TN GA/14.jpg'


const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    background-color: rgba(22, 77, 6, 0.80);
    align-items: center;
`

const FotosDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }

`

const Fotos = styled.img`
    width: 40%;
    margin: 20px;

    @media screen and (max-width: 600px) {
        width: 90%;
    }
`

const TerminosDiv = styled.div`
    width: 80%;
    height: 40vh;
    background-color: lightgrey;
    margin: 0 auto;
    padding: 20px;

    @media screen and (max-width: 600px) {
        height: 50vh;
    }
`

const Terminos = styled.p`
    margin: 20px;

    @media screen and (max-width: 600px) {
        font-size: 12px;
        margin: 10px;
    }
`


const TarifasGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-top: 30px;
    width: 83%;
    justify-content: center;
`

const FotosGrid = styled.img`
    width: 100%;
`

const Title = styled.h1`
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`



const Tarifas = () => {
    return (
        <Wrapper>
            <FotosDiv>
                <Fotos src={Sesiones} />
                <Fotos src={Ventas} />
            </FotosDiv>
            <TerminosDiv>
                <Title>Términos y Condiciones</Title>
                <Terminos>
                Todos los datos de nuestros clientes serán utilizados única y exclusivamente para responder preguntas acerca de nuestros productos y/o para el despacho de pedidos.
                </Terminos>
                <Title>Propiedad de la Información</Title>
                <Terminos>
                Todas las imágenes, textos, logos, íconos y el resto de los contenidos incluidos en este sitio son propiedad de Sebastián González Canala-Echevarria. Los usuarios no podrán llevar a cabo la reproducción o almacenamiento de aquellos, tanto para su uso personal, como para cualquier tipo de reproducción de elementos o contenidos de este sitio, realizados con o sin ánimo de lucro o fines comerciales. El mal uso de esta información puede resultar en sanciones civiles y penales.
                </Terminos>
            </TerminosDiv>
            <TarifasGrid>
                <FotosGrid src={Img1} />
                <FotosGrid src={Img2} />
                <FotosGrid src={Img3} />
                <FotosGrid src={Img4} />
                <FotosGrid src={Img5} />
                <FotosGrid src={Img6} />
                <FotosGrid src={Img7} />
                <FotosGrid src={Img8} />
                <FotosGrid src={Img31} />
                <FotosGrid src={Img10} />
                <FotosGrid src={Img12} />
                <FotosGrid src={Img13} />
            </TarifasGrid>
        </Wrapper>
    )
}

export default Tarifas
