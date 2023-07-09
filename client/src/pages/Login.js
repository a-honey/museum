import { styled } from "styled-components";
import Layout from "./Layout";
import Loginform from "../containers/LoginForm";

const LoginBlock = styled.div``;
const Login = () => {
  return (
    <Layout>
      <LoginBlock>
        <Loginform />
      </LoginBlock>
    </Layout>
  );
};

export default Login;
