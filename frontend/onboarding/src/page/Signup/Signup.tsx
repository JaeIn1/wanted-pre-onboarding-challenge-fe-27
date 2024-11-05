import { useForm, SubmitHandler } from "react-hook-form";
import { createUser } from "../../apis/user";
import NavbarPage from "../../components/Navbar/Navbar";
import * as S from "./Signup.style";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
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
      const data = axiosError.response!.data as { details: string };
      alert(data.details);
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
              </S.SignupFormDiv>

              <S.SignupFormDiv>
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
              </S.SignupFormDiv>

              <S.SignupButton type="submit">Signup</S.SignupButton>
            </S.SignupForm>
          </S.SignupDivTop>
        </S.SignupDiv>
      </S.SignupLayout>
    </>
  );
};

export default SignupPage;
