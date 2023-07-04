import { styled } from "styled-components";
import Layout from "./Layout";
import MockExhibition from "../components/Home/MockExhibition";

const LoginBlock = styled.div``;
const Login = () => {
  return (
    <Layout>
      <LoginBlock>
        <MockExhibition />
      </LoginBlock>
    </Layout>
  );
};

export default Login;
