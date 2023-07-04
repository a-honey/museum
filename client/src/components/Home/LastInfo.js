import { useState } from "react";
import { styled } from "styled-components";
import onlineExhibition1 from "../../images/onlineExhibition1.png";

const education = [
  [
    "모두를 위한 박물관 교육 이미지",
    "https://www.museum.go.kr/site/main/file/image/29302",
    "새로운 교육플랫폼 모두(MODU)을 만나보세요!",
    "https://modu.museum.go.kr/index?locale=ko",
  ],
];
const event = [
  [
    "박물관 문화 향연 이미지",
    "https://www.museum.go.kr/uploadfile/ecms/media/2023/06/CC5A9F9A-B463-2A90-95D5-927796E1B277_thumb.jpg",
    "박물관문화향연 6/24 <양방언>",
    "https://www.museum.go.kr/site/main/show/view/culture/1315951",
    "2023-06-24 - 2023-06-24",
  ],
];

const onlineExhibition = [
  [
    "세계문화관 인도·동남아시아실 영상 미리보기 이미지",
    onlineExhibition1,
    "세계문화관 인도·동남아시아실 - 인간을 닮은 신들의 세계",
    "https://www.museum.go.kr/museum/2022/indiaSoutheastAsia_virtualtour/",
  ],
];

const ItemBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
    font-weight: 550;
  }
  .btns {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    div {
      font-size: 18px;
    }
  }
  .img-box {
    width: 100%;
    margin: 20px 0;
    img {
      width: 100%;
    }
  }
  a {
    font-weight: 550;
    font-size: 18px;
    span {
      display: inline-block;
      margin-top: 0px;
      color: #4e4e4e;
    }
  }
`;

const Item1 = () => {
  const [page, setPage] = useState(0);

  return (
    <ItemBlock>
      <h1>교육</h1>
      <div className="btns">
        <button>{"< "}</button>
        <div>
          {page} / {education.length}
        </div>
        <button>{">"}</button>
      </div>
      <div className="img-box">
        <a href={education[page][3]}>
          <img src={education[page][1]} alt={education[page][0]} />
        </a>
      </div>
      <a href={education[page][3]}>{education[page][2]}</a>
    </ItemBlock>
  );
};

const Item2 = () => {
  const [page, setPage] = useState(0);

  return (
    <ItemBlock>
      <h1>행사</h1>
      <div className="btns">
        <button>{"<"}</button>
        <div>
          {page} / {event.length}
        </div>
        <button>{">"}</button>
      </div>
      <div className="img-box">
        <a href={event[page][3]}>
          <img className="img" src={event[page][1]} alt={event[page][0]} />
        </a>
      </div>
      <a href={event[page][3]}>
        {event[page][2]}
        <span>{event[page][4]}</span>
      </a>
    </ItemBlock>
  );
};

const Item3 = () => {
  const [page, setPage] = useState(0);

  return (
    <ItemBlock>
      <h1>교육</h1>
      <div className="btns">
        <button>{"<"}</button>
        <div>
          {page} / {onlineExhibition.length}
        </div>
        <button>{">"}</button>
      </div>
      <div className="img-box">
        <a href={onlineExhibition[page][3]}>
          <img
            src={onlineExhibition[page][1]}
            alt={onlineExhibition[page][0]}
            style={{ width: "100%" }}
          />
        </a>
      </div>
      <a href={onlineExhibition[page][3]}>{onlineExhibition[page][2]}</a>
    </ItemBlock>
  );
};

const LastInfoBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 2fr);
  column-gap: 50px;
  width: 100%;
  margin: 80px 0;
  h1 {
    font-size: 30px;
    font-weight: 550;
  }
`;

const LastInfo = () => {
  return (
    <LastInfoBlock>
      <Item1 />
      <Item2 />
      <Item3 />
    </LastInfoBlock>
  );
};

export default LastInfo;
