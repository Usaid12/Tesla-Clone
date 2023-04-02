import React from "react";
import styled from "styled-components";
import "animate.css"
import { Fade } from "react-awesome-reveal";

const Section = (props) => {
  return (
    <Wrap bg={props.bg}>
      <Fade direction="up">
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      
        </Fade>
     
      <Buttons>
      <Fade direction="up">
        <ButtonComp>
          <LeftButton>{props.leftButton}</LeftButton>
          {props.rightButton && <RightButton>{props.rightButton}</RightButton>}
        </ButtonComp>
        </Fade>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bg})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 22px;
`;
const ButtonComp = styled.div`
  display: flex;
  margin-bottom: 30px @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.85);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  font-weight: bold;
`;
const DownArrow = styled.img`
  margin-bottom: 10px;
  height: 40px;
  margin-left: 248px;
  animation: animateDown infinite 1.6s;
  cursor: pointer;
`;
const Buttons = styled.div``;
