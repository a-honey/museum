/*
import { useEffect, useState } from "react";
import mock_exhibition from "../api/mock_exhibition";
import { styled } from "styled-components";
import MockExhibitionItem from "./MockExhibitionItem";

const MockEhibitionBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
const MockEhibition = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    mock_exhibition()
      .then((result) => {
        setItems(result);
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
*/
