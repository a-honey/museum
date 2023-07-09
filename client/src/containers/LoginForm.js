import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../modules/auth";
import { useEffect } from "react";
import Loginform from "../components/Login/Loginform";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return <Loginform form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
