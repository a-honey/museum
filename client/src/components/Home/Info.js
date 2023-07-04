import { styled } from "styled-components";

import app from "../../images/app.jpg";
import Notice from "./Notice";
import MockExhibition from "./MockExhibition";
import LastInfo from "./LastInfo";

const InfoBlock = styled.div`
  width: 100%;
`;
const Menu = styled.h4`
  padding: 30px 0;
  font-size: 40px;
  font-weight: 700;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img``;
const Info = () => {
  return (
    <InfoBlock>
      <div>
        <Menu>전시</Menu>
        <MockExhibition />
      </div>
      <Menu>알립니다</Menu>
      <Wrapper>
        <div>
          <Notice />
        </div>
        <Img src={app} alt="앱서비스" />
      </Wrapper>
      <LastInfo />
    </InfoBlock>
  );
};

export default Info;
