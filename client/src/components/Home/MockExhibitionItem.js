import { styled } from "styled-components";

const ItemBlock = styled.div`
  width: 375px;
  margin-right: 60px;
  .img-container {
    width: 330px;
    height: 450px;
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
  background-color: #000000;
  color: white;
  position: absolute;
  right: 0;
  font-size: 15px;
  font-weight: 550;
  bottom: 0;
`;
const MockExhibitionItem = ({ item }) => {
  const { name, place, start, end, artPart, artist, imgUrl } = item;

  return (
    <ItemBlock>
      <div className="img-container">
        <PlaceBtn>{place}</PlaceBtn>
        <img src={imgUrl} alt={name + "/" + artist + "/" + place} />
      </div>
      <div
        className="name"
        style={{ paddingTop: "20px", fontSize: "25px", fontWeight: "550" }}
      >
        {name.split(" ").length >= 6
          ? `${name.split(" ").slice(0, 5).join(" ")}...`
          : name}
      </div>
      <div style={{ paddingTop: "10px" }}>
        <span
          style={{ paddingRight: "10px", fontSize: "17px", fontWeight: "550" }}
        >
          기간
        </span>
        {start} ~ {end}
      </div>
      <div>
        <span
          style={{ paddingRight: "10px", fontSize: "17px", fontWeight: "550" }}
        >
          분야
        </span>
        {artPart.split(", ").length >= 6
          ? `${artPart.split(", ").slice(0, 5).join(", ")}등`
          : artPart}
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
