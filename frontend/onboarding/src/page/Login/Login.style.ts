import styled from "styled-components";

export const LoginLayout = styled.div`
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDiv = styled.div`
  width: 400px;
  padding: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3 {
    margin-bottom: 20px;
  }
  & input {
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    margin-bottom: 20px;

    &:focus {
      outline: 1px solid black;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
export const LoginDivTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
`;

interface LoginButtonProps {
  isCheck?: boolean;
}

export const LoginButton = styled.button<LoginButtonProps>`
  border: none;
  border-radius: 30px;
  background-color: ${(props) => (props.isCheck ? "rgba(0,0,0,0.1)" : "black")};
  color: white;
  padding: 13px 20px;
  margin: 5px;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
`;

export const LoginFormDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;

  & input {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    margin-bottom: 10px;

    &:focus {
      outline: 1px solid black;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const ErrorText = styled.p`
  color: tomato;
  font-size: 0.8rem;
  margin-left: 10px;
`;
