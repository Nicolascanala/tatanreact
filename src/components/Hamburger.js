import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (!props.open ? 'none' : 'translateY(10px)')};
`;
const Mid = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
`;

const Bot = styled.div`
  background-color: white;
  height: 5px;
  width: 36px;
  display: flex;
  margin-top: 5px;
  border-radius: 1.5px;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (!props.open ? 'none' : 'translateY(-10px)')};
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 3px 0px 18px 3px;
  width: fit-content;
  cursor: pointer;
`;

const DropDown = styled.div`
    transform: ${(props) => (!props.open ? 'none' : 'translateY(500px)')};
    transition: ease-in-out 0.9s;
    width: 32%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    position: absolute;
    margin-left: 235px;
    margin-top: 90px;

    @media screen and (max-width: 380px) {
        margin-left: 190px;
    }

    @media screen and (max-width: 330px) {
        margin-left: 180px;
    }
`

const Ul = styled.ul`
    list-style: none;
    background-color: black;
`

const Li = styled.li`
    display: inline-block;
    padding: 12px;
    margin-left: -15px;
    margin-bottom: 5px;
`

const A = styled.a`
    text-decoration: none;
    color: white;
`


const Hamburger = (props) => {
  return (
    <>
    <HamburgerContainer onClick={() => props.setOpen(!props.open)}>
      <Top open={props.open} />
      <Mid />
      <Bot open={props.open} />
    </HamburgerContainer>
    {props.open && (
        <DropDown>
            <Ul>
                <Li><A href='/'>Flora y Fauna</A></Li>
                <Li><A href='/paisajes'>Paisajes Magicos</A></Li>
                <Li><A href='/sesiones'>Sesiones</A></Li>
                <Li><A href='/tarifas'>Tarifas</A></Li>
                <Li><A href='/contacto'>Contacto</A></Li>
            </Ul>
        </DropDown>
    )}
    </>
  );
};

export default Hamburger;