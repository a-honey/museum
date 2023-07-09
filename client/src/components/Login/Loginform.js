import { styled } from "styled-components";

const Loginform = ({ form, onChange, onSubmit }) => {
  return (
    <Form action="#" method="post" id="loginForm" onSumbit={onSubmit}>
      <input
        type="text"
        name="username"
        placeholder="아이디를 입력하세요."
        onChange={onChange}
        value={form.username}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onChange}
        value={form.password}
      />
      <Btn type="submit" id="loginBtn">
        로그인
      </Btn>
    </Form>
  );
};

export default Loginform;

const Btn = styled.button`
  margin-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 2em;
  font-weight: 700;
  height: 100%;
  background-color: transparent;
  border-bottom: 5px solid #581d58;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    background-color: #581d58;
    transition: height 0.5s;
    z-index: -1;
  }
  &:hover {
    color: white;
  }
  &:hover::after {
    height: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin: 30px auto;

  input {
    height: 40px;
    margin-bottom: 20px;
  }

  input::placeholder {
    color: #636363;
    font-size: 20px;
  }
`;
