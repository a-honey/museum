import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 10px 20px;
  position: relative;
  height: 500px;
`;

const Img = styled.img`
  width: 300px;
`;
const Title = styled.h5`
  width: 280px;
  padding: 10px;
  font-size: 20px;
`;

const ExhibitionItem = ({ title, imageObject }) => {
  return (
    <Wrapper>
      <Img src={imageObject} alt={title} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ExhibitionItem;
