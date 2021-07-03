import React from 'react'
import styled from "styled-components"

const Click = ({onClick}) => {
    const Buttonn = styled.button`

  `
    return (
        <div>
        <Buttonn onClick={onClick}>
          Click Here
        </Buttonn>
        </div>
    )
}

export default Click
