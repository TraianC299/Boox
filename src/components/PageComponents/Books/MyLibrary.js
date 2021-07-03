import React, {useState} from 'react'
import BookStore from '../../BookStore'
import BookStoreBar from '../../BookStoreBar'
import styled from "styled-components"
import Scanner from '../../Scanner'
import {NavLink} from "react-router-dom"
import Input from '../../GeneralUse/Input'
import axios from "axios"
import Button from '../../GeneralUse/Button'
import SignUp from '../../UserAuthComponents/SignUp'
import LogIn from "../../UserAuthComponents/LogIn"
import useHeight from "./ProdilePage/ProfilePage.js"
import ProfilePage from "./ProdilePage/ProfilePage"



const MyLibrary = ({register}) => {
async function greq(path) {
  return await axios.get(axios.defaults.baseURL+path)
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
}



    const Plus = styled.div`
    width: 24vw;
    height: 36vw;
    margin: 4.5vw;
    border-radius: 5px;
    box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
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
      }

    @media (min-width: 768px) and (max-width: 1025px){
        width: 18vw;
        height: 27vw;
        margin: 3.2vw;
        border-radius: 10px;
      }
    
    `

    const Form = styled.form`
    position: relative;
    left: 50%;
    margin-left: -16%;
    `

    const Background = styled.div`
    width:100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    `


    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [logged, setLogged] = useState(true)
    const [showRegister, setShowRegister]=useState(false)
    const [showLogIn, setShowLogIn]=useState(false)

    const openRegister = () =>{
        setShowRegister(prev=>!prev)
    }

    const openLogIn = () =>{
      setShowLogIn(prev=>!prev)
  }



    return (logged?
        (//this is the page when the user is logged in
          <div>
            <BookStoreBar></BookStoreBar>
            {screenSize>1100?
            <Form><Input type="text" placeholder="Type the Isbn" submit={true}></Input>
            <Button text="Add"><input type="submit"></input></Button></Form>:null}
            <BookStore addMore={true}></BookStore>
        </div>)
        :
        (//this is how the page lookjs if the user is not logged in
        <>
        {showRegister||showLogIn? 
        <Background className="background"onClick={(e)=>{
          if (e.target.className.includes("background"))
            if (showRegister==true) {setShowRegister(prev=>!prev)}
            else if (showLogIn==true) {setShowLogIn(prev=>!prev)}}}></Background> :
            null}
        <BookStoreBar></BookStoreBar>
          <div style={{textAlign: "center", padding: "1rem"}}>
           <p style={{marginBottom: "5rem"}}>Here you can add your books so you can swap the with others, try pressing on the icon below and scan the barcode on the back of your book</p> 
          <SignUp  onClick={openRegister} showRegister={showRegister} setShowRegister={setShowRegister} showLogIn={showLogIn}></SignUp>
          <LogIn  showRegister={showRegister} onClick={openLogIn} showLogIn={showLogIn} setShowLogIn={setShowLogIn}></LogIn></div>
          </>))
}

export default MyLibrary
 