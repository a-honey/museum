import { useEffect, useState } from "react";
import mock_exhibition from "../api/mock_exhibition";
import { styled } from "styled-components";
import MockExhibitionItem from "./MockExhibitionItem";

const MockEhibitionBlock = styled.div`
  display: flex;
`;

const MockEhibition = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    mock_exhibition()
      .then((result) => {
        const sortedItem = result.sort((a, b) => {
          const aDate = new Date(a.end);
          const bDate = new Date(b.end);
          return aDate - bDate;
        });
        setItems(sortedItem.slice(0, 8));
      })
      .catch((error) => {
        console.error("전시 목록 로딩 실패");
      });
  }, []);

  return (
    <MockEhibitionBlock>
      {items && items.map((item) => <MockExhibitionItem item={item} />)}
    </MockEhibitionBlock>
  );
};

export default MockEhibition;
