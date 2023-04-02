import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "./features/car/carSlice";
import {useSelector} from "react-redux"

const Header = () => {
  const[closeStatus,setcloseStatus]=useState(false)
  const cars=useSelector(selectCars)

  return (
    <Container>
      <a>
        <Fade>
       
        <img src="/images/logo.svg" alt="" />
        </Fade>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
           <a href="/" key={index}>{car}</a>

        ))}
       

      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <CustomMenu onClick={()=> setcloseStatus(true)}/>
      </RightMenu>
      <BurgerNav show={closeStatus}>
        <CloseWrapper>
        <CustomClose onClick={()=>setcloseStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car,index)=>(
        <li key={index}>  <a href="/">{car}</a></li>))}

        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-In</a></li>
        <li><a href="/">Roadster</a></li>
        <li><a href="/">CyberTruck</a></li>
        
      </BurgerNav>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  width: 100vw;
  z-index:1
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: bold;
    font-size: 18px;
    flex-wrap:nowrap;
    padding: 0 10px;
  }
  @media(max-width:786px){
    display:none
  }
`;
const RightMenu = styled.div`
display:flex;
align-items:center;
a {
  font-weight: bold;
  font-size: 18px;
  margin-right:10px;
  padding: 0 10px;
}

`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
background:white;
z-index:16;
list-style:none;
padding:20px;
display:${props=>props.show?"flex":"none"};
flex-direction:column;
text-align:start;
font-size:1.2rem;
transition:transform 0.9s;

li{
  padding:20px 0px;
  border-bottom:1px solid rgba(0,0,0,.2)
}
a{font-weight:600;}

`
const CustomClose=styled(CloseIcon)`
cursor:pointer;

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`