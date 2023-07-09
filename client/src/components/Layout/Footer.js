import { styled } from "styled-components";
import menu from "../api/menu";
import SmallFooter from "./SmallFooter";

const Footer = () => {
  const sites = [
    ["어린이박물관", "#"],
    ["교육플랫폼 모두", "#"],
    ["학예사자격증", "#"],
    ["e뮤지엄", "#"],
    ["외규장각 의궤 원문", "#"],
    ["박물관신문", "#"],
    ["문화상품점", "#"],
  ];
  return (
    <FooterBlock>
      <Nav>
        {Object.keys(menu).map((name) => (
          <Menu>
            <MenuOne>{menu[name]["name"]}</MenuOne>
            {menu[name]["list"].map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Menu>
        ))}
      </Nav>
      <MoreSite>
        {sites.map((item) => (
          <div>_{item[0]}</div>
        ))}
      </MoreSite>
      <SmallFooter />
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  width: 100%;
  border-top: 0.2px solid black;
  margin-top: 40px;
  padding-top: 30px;
  margin-bottom: 70px;
`;
const Nav = styled.div`
  display: flex;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const MenuOne = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 15px;
`;
const MenuItem = styled.div`
  font-size: 15px;
  margin: 10px 5px;
`;

const MoreSite = styled.div`
  display: flex;
  padding: 40px 0;
  div {
    font-size: 18px;
    font-weight: 700;
    flex: 1;
    text-align: center;
  }
`;
