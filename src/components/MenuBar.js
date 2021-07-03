import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import {NavLink} from "react-router-dom"


const MenuBar = () => {
    const Menu=styled.div`
    width: 100vw;
    height: 10.7vh;
    position:fixed;
    bottom: 0px;
    right: 0;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    min-width: 0px;
    z-index: 999;

    @media (min-width: 768px) {
        width: 25vw;
        height: 9vh;
        bottom: 20px;
        right: 20px;
        border-radius: 100px;

      }

      @media (min-width: 768px) and (max-width: 1024px){
        width: 40vw;
        height: 6vh;
        bottom: 30px;
        right: 30px;
        border-radius: 100px;
        

      }`

const Icon=styled.span`
  width: 25px !important;
  height: 25px !important;
  
  
  @media (min-width: 768px) {
    :hover {
    transform: scale(1.3)
  }
  transition: 0.3s ease-out;
  }` 

  

    
    
    let style={width: "100%", height: "100%", color:"#787878"}
    
  
    return (
      
        <Menu>
            <Icon><NavLink 
            exact to="/"
            activeClassName="selected-icon">
            <FaHome 
            style={style}
            ></FaHome></NavLink></Icon>
            <Icon><NavLink 
            to="/mylibrary"
            activeClassName="selected-icon"><FaBookOpen style={style}></FaBookOpen></NavLink></Icon>
            <Icon><NavLink 
            to="/profile"
            activeClassName="selected-icon"><FaUserAlt style={style}></FaUserAlt></NavLink></Icon>
        </Menu>
   
    )
}

export default MenuBar
