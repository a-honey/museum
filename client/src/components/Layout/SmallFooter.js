import naver from "../../images/naver.svg";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import audioclip from "../../images/audioclip.svg";
import web from "../../images/web_access.png";
import open from "../../images/logo_open.png";
import { styled } from "styled-components";

const SmallFooter = () => {
  const sites1 = [
    ["문화유산표준관리시스템", "#"],
    ["청년멘토", "#"],
    ["VCM 가상명품박물관", "#"],
  ];
  const sites2 = [
    [
      "관련사이트 바로가기",
      [
        ["국립박물관 문화재단", "#"],
        ["국립중앙박물관회", "#"],
        ["사단법인 한국박물관협회", "#"],
      ],
    ],
    [
      "소속박물관 바로가기",
      [
        ["국립경주박물관", "#"],
        ["국립광주박물관", "#"],
        ["국립전주박물관", "#"],
        ["국립대구박물관", "#"],
        ["국립부여박물관", "#"],
        ["국립공주박물관", "#"],
        ["국립진주박물관", "#"],
        ["국립청주박물관", "#"],
        ["국립김해박물관", "#"],
        ["국립제주박물관", "#"],
        ["국립춘천박물관", "#"],
        ["국립나주박물관", "#"],
        ["국립익산박물관", "#"],
      ],
    ],
    [
      "가이드북 다운로드",
      [
        ["English(PDF)", "#"],
        ["中文(PDF)", "#"],
        ["日本語(PDF)", "#"],
        ["한국어(PDF)", "#"],
        ["Русский(PDF)", "#"],
        ["Français(PDF)", "#"],
        ["Deutsche(PDF)", "#"],
        ["Tiếng Việt(PDF)", "#"],
        ["Español(PDF)", "#"],
        ["العربية(PDF)", "#"],
        ["박물관 야외정원 안내", "#"],
        ["프로그램(5월~7월)", "#"],
      ],
    ],
  ];
  const sites3 = [
    ["개인정보처리방침", "#"],
    ["영상정보처리기기 운영·관리 규정", "#"],
    ["이용약관", "#"],
    ["전자민원", "#"],
    ["공공데이터개방", "#"],
    ["저작권정책", "#"],
    ["클린신고센터", "#"],
    ["찾아오시는길", "#"],
  ];

  return (
    <SmallFooterBlock>
      <div className="sites1">
        {sites1.map((item, index) => (
          <li key={`site1_${index}`}>{item[0]}</li>
        ))}
      </div>
      <div className="sites2">
        {sites2.map((item) => (
          <button>{item[0]}</button>
        ))}
      </div>
      <div className="sites3">
        {sites3.map((item, index) => (
          <li key={`site3_${index}`}>{item[0]}</li>
        ))}
      </div>
      <div className="last">
        <div className="go">
          <img src={naver} alt="국립중앙박물관 네이버 블로그 바로가기" />
          <img src={twitter} alt="국립중앙박물관 트위터 바로가기" />
          <img src={facebook} alt="국립중앙박물관 페이스북" />
          <img src={instagram} alt="국립중앙박물관 인스타그램" />
          <img src={audioclip} alt="오디오클립" />
        </div>
        <div className="adress">
          <p>
            04383 서울시 용산구 서빙고로 137(용산동6가 168-6)
            <br />
            대표전화 02-2077-9000
          </p>
          <p>© National Museum of Korea.</p>
          <p>And AHoney :D</p>
        </div>
        <div className="imgs">
          <img src={open} alt="공공데이터" />
          <img src={web} alt="품질인증서" />
        </div>
      </div>
    </SmallFooterBlock>
  );
};

export default SmallFooter;

const SmallFooterBlock = styled.div`
  display: flex;
  border-top: 0.2px solid black;
  padding: 40px 0;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    &.sites1 {
      font-size: 20px;
      font-weight: 600;
      li {
        padding: 10px 0;
      }
    }
    &.sites2 button {
      display: inline-block;
      margin: 10px 0;
      font-size: 18px;
      font-weight: 400;
      text-align: left;
      margin-left: 30px;
      margin-right: 100px;
      padding: 10px 0;
      border-bottom: 2px solid black;
    }

    &.sites3 {
      font-size: 15px;
      li {
        margin: 5px 0;
      }
      li:first-child {
        font-weight: 700;
      }
    }
    &.last {
      div {
        width: 100%;
        text-align: right;

        padding: 10px;
      }
      .go {
        flex-direction: row;
        justify-content: space-between;
        img {
          width: 40px;
        }
      }
      .adress {
        white-space: nowrap;
      }
      .imgs {
        flex-direction: row-reverse;
        align-items: center;
      }
      .imgs > img {
        width: 20%;
      }
    }
  }
`;
