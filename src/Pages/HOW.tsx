import styled from "styled-components";
import big from "../Asset/big-screen.png";
import small from "../Asset/small-screen.png";
import HOWComponent from "../Components/HOWComponent";
import { BiBell, BiHeart, BiMessage, BiStar } from "react-icons/bi";

const HOW = () => {
  return (
    <div>
      <Container>
        <Phone>
          <mark>
            <Img src={big} />
          </mark>
        </Phone>
        <Info>
          <Div>
            <TopWrapper>
              <W>HOW IT WORKS</W>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "start",
                  margin: "0",
                }}
              >
                <Line bcc="#e74f40ff">
                  <Ball />
                </Line>
                <Line bcc="grey"></Line>
              </div>
            </TopWrapper>
            <Wrapper>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </Text>
            </Wrapper>
          </Div>
          <Benefits>
            <B style={{ fontSize: "30px" }}>Benefits Of App</B>
            <Components>
              <div style={{ margin: "0", display: "flex", flexWrap: "wrap" }}>
                <HOWComponent
                  Licon={BiBell}
                  Ltext="Notifications"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#bc5bddff"
                  right="#ed56bcff"
                />
                <HOWComponent
                  Licon={BiMessage}
                  Ltext="24/7 Support"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#f1386aff"
                  right="#fb6351ff"
                />
              </div>
              <div style={{ margin: "0", display: "flex", flexWrap: "wrap" }}>
                <HOWComponent
                  Licon={BiStar}
                  Ltext="Favourites"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#8584e8ff"
                  right="#61c2e5ff"
                />
                <HOWComponent
                  Licon={BiHeart}
                  Ltext="Wishlist"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#bc5bddff"
                  right="#ed56bcff"
                />
              </div>
            </Components>
          </Benefits>
          <Button>Learn More</Button>
        </Info>
      </Container>
    </div>
  );
};

export default HOW;

const B = styled.h1`
  margin: 10px;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 18px;
  background-color: #e74c3cff;
  padding: 12px 17px;
  margin: 24px 0;

  &:hover {
    transition: all 350ms;
    background-color: black;
    cursor: pointer;
  }
`;

const Components = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
`;

const Benefits = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;

const Img = styled.img``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60%;

  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Text = styled.div`
  text-align: left;
  font-weight: 500;
  color: #9b9b9bff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    margin-left: 4px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74f40ff;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    margin-bottom: 15px;
    margin-left: 3px;
  }
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  display: flex;
  align-items: center;
`;

const W = styled.div`
  height: 100%;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 425px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

const Phone = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  
  mark {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: end;
    background-image: url(${small});
    background-repeat: no-repeat;
    background-position-x: 0px;
    // margin-right: 30px;
    background-color: transparent;
    background-position-y: 30px;
    @media screen and (max-width: 768px) {
      justify-content: start;
      width: 100%;
      background-position-x: 200px;
      margin: 0;
    }
    @media screen and (max-width: 375px) {
        width: 100%;
        background-position-x: 150px;
        background-position-y: 60px;
        background-size: 60%;
      }
      @media screen and (max-width: 425px) {
        height: 40%;
        width: 100%
      }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 0px 70px 0px;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
  }
`;
