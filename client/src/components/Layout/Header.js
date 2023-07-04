import SmallHeader from "./SmallHeader";
import styled from "styled-components";
import header_logo from "../../images/header_logo.png";
import menu from "../api/menu";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
`;
const Menuwrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 900px;
  align-items: center;
`;
const Menu = styled.li`
  font-weight: 600;
  font-size: 20px;
  margin-right: 15px;
`;

const Tab = styled.ul`
  text-align: right;
  padding-left: 20px;
  a {
    padding: 10px;
  }
`;

const SubMenuWrapper = styled.div`
  height: 40px;
  background-color: #000000;
  display: flex;
  align-items: center;
  visibility: hidden;
  padding-left: 200px;
  a {
    padding-bottom: 10px;
    font-size: 15px;
    margin-right: 15px;
    color: #ffffff;
    position: relative;
  }
  a:hover::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: #ffc400;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    color: #ffc400;
  }
`;

const Header = () => {
  const handleSubMenu = (e) => {
    const name = e.target.getAttribute("name");
    const SubmenuElement = document.querySelector("#SubMenuWrapper");
    SubmenuElement.innerHTML = "";
    SubmenuElement.style.visibility = "hidden";
    if (menu[name]["list"]) {
      menu[name]["list"].forEach((menu) => {
        SubmenuElement.style.visibility = "visible";
        const subMenu = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = menu;
        a.href = "#";
        subMenu.append(a);
        SubmenuElement.appendChild(subMenu);
      });
    }
  };
  const handleSubMenuClear = () => {
    const SubmenuElement = document.querySelector("#SubMenuWrapper");
    SubmenuElement.innerHTML = "";
    SubmenuElement.style.visibility = "hidden";
  };
  return (
    <>
      <SmallHeader />
      <HeaderBlock>
        <a
          href="https://www.museum.go.kr/site/main/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={header_logo} alt="국립중앙박물관_로고" />
        </a>
        <Menuwrapper>
          <Menu name="information" onMouseOver={handleSubMenu}>
            관람 정보
          </Menu>
          <Menu name="exhibition" onMouseOver={handleSubMenu}>
            전시
          </Menu>
          <Menu name="education" onMouseOver={handleSubMenu}>
            교육
          </Menu>
          <Menu name="event" onMouseOver={handleSubMenu}>
            문화행사
          </Menu>
          <Menu name="collection" onMouseOver={handleSubMenu}>
            소장품
          </Menu>
          <Menu name="publish" onMouseOver={handleSubMenu}>
            학술출판
          </Menu>
          <Menu name="news" onMouseOver={handleSubMenu}>
            소식참여
          </Menu>
          <Menu name="moreinfo" onMouseOver={handleSubMenu}>
            박물관 소개
          </Menu>
        </Menuwrapper>
        <Tab>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
          <Link to="/search">검색</Link>
        </Tab>
      </HeaderBlock>
      <SubMenuWrapper
        id="SubMenuWrapper"
        onMouseLeave={handleSubMenuClear}
      ></SubMenuWrapper>
    </>
  );
};

export default Header;
