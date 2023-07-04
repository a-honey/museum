import { useEffect, useState } from "react";
import ExhibitionItem from "../Home/ExhibitionItem";
import { styled } from "styled-components";

const ExhibitionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
`;
const Exhibition = () => {
  const [exhibition, setExhibition] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://api.kcisa.kr/openapi/service/CNV/API_CNV_042/request?serviceKey=dc9c0ecb-b733-445a-9632-f09f5f7abc11&numOfRows=4&pageNo=1"
        );
        const data = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = xmlDoc.querySelectorAll("item");
        const exhibitionItems = Array.from(items).map((item) => {
          const title = item.querySelector("title").textContent;
          const imageObject = item.querySelector("imageObject").textContent;
          return { title, imageObject };
        });
        setExhibition(exhibitionItems);
      } catch (e) {
        throw new Error("가져오기 실패");
      }
    };
    fetchData();
  }, []);

  return (
    <ExhibitionsWrapper>
      {exhibition.map((item) => (
        <ExhibitionItem
          title={item.title}
          imageObject={item.imageObject}
          creater={item.creater}
        />
      ))}
    </ExhibitionsWrapper>
  );
};

export default Exhibition;
