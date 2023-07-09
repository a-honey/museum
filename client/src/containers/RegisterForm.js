import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../modules/auth";
import { useEffect } from "react";
import RegisterForm from "../components/Login/RegisterForm";

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  return <RegisterForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterFormContainer;
