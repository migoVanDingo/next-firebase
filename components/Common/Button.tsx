import React from 'react'
import styled from 'styled-components'

const SIZES = ['btn--primary', 'btn--outline']
const STYLES = ['btn--medium', 'btn--large']

const SButton = styled.button.attrs(props => ({className: props.className}))`
    padding: 6px 12px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: .9rem;
    margin-right: 2rem;
    
    &.btn--primary{
        background-color:#990B00;
        
    };

    &.btn--outline{
        background-color: transparent;
        color:#fff;
        padding: 8px 20px;
        border-radius: 4px;
        border: 1px solid #990B00;
        transition: all 0.3s ease-out;

    }

    .btn--medium{
        padding: 8px 20px;
        border-radius: 4px;
        
        color: #fff;
    }
    .btn--large{
        padding: 12px 26px;
        border-radius: 4px;
        color: #fff;
    }

    &:hover{
        transition: all 0.3s ease-out;
        background: #4D0500;
        transition: 250ms;

    };

    @media (max-width: 960px){
        display:none;
    }


`
interface IButton {
    buttonStyle: string
    buttonSize: string
    children: any
    type: string
    onClick: ()=>any
}

export default function Button({buttonStyle, buttonSize, children, type, onClick}:IButton) {

    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <SButton className={`${checkButtonStyles} ${checkButtonSize}`} onClick={onClick}>{children}</SButton>
  )
}
