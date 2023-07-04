/*
import { styled } from "styled-components";

const ItemBlock = styled.div`
  .img-container {
    width: 400px;
    height: 600px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const PlaceBtn = styled.button`
  padding: 10px 5px;
  background-color: #581d58;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
`;
const MockExhibitionItem = ({ item }) => {
  const { name, place, start, end, artPart, artist, imgUrl, info } = item;

  return (
    <ItemBlock>
      <div className="img-container">
        <PlaceBtn>{place}</PlaceBtn>
        <img src={imgUrl} alt={name + "/" + artist + "/" + place} />
      </div>
    </ItemBlock>
  );
};

export default MockExhibitionItem;

// const Wrapper = styled.div`
//   margin: 10px 20px;
//   position: relative;
//   height: 500px;
// `;

// const Img = styled.img`
//   width: 300px;
// `;
// const Title = styled.h5`
//   width: 280px;
//   padding: 10px;
//   font-size: 20px;
*/
