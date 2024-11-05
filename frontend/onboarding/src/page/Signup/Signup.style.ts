import styled from "styled-components";

export const SignupLayout = styled.div`
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupDiv = styled.div`
  width: 400px;
  padding: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3 {
    margin-bottom: 20px;
  }
`;

export const SignupDivTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    & span:nth-child(1) {
      font-size: 1.2rem;
      font-weight: bold;
    }

    & span:nth-child(2) {
      color: rgba(0, 0, 0, 0.8);
      font-size: 0.8rem;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

export const SignupForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
`;

export const SignupFormDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
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

interface SignupButtonProps {
  isCheck: boolean;
}

export const SignupButton = styled.button<SignupButtonProps>`
  border: none;
  border-radius: 30px;
  background-color: black;
  background-color: ${(props) => (props.isCheck ? "rgba(0,0,0,0.1)" : "black")};
  color: white;
  padding: 13px 20px;
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  width: 100%;
  color: tomato;
  font-size: 0.8rem;
  margin-left: 30px;
`;
