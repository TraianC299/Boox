import React, {useState} from 'react'
import styled from "styled-components"
import Input from '../../GeneralUse/Input'
import Scanner from "../../Scanner"


const ScannerPage = () => {

    const Layer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    filter: brightness(1.5);
    position:absolute;`

    const Knockout2=styled.div`
    height:22vh;
    width: 70vw;
    position: absolute;
    top: 50%;
    background-color: rgba(0,0,0,.5);
    left:15%;
    `


    



     const [screenSize, setScreenSize] = useState(window.innerWidth)
    return (
        <>
            <Layer><Knockout2></Knockout2></Layer>
            <Scanner></Scanner>
        </>
    )
}

export default ScannerPage
