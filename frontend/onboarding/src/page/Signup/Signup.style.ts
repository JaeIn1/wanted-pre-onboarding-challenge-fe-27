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

export const SignupButton = styled.button`
  border: none;
  border-radius: 30px;
  background-color: black;
  color: white;
  padding: 13px 20px;
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  color: tomato;
  font-size: 0.8rem;
  margin-left: 10px;
`;
