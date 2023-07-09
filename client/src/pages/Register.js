import { styled } from "styled-components";
import Layout from "./Layout";
import RegisterFormContainer from "../containers/RegisterForm";

const RegisterBlock = styled.div``;
const Register = () => {
  return (
    <Layout>
      <RegisterBlock>
        <RegisterFormContainer />
      </RegisterBlock>
    </Layout>
  );
};

export default Register;
