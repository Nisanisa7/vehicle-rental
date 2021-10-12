import React from 'react'
import styled from 'styled-components'

const Checkbox = ({className, name, checked, onChange, value, defaultChecked}) => {
    return (
        <Styles className={className}>
             <input type="checkbox"
             className="checkS" 
             name={name}
             value={value}
             checked={checked}
             onChange={onChange} 
             defaultChecked={defaultChecked} 
              />
        </Styles>
    )
}

export default Checkbox
const Styles = styled.div`
.checkS{
 -webkit-appearance: none;
 background-color: #fafafa;
border: 1px solid black;
box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
padding: 9px;
border-radius: 3px;
display: inline-block;
position: relative;
width: 30px;
height: 30px;
}

.checkS:active, 
.checkS:checked:active {
box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}
.checkS:checked {
            background-color: #FFCD61;
            border: 1px solid #adb8c0;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
color: #99a1a7;
}
.checkS:checked:after {
font-family: 'FontAwesome';
content: '\f00c';
font-size: 14px;
position: absolute;
bottom: 0.01px;
left: 3px;
color: #393939;
}




`