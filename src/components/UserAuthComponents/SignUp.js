import React, {useState, useCallback, useEffect, useRef} from 'react'
import styled from "styled-components"
import Input from '../GeneralUse/Input'
import closeIcon from "../../icons/close.svg"
import {useSpring, animated} from "react-spring"
import axios from "axios"
import Button from '../GeneralUse/Button'

const Form =styled.form`
    background: white;
    padding: 7vh 5vw;
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 30px 30px;
    top:0vh;
    left:0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 999;

    @media (min-width: 768px) {
        width: 50vw;
        height: 50vh;
        margin: 25vh 25vw;
        border-radius: 30px;
      }


    >img{
        position: absolute;
        top:2rem;
        right:2rem;
        cursor: pointer;

        
    }

    @media (min-width: 768px) {
        >img{
            position: relative;
            top:-10%;
            left: 54%;
            cursor: pointer;
        }
      }
    `

    
const SignUp = ({showRegister, setShowRegister, showLogIn, onClick}) => {
    //states for json post request
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState("")

    //final object that is gonna be sent to the server
    let regData={
        email: email,
        password: password
    }

  

    const contentProps = useSpring({
        opacity: showRegister ? 1 : 0,
        marginTop: showRegister ? 0 : -500
      });
    

    async function preq(path, payload) {
        console.log(axios.defaults.baseURL + path)
    return await axios.post(axios.defaults.baseURL + path, payload)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
        }

    const sendRegData= (e) =>{
        e.preventDefault()
        if (password.length<8){
            alert("The password should be at leas 8 characters long")
            return}
        setEmail("")
        setPassword("")
        preq("/register", JSON.stringify(regData))

        }
    
    
    return (
        <>
        {!showRegister?
            (<Button  noDisplay={showLogIn||showRegister} color="#565656" onClick={onClick} text="Sign Up"></Button>)
            :
            (
            <animated.div className="animation" style={contentProps}>
                <Form onSubmit={(e)=>sendRegData(e)}>
                    <img onClick={()=>{setShowRegister(prev=>!prev)}} src={closeIcon}></img>
                    <Input
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            console.log(email)}}
                        placeholder="type your email" 
                        type="email" 
                        submit={false}
                        value={email}>
                    </Input>
                    <Input 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="Think of a password" 
                        type="password" 
                        value={password} >
                    </Input>
                    <Button color="#565656" text="Sign Up"><input type ="submit"></input></Button>
                </Form>
            </animated.div>)}
        </>
    )
}

export default SignUp
