import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import Scanner from "../components/Scanner"
import image1 from "../book-images/46dfb5a6-e761-4de6-8857-657586bd75c5_1.jpg"
import image2 from "../book-images/907f93c4-5df1-4372-8d69-8cbbe8df935c_1.jpg"
import image3 from "../book-images/ee6a5b80-a453-44d3-a55d-11ff5430f5aa_1.jpg"
import image4 from "../book-images/arta-negocierii-tehnicile-negociatorului-sef-fbi-invata-de-la-cel-mai-bun-cum-sa-iesi-invingator-din-orice-negociere_1_fullsize.jpg"
import image5 from "../book-images/dd62be14-4ab8-4d6d-bcc5-20e884e262ab_1 (1).jpg"
import image6 from "../book-images/bcd7be8b-0b40-4143-b66b-fc420cfe9e12_1.jpg"
import image7 from "../book-images/curajul-de-a-nu-fi-pe-placul-celorlalti_1_fullsize.jpg"
import Input from './GeneralUse/Input'


const BookStore = ({addMore, images}) => {
    const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-wrap:wrap;
 
    `

    const Img = styled.img`
    width: 24vw;
    height: 36vw;
    margin: 4.5vw;
    border-radius: 10px;
    box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

    @media (min-width: 768px) {
        width: 10vw;
        height: 15vw;
        margin: 2vw;
        border-radius: 15px;
      }

    @media (min-width: 768px) and (max-width: 1025px){
        width: 18vw;
        height: 27vw;
        margin: 3.2vw;
        border-radius: 10px
      }
    
    `

    const Plus = styled.div`
    width: 24vw;
    height: 36vw;
    margin: 4.5vw;
    border-radius: 10px;
    border: 2px solid #767676;
    font-size: 8rem;
    color: #767676;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 10vw;
        height: 15vw;
        margin: 2vw;
        border-radius: 15px;
        box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
        border: none;
      }

    @media (min-width: 768px) and (max-width: 1025px){
        width: 18vw;
        height: 27vw;
        margin: 3.2vw;
        border-radius: 15px;
        box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
        border: none;
      }
    `


    

    const testImages = [image1, image2, image3, image4, image5, image6, image7, image1, image2, image3, image4, image5]

    const [screenSize, setScreenSize] = useState(window.innerWidth)
    
    return (
        <Container>
            {testImages.map(image=>{
              return <Img src={image}></Img>})}
            {addMore? 
            screenSize<1000?
            <Link 
            style={{textDecoration: "none"}}
            to="/mylibrary/scanner"><Plus>+</Plus></Link>:
            null:null}
        </Container>
    )
}

export default BookStore
