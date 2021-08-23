import React from 'react'
import styled from 'styled-components'


const Smallcard = (props) => {
    return (
        <StyledSmallCard className={props.className}>
          {props.children}
        </StyledSmallCard>
    )
}

export default Smallcard
const StyledSmallCard = styled.div`
background: white;
border: 1px solid #80918E;
box-sizing: border-box;
border-radius: 10px;

`