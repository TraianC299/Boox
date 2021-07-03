import React from 'react'
import styled from 'styled-components'




const Button = ({text, color , borderColor, onClick, type, noDisplay}) => {

    const Button = styled.button`
    position: relative;
    background: ${color? color:"transparent"};
    color: ${color? "white":"#565656"};
    display: ${noDisplay? "none" : "inline-block"};
    padding: 5px 20px;
    margin: 10px;
    border: 2px solid ${borderColor};
    border-radius: 30px;
    border-color: #565656;
    font-size: 1.6rem;
    outline: none;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1100px){
        font-size: 2rem
      }
    `


    return (
        <Button type={type} onClick={onClick}>{text}</Button>
    )
}

export default Button
