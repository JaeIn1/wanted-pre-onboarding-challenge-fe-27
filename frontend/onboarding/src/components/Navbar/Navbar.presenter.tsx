import { useState } from "react";
import * as S from "./Navbar.styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavbarUIPage = () => {
  const [loginCheck, setLoginCheck] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const onMoveTodo = () => {
    if (isAuthenticated) {
      navigate("/todo");
    } else {
      alert("로그인한 사용자만 이용할 수 있습니다.");
    }
  };

  const Logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      alert("로그아웃 되었습니다.");
      setLoginCheck(false);
      navigate("/");
    } else {
      alert("로그인을 먼저 해야합니다.");
      navigate("/");
    }
  };
  return (
    <S.NavbarLayout>
      <S.NavbarUl>
        <li onClick={onMoveTodo}>Todo</li>
        {loginCheck && <li onClick={Logout}>Logout</li>}
      </S.NavbarUl>
    </S.NavbarLayout>
  );
};

export default NavbarUIPage;
