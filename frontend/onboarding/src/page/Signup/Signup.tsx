import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser } from "../../apis/user";
import NavbarPage from "../../components/Navbar/Navbar";
import * as S from "./Signup.style";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(8, "패스워드는 최소 8자 이상이어야 합니다.")
    .required("패스워드는 필수 입력입니다."),
});

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const res = await createUser(userData);
      console.log(res);
      alert("회원가입에 성공했습니다.");
      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError;
      const data = axiosError.response?.data as { details: string };
      alert(data?.details || "회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <NavbarPage />
      <S.SignupLayout>
        <S.SignupDiv>
          <S.SignupDivTop>
            <div>
              <span>Signup</span>
              <span onClick={() => navigate("/")}>로그인</span>
            </div>
            <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
              <S.SignupFormDiv>
                <input type="text" placeholder="email" {...register("email")} />
                {errors.email && (
                  <S.ErrorText>{errors.email.message}</S.ErrorText>
                )}
              </S.SignupFormDiv>

              <S.SignupFormDiv>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
                {errors.password && (
                  <S.ErrorText>{errors.password.message}</S.ErrorText>
                )}
              </S.SignupFormDiv>

              <S.SignupButton
                type="submit"
                disabled={!isValid}
                isCheck={!isValid}
              >
                Signup
              </S.SignupButton>
            </S.SignupForm>
          </S.SignupDivTop>
        </S.SignupDiv>
      </S.SignupLayout>
    </>
  );
};

export default SignupPage;
