import React from 'react'
import styled from "styled-components"
import {NavLink,Link} from "react-router-dom"

    const BooksMenu = styled.div`
    text-decoration: none;
    background: white;
    width: 95vw;
    height: 7vh;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
    border: 2px solid #767676;
    margin: 40px auto;
    z-index: 0;

    >*{
        text-decoration: none;
    }
  @media (min-width: 768px) {
        border: none;
        box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
      }
  `
    const Header = styled.h4`
        font-size: 1.7rem;
        color: #767676;
        font-weight: lighter;
        `
const BookStoreBar = () => {

      const style={
        textDecoration: "underline", 
        textDecorationColor: "#767676"
      }

    return (
        <>
        <BooksMenu>
            <NavLink 
            to="/mylibrary" 
            activeStyle={style}>
                <Header>My Library</Header>
                </NavLink>

            <NavLink 
            to="/availableSwaps"
            activeStyle={style}>
                <Header>Available <br></br> Swaps</Header>
                </NavLink>

            <NavLink 
            to="/availableSwaps"
            activeStyle={style}>
                <Header>My Requests</Header>
                </NavLink>
        </BooksMenu>
        </>
    )
}

export default BookStoreBar
