import React from 'react'
import Category from './Category'
import styled from "styled-components"
import horseIcon from "../icons/horse.svg"
import crimesIcon from"../icons/crimes.svg"
import fictionIcon from "../icons/fiction.svg"
import economicsIcon from "../icons/economics.svg"
import loveIcon from "../icons/love.svg"
import scifiIcon from "../icons/sci-fi.svg"
import {Link} from "react-router-dom"

const Categories = () => {
    const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    >*{
        text-decoration:none;
    }
    
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 30px 45px;
        justify-content: space-around;
      }`
    
    
    return (
        <Container>
            <Link><Category 
            color="#F5CB39" 
            icon={horseIcon} 
            text={<h2>Non fiction</h2>}>
            </Category></Link>
            
            <Link><Category 
            color="#985A3F" 
            icon={fictionIcon}
            text={<h2>Fiction and <br></br>Literature</h2>}>
            </Category></Link>

            <Link><Category 
            color="#E7404A" 
            icon={loveIcon} 
            text={<h2>Romance</h2>}>
            </Category></Link>

            <Link><Category 
            color="#18CE77" 
            icon={scifiIcon}
            text={<h2>Sci-fi and<br></br>Fition</h2>}>
            </Category></Link>

            <Link><Category 
            color="#4767ED"
            icon={crimesIcon}
            text={<h2>Crimes and<br></br>Thrillers</h2>}>
            </Category></Link>

            <Link><Category 
            color="#33495F"
            icon={economicsIcon}
            text={<h2>Economics</h2>}>
            </Category></Link>
        </Container>
    )
}

export default Categories
