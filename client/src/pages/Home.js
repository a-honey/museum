import { styled } from "styled-components";
import Info from "../components/Home/Info";
import Layout from "./Layout";
import Slider from "../components/Home/Slider";
import MainDetail from "../components/Home/MainDetail";

const HomeBlock = styled.div``;
const Home = () => {
  return (
    <Layout>
      <HomeBlock>
        <Slider />
        <MainDetail />
        <Info />
      </HomeBlock>
    </Layout>
  );
};

export default Home;
