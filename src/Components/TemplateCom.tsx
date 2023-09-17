import styled from "styled-components";
import quote from "../Asset/QUOTE.png";
import guy from "../Asset/Guy.png";
import { FaStar } from "react-icons/fa";

const TemplateCom = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextWrapper>
            <Quote src={quote} />
            <LargeText>The Best Template You Got It!</LargeText>
            <Stars>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Stars>
            <LittleTxt>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              praesentium nesciunt quod vel a quam explicabo iusto commodi sit
              incidunt! Lorem ipsum dolor sit amet.
            </LittleTxt>
            <Name>-Sean Etang of Codelab</Name>
          </TextWrapper>
          <ImgWrapper>
            <Img src={guy} />
          </ImgWrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default TemplateCom;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 885px) {
    width: 90%;
  }
`;

const Img = styled.img``;

const ImgWrapper = styled.div`
  width: 40%;
  @media (max-width: 885px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Name = styled.div`
  color: red;
  font-family: sans-serif;
  font-style: italic;
  font-size: 17px;
`;

const LittleTxt = styled.div`
  color: grey;
  font-size: 17px;
  font-weight: 400;
  margin: 15px 0;
`;

const Stars = styled.div`
  display: flex;
  gap: 7px;
  color: gold;
`;

const LargeText = styled.div`
  font-size: 35px;
  font-family: "Lucida Sans";
  margin: 15px 0;
`;
const Quote = styled.img`
  width: 10%;
`;

const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 885px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
