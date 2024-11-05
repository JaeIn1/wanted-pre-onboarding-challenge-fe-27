import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NavbarPage from "../../components/Navbar/Navbar";
import * as S from "./Login.style";
import { loginUser } from "../../apis/user";
import { AxiosError } from "axios";
import { User } from "../../types/user";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(8, "패스워드는 최소 8자 이상이어야 합니다.")
    .required("패스워드는 필수 입력입니다."),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onClickLogin: SubmitHandler<User> = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(userData);
      const token = res.data.token;
      localStorage.setItem("token", token);

      navigate("/todo");
    } catch (error) {
      const axiosError = error as AxiosError;
      const data = axiosError.response!.data as { details: string };
      alert(data.details);
    }
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <NavbarPage />
      <S.LoginLayout>
        <S.LoginDiv>
          <S.LoginDivTop>
            <h3>Login</h3>
            <S.LoginForm onSubmit={handleSubmit(onClickLogin)}>
              <S.LoginFormDiv>
                <input
                  type="text"
                  placeholder="email"
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                  })}
                />
                {errors.email && (
                  <S.ErrorText>{errors.email.message}</S.ErrorText>
                )}
              </S.LoginFormDiv>
              <S.LoginFormDiv>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "패스워드는 필수 입력입니다.",
                  })}
                />
                {errors.password && (
                  <S.ErrorText>{errors.password.message}</S.ErrorText>
                )}
              </S.LoginFormDiv>
              <S.LoginButton
                type="submit"
                disabled={!isValid}
                isCheck={!isValid}
              >
                Login
              </S.LoginButton>
              <S.LoginButton type="button" onClick={onClickSignup}>
                Signup
              </S.LoginButton>
            </S.LoginForm>
          </S.LoginDivTop>
        </S.LoginDiv>
      </S.LoginLayout>
    </>
  );
};

export default LoginPage;
