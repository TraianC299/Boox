import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../GeneralUse/Button'
import image from "../../../../book-images/curajul-de-a-nu-fi-pe-placul-celorlalti_1_fullsize.jpg"
import styled from "styled-components"
import {useSpring, animated} from "react-spring"
import axios from "axios"

const ProfilePage = () => {

  const Img = styled.img`
  margin: auto;
  width: 20%;
  height: 30%;
  margin: 35% 40%;
  `
const clicked  = useState(false)

useEffect(()=>{
  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9781784872595`)
  .then(response=>response.json())
  .then(data => console.log(data));
}, [clicked])


const contentProps = useSpring({
  opacity: clicked ? 1 : 0,
  marginTop: clicked ? 0 : -500
});

  return (
    <div>
      <Link><Img onClick={clicked=>!clicked} src={image}></Img></Link>
    </div>
  )
}

export default ProfilePage

