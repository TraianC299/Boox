import React, {useState, useEffect}from 'react'
import styled from 'styled-components'
import Button from './Button'
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Navigation, Pagination} from "swiper"
import "swiper/swiper-bundle.css"
import image1 from "../../book-images/46dfb5a6-e761-4de6-8857-657586bd75c5_1.jpg"
import image2 from "../../book-images/907f93c4-5df1-4372-8d69-8cbbe8df935c_1.jpg"
import image3 from "../../book-images/ee6a5b80-a453-44d3-a55d-11ff5430f5aa_1.jpg"
import image4 from "../../book-images/arta-negocierii-tehnicile-negociatorului-sef-fbi-invata-de-la-cel-mai-bun-cum-sa-iesi-invingator-din-orice-negociere_1_fullsize.jpg"
import image5 from "../../book-images/dd62be14-4ab8-4d6d-bcc5-20e884e262ab_1 (1).jpg"
import image6 from "../../book-images/bcd7be8b-0b40-4143-b66b-fc420cfe9e12_1.jpg"
import image7 from "../../book-images/curajul-de-a-nu-fi-pe-placul-celorlalti_1_fullsize.jpg"

SwiperCore.use([Navigation, Pagination])

//Styled elements outside of the dynamic component:
    const Container = styled.div`
    padding: 20px 0px;
    background: #f2f1f7;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
    overflow: hidden;
    text-align: center;

    >h2{
      font-size: 3.6rem;
    }

    @media (min-width: 768px){
        height: 65vh;
      }

      @media (min-width: 768px) and (max-width: 1023px){
        max-height: 45vh;
      }

     
    `
    const Image=styled.img`
    width: 15rem;
    height:22.5rem;
    border-radius: 15px;
    transition: transform 0.5s ease-out;


    @media screen and (device-aspect-ratio: 40/71) {
      width: 12rem;
    height: 18rem;
    }

    @media (min-width: 768px) {
        margin: 0px 10px;
        width:12vw;
        height:18vw;
      }

      @media (min-width: 768px) and (max-width: 1100px){
        margin: 0px 10px;
        width:15vw;
        height:22.5vw;
      }
    `
const BookScroller = ({text, images}) => {
    const testImages = [image1, image2, image3, image4, image5]
    const slides=[]
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    testImages.map(image=>{
    slides.push(
      <SwiperSlide style={{zIndex: "1", padding:"40px 0px"}}>
    {({ isActive }) => (
      <Image src={image} style={isActive && screenSize<600? {transform:"scale(1.35)"}:null}></Image>
    )}
  </SwiperSlide>)})

  
    return (
        
        <Container>
            {text}
            {screenSize<600?
            <Swiper id="main" style={{width:"100%"}} spaceBetween={-160}>{slides}</Swiper>:
            <Swiper id="main" style={{width:"100%"}} wrapperTag="ul" tag="section" navigation slidesPerView={screenSize<1100? 4:5}>{slides}</Swiper>}
            <Button text="See More"></Button>
            </Container>
            
    );
  };
export default BookScroller

