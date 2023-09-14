import { BsPen } from "react-icons/bs";
import styled from "styled-components";

interface IFeature {
  LIcon: any;
  LText: string;
  color: string;
  margin: string;
  right: string;
}

const FeatureComponent: React.FC<IFeature> = ({
  LIcon,
  LText,
  color,
  margin,
  right,
}) => {
  return (
    <div>
      <Container margin={margin} right={right}>
        <Icon color={color}>
          <LIcon />
        </Icon>
        <section>
          <Ltxt>{LText}</Ltxt>
          <Stxt>Lorem ipsum dolor sit amet elit</Stxt>
        </section>
      </Container>
    </div>
  );
};

export default FeatureComponent;

const Stxt = styled.div`
  width: 100%;
  font-size: 13px;
`;

const Ltxt = styled.div`
  width: 100%;
  font-size: 24px;
  margin-buttom: 14px;
`;

const Icon = styled.div<{ color: string }>`
  height: 100%;
  width: 15%;
  font-size: 27px;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;

const Container = styled.div<{ margin: string; right: string }>`
  width: 290px;
  height: 130px;
  border-radius: 20px;
  box-shadow: 0px 0px 30px #e3e3f3ff;
  padding: 0px 20px;
  left: ${({ margin }) => margin}px;
  display: flex;
  position: absolute;
  right: ${({ right }) => right}px;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    left: 0;
    right: 0;
    margin-left: 60px;
  }
  @media screen and (max-width: 375px) {
    margin: 0;
  }
  @media screen and (max-width: 425px) {
    left: -30px;
  }
`;
