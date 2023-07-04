import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
const Headwrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid black;
  padding-bottom: 20px;
  width: 1100px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  &.text > * {
    margin: 0 30px 20px 0;
  }
`;
const Btn = styled.button`
  padding-right: 20px;
  padding-left: 20px;
  font-size: 2em;
  font-weight: 700;
  margin-left: 20px;
  height: 100%;
  background-color: transparent;
  border-bottom: 5px solid #581d58;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    background-color: #581d58;
    transition: height 0.5s;
    z-index: -1;
  }
  &:hover {
    color: white;
  }
  &:hover::after {
    height: 100%;
  }
`;
const MainDetail = () => {
  return (
    <DetailWrapper>
      <Headwrapper>
        <Head className="text">
          <div style={{ fontSize: "30px", fontWeight: "700" }}>관람시간</div>
          <div style={{ fontSize: "25px", fontWeight: "550" }}>
            월/화/목/금/일
          </div>
          <div style={{ fontSize: "20px", fontWeight: "300" }}>
            10:00 ~ 18:00
          </div>
          <div style={{ fontSize: "25px", fontWeight: "550" }}>수/토</div>
          <div style={{ fontSize: "20", fontWeight: "300" }} e>
            10:00 ~ 20:00
          </div>
          <div style={{ fontSize: "20", fontWeight: "300" }}>
            * 입장 마감은 폐관 30분 전까지
          </div>
        </Head>
        <Head className="text">
          <div style={{ fontSize: "30px", fontWeight: "700" }}>관람료</div>
          <div style={{ fontSize: "25px", fontWeight: "550" }}>무료</div>
          <div style={{ fontSize: "20px", fontWeight: "300" }}>
            특별전시는 유료
          </div>
        </Head>
      </Headwrapper>
      <Head>
        <Btn>오시는 길</Btn>
        <Btn>예약하기</Btn>
      </Head>
    </DetailWrapper>
  );
};

export default MainDetail;
