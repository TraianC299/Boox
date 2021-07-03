import React from 'react'
import styled from "styled-components"
import Button from './Button'

const InputText = styled.input`
    width: 80%;
    padding: 1.5rem;
    border-radius: 30px;
    outline:none;
    border: 2px solid #565656;

    @media (min-width: 768px) {
        width: 30vw;
        margin:auto;
        margin: 20px 0px;
      }
    `
const Input = ({placeholder, type, submit, buttonText, onChange, value}) => {

    return (
        <>   
        <InputText 
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}></InputText>  
        </>
    )
}

export default Input
