import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const CardHistory = ({className, content, path}) => {
    return (
        <Styles className={className}>
            <p>{content}</p>
            <Link href="">
                <a className="icon">
                    <i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
                </a>
          </Link>
        </Styles>
    )
}

export default CardHistory
const Styles = styled.div`
background: white;
border-bottom: 2px solid #80918E;
box-sizing: border-box;
outline: none;
display: flex;
flex-direction: row;

    p{
        color: #393939;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 180%;
    }
    .icon{
        text-decoration: none;
        color: #999999;
        margin-left: auto;
        
    }

`