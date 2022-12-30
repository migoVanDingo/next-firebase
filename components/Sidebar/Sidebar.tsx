import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

interface ISSidebar {
    top: string
}

const SSidebar = styled.div<ISSidebar>`
  width: ${({theme}) => theme.sidebar.width};
  height: 100vh;
  position: fixed;
  right: 0px;
  top:${(props) => props.top};
  background-color: #3c3c3c;
  z-index: 99;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  &.deactivate{
    width: 0rem;
    background-color: transparent;
  }

 

`

const SExpandButton = styled.button`
    
    position: fixed;
    top: 50vh;
    right: -200%;
    z-index: 100;
    height: 100px;
    width: 100px;
    font-size: 80px;
    color: ${({theme}) => theme.colors.textColor};
    background-color: transparent;
    padding: 0;
    border: none;
    opacity: 0;
    
    transition: all 0.2s ease;
    

    &:hover{
        color: red;
        opacity: 1;
        
    }

    &:active{
        color: ${({theme}) => theme.colors.secondaryColor};
        
    }

    &.activate{
        display: fixed;
        right: 0;
        opacity: 0.3;

        transition: all 0.2s ease;

        &:hover{
            opacity: 1;
            right: 0.5rem;
        }
    }
`

const SHideSidebarButton = styled.button`
    width: 2rem;

 
`

interface ISidebar {
    scrollY: any
    headerHeight: any
    toggleSidebar: boolean
    setToggleSidebar: () => any
}

export default function Sidebar({ scrollY, headerHeight, toggleSidebar, setToggleSidebar }: ISidebar) {

    const [top, setTop] = useState<any>(scrollY)
    
    useEffect(() => {
        let fromTop = Number(headerHeight.replace("px" , "")) - scrollY
        
        if(fromTop >= 0){
            setTop(fromTop)
        }
        if(fromTop < 0 && top !== 0)
        {
            setTop(0)
        }
    }, [scrollY])


  return (
    <div>
        <SSidebar top={top.toString() + "px"} className={toggleSidebar ? "deactivate" : ""}>
            <SHideSidebarButton onClick={setToggleSidebar}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </SHideSidebarButton>
        </SSidebar>
        <SExpandButton className={toggleSidebar ? "activate" : ""} onClick={setToggleSidebar}>
            <FontAwesomeIcon icon={faAngleLeft} height={"100%"} width={"100%"} />
        </SExpandButton>
    </ div>
  )
}
