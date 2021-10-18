import React from 'react'
import styled from 'styled-components'

export const Dropdown = (props) => {
    return (
        <Styles>
            <select className={`"custom-select" ${props.className}`} name={props.name} id="inputGroupSelect01">
                  <option value={props.value}>{props.option}</option>
              </select>
        </Styles>
    )
}
const Styles = styled.div`


`
