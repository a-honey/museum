import { styled } from "styled-components";
import Info from "../components/Home/Info";
import { HomeLayout } from "./Layout";
import Slider from "../components/Home/Slider";
import MainDetail from "../components/Home/MainDetail";

const HomeBlock = styled.div``;
const Home = () => {
  return (
    <HomeLayout>
      <HomeBlock>
        <Slider />
        <MainDetail />
        <Info />
      </HomeBlock>
    </HomeLayout>
  );
};

export default Home;
