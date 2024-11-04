import { ResponseDTO } from "../models";
import { TodoDTO } from "../models/todo";
import { Todo } from "../types/todo";
import axiosInstance from "../utils/axios";

export const createTodo = async (data: Todo): Promise<ResponseDTO<TodoDTO>> => {
  return await axiosInstance.post("/todos", data);
};

export const getTodos = async (): Promise<ResponseDTO<TodoDTO[]>> => {
  return await axiosInstance.get(`/todos`);
};

export const updateTodo = async (
  data: TodoDTO
): Promise<ResponseDTO<TodoDTO>> => {
  return await axiosInstance.put(`/todos/${data.id}`, data);
};
