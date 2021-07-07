import React from 'react'
import styled from 'styled-components'
import Contact from '../img/imga/contacto.jpg'
import useMediaQuery from '../utils/useMediaQuery'


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: rgba(22, 77, 6, 0.80);

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactPhoto = styled.img`
    width: 100%;
    margin-top: 10px;

    @media screen and (max-width: 600px) {
        margin: 0;
        width: 100%;
    }
`

const Text = styled.p`
    width: 60%;
    font-size: 18px;
    margin-top: 10%;
    text-align: justify;


    @media screen and (max-width: 600px) {
        font-size: 10px;
        margin-top: 0;
        width: 90%;
    }
`

const TextDiv = styled.div`
    display: flex;
    justify-content: center;
`

const FormWrapper = styled.div`
    background-color: rgba(22, 77, 6, 0.80);
    padding: 20px;

    @media screen and (max-width: 600px) {
    }
`

const ContactForm = styled.form`
    display: block;
	max-width: 800px;
	margin: 0 auto;
	border: 1px solid black;
	padding: 25px;
	border-radius: 5px;
	background-color: lightgrey;
    margin-top: 15px;
`

const Label = styled.label`
    font-size: 20px;
    /* margin-left: 10px; */

    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
`

const InputLabel = styled.input`
    width: 100%;
	padding-top: 10px;
	padding-bottom: 10px; 
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 5px;
	border:1px solid black;
	font-size: 14px;
    margin: 10px 0;
`

const MessgInput = styled.textarea`
    width: 100%;
	padding-top: 10px;
	padding-bottom: 10px; 
	background-color: white;
	border-radius: 5px;
	border:1px solid black;
	font-size: 14px;
    margin: 10px 0;
`

const Button = styled.input`
    margin-top: 15px;
	width: 100%;
	padding-top: 10px;
	padding-bottom:10px; 
	color: #fff;
    background-color: rgba(22, 77, 6, 0.80);
	border:none;
`

const Escribeme = styled.h1`
    text-align: center;
    color: black;
`


const P = styled.p`
    width: 500px;
    text-align: center;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        max-width: 300px;
        font-size: 12px;
        display: none;
    }
`


const Contacto = () => {
    const matches = useMediaQuery('(min-width: 600px)');


    return (
        <>
        {matches ? 
        <Wrapper>
            <TextDiv>
                <Text><h1>Sobre mi</h1>Admirador de la naturaleza, amante de la fotografía y de la montaña. Agrónomo de profesión y fotógrafo de esencia. Di mis primeros pasos en la fotografía hace mas de 15 años, dedicándole horas y horas a libros, internet, cursos, talleres, tutoriales y por sobre todo práctica, práctica y mas práctica, descubriendo así una simple e inmensa forma de sentirme vivo: estar detrás de mi cámara. A través de mis imágenes intento reflejar el maravilloso patrimonio natural y cultural de Chile. Admirémoslo, respetémoslo, protejámoslo, retratémoslo y cuidémoslo.<h5 style={{textAlign: 'start'}}>Sebastian Gonzalez Canala-Echevarria</h5></Text>
            </TextDiv>
            <ImgWrapper>
                <ContactPhoto src={Contact}  />
            </ImgWrapper>
            <TextDiv>
                <Text><h1>Detalles</h1>
                    <b>Rancagua, sexta región, Chile.</b><br />
                    <b>Teléfono:</b> +56 9 96131947<br />
                    <b>Email:</b> tatangonzalezc@gmail.com
                </Text>
            </TextDiv>
            
        </Wrapper> : 
        <Wrapper>
        
        <ImgWrapper>
            <ContactPhoto src={Contact}  />
        </ImgWrapper>
        <TextDiv>
            <Text><h1>Sobre mi</h1>Admirador de la naturaleza, amante de la fotografía y de la montaña. Agrónomo de profesión y fotógrafo de esencia. Di mis primeros pasos en la fotografía hace mas de 15 años, dedicándole horas y horas a libros, internet, cursos, talleres, tutoriales y por sobre todo práctica, práctica y mas práctica, descubriendo así una simple e inmensa forma de sentirme vivo: estar detrás de mi cámara. A través de mis imágenes intento reflejar el maravilloso patrimonio natural y cultural de Chile. Admirémoslo, respetémoslo, protejámoslo, retratémoslo y cuidémoslo.<h5>Sebastian Gonzalez Canala-Echevarria</h5></Text>
        </TextDiv>
        <TextDiv>
            <Text><h1>Detalles</h1>
                <b>Rancagua, sexta región, Chile.</b><br />
                <b>Teléfono:</b> +56 9 96131947<br />
                <b>Email:</b> tatangonzalezc@gmail.com
        </Text>
        </TextDiv>
        
    </Wrapper>}
        <FormWrapper>
            <Escribeme>Dejame un mensaje:</Escribeme>
            <P>Gracias por visitar mi pagina web. Siente la libertad de preguntarme todo lo necesario para aclarar tus dudas, feliz te responderé a la brevedad. ¡No te olvides de visitar mis redes sociales!</P>
                <ContactForm action="https://formsubmit.co/tatangonzalezc@gmail.com" method="POST">
                    <Label>Nombre</Label>
                    <InputLabel type="text" name="name" placeholder="" />

                    <Label>Email</Label>
                    <InputLabel type="text" name="email" />

                    <Label>Mensaje</Label>
                    <MessgInput name="message" rows='5'></MessgInput>

                    <Button type="submit" value="Enviar" />
                </ContactForm>
            </FormWrapper>
        </>
    )
}

export default Contacto
