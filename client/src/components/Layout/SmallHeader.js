import styled from "styled-components";

const SmallHeader = () => {
  return (
    <MenuBlock className="SmallHeader">
      <Menu>어린이박물관</Menu>
      <Menu>학예사자격증</Menu>
      <Menu>소속박물관 바로가기</Menu>
      <Menu>Language</Menu>
      <Menu>
        <li key="1">
          <a href="https://blog.naver.com/100museum">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item1.png"
              alt="블로그"
            />
          </a>
        </li>
        <li key="2">
          <a href="https://twitter.com/The_NMK">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item2.png"
              alt="트위터"
            />
          </a>
        </li>
        <li key="3">
          <a href="https://www.facebook.com/NationalMuseumofKorea/">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item3.png"
              alt="페이스북"
            />
          </a>
        </li>
        <li key="4">
          <a href="https://www.instagram.com/nationalmuseumofkorea/">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item4.png"
              alt="인스타그램"
            />
          </a>
        </li>
        <li key="5">
          <a href="https://www.youtube.com/user/koreanmuseum">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item5.png"
              alt="유튜브"
            />
          </a>
        </li>
        <li key="6">
          <a href="https://audioclip.naver.com/channels/2320">
            <img
              src="https://www.museum.go.kr/ux/content/images/common/ico/ico_header_item6.png"
              alt="오디오클립"
            />
          </a>
        </li>
      </Menu>
    </MenuBlock>
  );
};

export default SmallHeader;

const MenuBlock = styled.ul`
  display: flex;
  justify-content: right;
  width: 100%;
  margin: 0 auto;
`;
const Menu = styled.li`
  display: flex;
  margin-top: 20px;
  padding: 7px 13px;
  position: relative;
  font-size: 14px;
  float: left;
  margin-right: 5px;
  &::before {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: #000;
  }
  li {
    margin: 7px 10px;
  }
`;
