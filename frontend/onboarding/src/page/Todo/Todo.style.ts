import styled from "styled-components";

export const TodoLayout = styled.div`
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

export const TodoAddButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 30px 0px;

  & button {
    width: 80%;
    padding: 13px 20px;
    border: none;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TodoItem = styled.div`
  width: 300px;
  background-color: rgba(0, 0, 0, 0.03);
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

export const TodoDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TodoAddDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  & input,
  textarea {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px 20px;
  }
`;

export const Title = styled.input`
  line-height: 1rem;
`;

export const Content = styled.textarea`
  height: 200px;
  overflow-y: scroll;
`;

export const AddButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
  }
`;
