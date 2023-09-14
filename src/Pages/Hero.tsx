import styled from "styled-components";
import bg from "../Asset/bg1.jpg";
import phone from "../Asset/about-1.png";
import { useState } from "react";

const Hero = () => {
  return (
    <div>
      <Container>
        <Dark>
          <Wrapper>
            <Left>
              <h2>
                BEST WAY TO <span>PRESENT</span> YOUR APP
              </h2>
              <p>
                We ensure quality & support. People love us & we love them.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Holder>
                <Button clr="white" brd="none" bg="#e74c3cff">
                  Learn more
                </Button>
                <Button clr="white" brd="1px solid white" bg="transparent">
                  Download Now
                </Button>
              </Holder>
            </Left>
            <Right>
              <Img src={phone} />
            </Right>
          </Wrapper>
        </Dark>
      </Container>
    </div>
  );
};

export default Hero;

const Dark = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px 0px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    padding-right: 0%;
    justify-content: center;
  }
`;

const Button = styled.button<{ bg: string; brd: string; clr: string }>`
  padding: 16px 32px;
  border-radius: 40px;
  font-weight: 500;
  color: ${({ clr }) => clr};
  font-size: 20px;
  background-color: ${({ bg }) => bg};
  border: ${({ brd }) => brd};

  &:hover {
    background-color: white;
    cursor: pointer;
    color: black;
    transition: all 350ms;
  }
  @media screen and (max-width: 375px) {
    padding: 10px 20px;
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  @media screen and (max-width: 375px) {
    height: 230px;
    margin-left: 60px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  width: 37%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: start;
  p {
    font-size: 16px;
    margin: 40px 0px;
  }

  h2 {
    font-size: 42px;
    margin: 0;
    font-weight: 500;
    span {
      color: #e74c3cff;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-left: 40px;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
