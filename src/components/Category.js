import React from 'react'
import styled from "styled-components"
import crimesIcon from "../icons/crimes.svg"
import image from "../icons/surfboard.png"

const Category = ({color, text, icon}) => {

    const Container=styled.div`
    width: 90vw;
    height: 50vw;
    background: ${color};
    border-radius: 20px;
    box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    padding: 3rem;
    color: white;
    position: relative;
    margin: 30px 18px;
    transition: all 0.3s ease-out;

    :hover{
        transform: scale(1.1)
    }

    @media (min-width: 768px) {
        padding: 2.5rem;
        width: 350px;
        height: 170px;
      }

      @media (min-width: 768px) and (max-width: 1024px) {
        margin: 30px 0px;
        width: 290px;
        height: 141px;
      }
    `
    const IMG = styled.img`
    height: 65%;
    position: absolute;
    top: 8.1vh;
    right: 7vw;

    @media (min-width: 768px) {
        height: 60%;
        top: 55px;
        right: 15px;
      }
    `
    return (
        <div>
        <Container>
            {text}
            <IMG src={icon}></IMG>
        </Container>
        </div>
    )
}

export default Category
