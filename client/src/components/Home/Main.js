import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import imgs from "../api/img";
import MainDetail from "./MainDetail";

const MainBlock = styled.div`
  margin: 0 auto;
  width: 100%;
`;
const MainImg = styled.img`
  display: none;
  width: 100%;
  &.active {
    display: inline-block;
  }
`;
const Main = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleShowNextImg = useCallback(() => {
    setCurrIndex((cur) => {
      if (cur === imgs.length - 1) {
        return 0;
      } else {
        return cur + 1;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currIndex, imgs.length]);

  useEffect(() => {
    const timeout = setTimeout(handleShowNextImg, 2000);
    return () => clearTimeout(timeout);
  }, [handleShowNextImg]);

  return (
    <MainBlock>
      {imgs.map((img, index) => (
        <MainImg
          src={img.imgUrl}
          key={index}
          className={index === currIndex ? "active" : ""}
          alt={img.name}
        />
      ))}
      <MainDetail />
    </MainBlock>
  );
};

export default Main;
