import styled from "styled-components";
import AchievementComponent from "../Components/AchievementComponent";
import { BiDownload, BiLike } from "react-icons/bi";
import { BsAward, BsPerson } from "react-icons/bs";

const Achievements = () => {
  return (
    <div>
      <Container>
        <AchievementComponent
          ICON={BiDownload}
          text="Downloads"
          number={1550}
          left="#e22d68ff"
          right="#b410c0ff"
        />
        <AchievementComponent
          ICON={BiLike}
          text="Likes"
          number={5200}
          left="#562ff2ff"
          right="#890defff"
        />
        <AchievementComponent
          ICON={BsAward}
          text="Awards Won"
          number={400}
          left="#1976ebff"
          right="#1976ebff"
        />
        <AchievementComponent
          ICON={BsPerson}
          text="Author Working"
          number={34}
          left="#fa9934ff"
          right="#f0258fff"
        />
      </Container>
    </div>
  );
};

export default Achievements;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0px;
`;
