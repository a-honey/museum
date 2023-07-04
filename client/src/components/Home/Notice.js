import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import text from "../api/news";

const NoticeBlock = styled.div`
  width: 750px;
  height: 435px;
  border-bottom: 3px solid black;
`;
const Nav = styled.div`
  display: flex;
  button {
    padding-bottom: 20px;
    border-bottom: 2px solid #505050;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    color: #505050;
  }
  button.active {
    color: #000;
    border-bottom: 5px solid black;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 40px;

  li {
    width: 100%;
    font-size: 22px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:first-child {
      width: 600px;
      font-weight: 500;
      height: 100%;
      margin-left: 12px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    div:first-child:before {
      content: " ";
      background-color: black;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      top: 12.5px;
      left: -12px;
    }
  }
`;

const Notice = () => {
  const [menu, setMenu] = useState("notice");

  const handleClick = (e) => {
    setMenu(e.target.name);
    const bts = document.querySelectorAll("#nav button");
    Array.from(bts).forEach((e) => (e.className = " "));
    e.target.className = "active";
  };

  const updateContent = useCallback(() => {
    const wrapper = document.querySelector("#contents");
    wrapper.innerText = "";
    text[menu].forEach((obj) => {
      const li = document.createElement("li");
      const content = document.createElement("div");
      const date = document.createElement("div");
      content.innerText = obj.title;
      date.innerText = obj.date;
      li.appendChild(content);
      li.appendChild(date);
      wrapper.appendChild(li);
    });
  }, [menu]);

  useEffect(() => {
    updateContent();
  }, [updateContent]);

  return (
    <NoticeBlock>
      <Nav id="nav">
        <button name="notice" className="active" onClick={handleClick}>
          알림
        </button>
        <button name="news" onClick={handleClick}>
          고시/공고
        </button>
        <button name="employ" onClick={handleClick}>
          채용 안내
        </button>
        <button name="cast" onClick={handleClick}>
          보도자료
        </button>
      </Nav>
      <Wrapper id="contents"></Wrapper>
    </NoticeBlock>
  );
};

export default Notice;
