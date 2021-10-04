import React from 'react'
import { Children } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

export const Button = ({children, className, color, type, onClick, }) => {
   
    return (
        <Styles 
        className={className}>
            <button
              className={`button ${color}`} 
              type={type}
              onClick={onClick}>
            {children}

            </button>
           
        </Styles>
    )
}
const Styles = styled.div`
.button{
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    &.shine{
        background-color: #FFCD61;
        color: #393939;
    }&.shine:hover{
        background-color: #dd9a08;
    }
    &.dark{
        background-color: #393939;
        color: #FFCD61;
    }
    &.dark:hover{
        background-color: #2e2d2d;
    }
    
}
`