import styled from "styled-components";
import FeatureComponent from "../Components/FeatureComponent";
import phone from "../Asset/about-2.png";
import { BiGlobe, BiMicrophone, BiPen } from "react-icons/bi";
import { BsFlag, BsLightning, BsPaletteFill } from "react-icons/bs";

const Features = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>
            WELCOME TO <span> LAYER</span>
          </W>
          <div style={{ display: "flex" }}>
            <Line bcc="#e74f40ff">
              <Ball />
            </Line>
            <Line bcc="grey"></Line>
          </div>
        </TopWrapper>
        <Wrapper>
          <Text>
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit <br /> amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <Holder>
          <Left>
            <FeatureComponent
              LIcon={BiPen}
              LText="Creative Design"
              color="red"
              margin="140"
              right=""
            />
            <FeatureComponent
              LIcon={BsFlag}
              LText="Easy to Customize"
              color="lightblue"
              margin="50"
              right=""
            />
            <FeatureComponent
              LIcon={BsLightning}
              LText="Bootstrap 3"
              color="orange"
              margin="140"
              right=""
            />
          </Left>
          <Middle>
            <Img src={phone} />
          </Middle>
          <Right>
            <FeatureComponent
              LIcon={BsPaletteFill}
              LText="Different Colours"
              color="purple"
              right="50"
              margin=""
            />
            <FeatureComponent
              LIcon={BiGlobe}
              LText="Seo friendly"
              color="cyan"
              right=""
              margin=""
            />
            <FeatureComponent
              LIcon={BiMicrophone}
              LText="24/7 SUPPORT"
              color="#fe9776ff"
              right="50"
              margin=""
            />
          </Right>
        </Holder>
      </Container>
    </div>
  );
};

export default Features;

const Img = styled.img``;

const Right = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: start;
  gap: 170px;
  padding-bottom: 40px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;
const Middle = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Left = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: end;
  gap: 170px;
  align-items: end;
  flex-direction: column;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
    gap: 160px;
    margin: 50px 0px;
    align-items: center;
    margin-left: 40px;
  }
`;

const Holder = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  color: #9b9b9bff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-buttom: 50px;
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
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  margin-top: 23px;
  display: flex;
  align-items: center;
`;

const W = styled.div`
  height: 60px;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  //   align-items: center;

  span {
    color: #e74c3cff;
    margin-left: 11px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background: linear-gradient(to right, #e9f0ffff, #fcfaffff, #f8e9ffff);
  padding: 20px 0px 0px 0px;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 20px 0px 120px 0px;
  }
`;
