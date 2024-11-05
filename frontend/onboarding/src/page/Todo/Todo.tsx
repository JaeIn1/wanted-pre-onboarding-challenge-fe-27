import { useEffect, useState } from "react";
import * as S from "./Todo.style";
import NavbarPage from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../../apis/todo";
import { Todo } from "../../types/todo";

const TodoPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [addTodo, setAddTodo] = useState<boolean>(false);
  const [updateMode, setUpdateMode] = useState<boolean>(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (isAuthenticated === false) {
      alert("로그인을 먼저 해야합니다.");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        console.log(response.data);
        setTodos(response.data.data);
      } catch (error) {
        console.error("Todo 데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    if (isAuthenticated) {
      fetchTodos();
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return null;
  }

  const AddTodo = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const todoData: Todo = { title, content };

    try {
      if (updateMode && selectedTodoId !== null) {
        await updateTodo({ id: selectedTodoId, title, content });
        setUpdateMode(false);
        setSelectedTodoId(null);
      } else {
        await createTodo(todoData);
      }

      setTitle("");
      setContent("");
      setAddTodo(false);

      const response = await getTodos();
      setTodos(response.data.data);
    } catch (error) {
      console.error("Todo를 추가/수정하는 중 오류가 발생했습니다.", error);
    }
  };

  const onClickTodoItem = (todo: Todo) => () => {
    setTitle(todo.title);
    setContent(todo.content);
    // 타입 단언 사용
    if (todo.id) {
      setSelectedTodoId(todo.id);
    } else {
      setSelectedTodoId(null);
    }
    setUpdateMode((prev) => !prev);
    setAddTodo(false);
  };

  const onClickDelete = (todo: Todo) => async (e: React.MouseEvent) => {
    e.stopPropagation();
    const response = await deleteTodo(todo);
    console.log(response.data);
    alert("성공적으로 삭제 되었습니다.");

    const updatedTodos = await getTodos();
    setTodos(updatedTodos.data.data);
  };
  return (
    <div>
      <NavbarPage />
      <S.TodoLayout>
        <h1>Todo</h1>
        <S.TodoAddButton>
          <button
            onClick={() => {
              setAddTodo((prev) => !prev);
              setUpdateMode(false);
              setTitle("");
              setContent("");
            }}
          >
            오늘 할 일을 추가해보세요
          </button>
        </S.TodoAddButton>
        <S.TodoDiv>
          <div>
            {todos.map((todo) => (
              <S.TodoItem key={todo.id} onClick={onClickTodoItem(todo)}>
                <span>{todo.title}</span>
                <S.TodoDeleteIcon onClick={onClickDelete(todo)}>
                  delete
                </S.TodoDeleteIcon>
              </S.TodoItem>
            ))}
          </div>
          {(addTodo || updateMode) && (
            <S.TodoAddDiv>
              <S.Title
                type="text"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <S.Content
                placeholder="내용을 입력해주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <S.AddButton onClick={AddTodo}>
                {updateMode ? "수정하기" : "추가하기"}
              </S.AddButton>
            </S.TodoAddDiv>
          )}
        </S.TodoDiv>
      </S.TodoLayout>
    </div>
  );
};

export default TodoPage;
