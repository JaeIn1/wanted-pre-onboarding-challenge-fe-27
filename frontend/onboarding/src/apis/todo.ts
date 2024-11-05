import { ResponseDTO } from "../models";
import { TodoDTO } from "../models/todo";
import { Todo } from "../types/todo";
import axiosInstance from "../utils/axios";

export const createTodo = async (data: Todo): Promise<ResponseDTO<TodoDTO>> => {
  return await axiosInstance.post("/todos", data);
};

export const getTodos = async (): Promise<ResponseDTO<{ data: Todo[] }>> => {
  return await axiosInstance.get(`/todos`);
};

export const updateTodo = async (data: Todo): Promise<ResponseDTO<TodoDTO>> => {
  return await axiosInstance.put(`/todos/${data.id}`, data);
};

export const deleteTodo = async (data: Todo): Promise<ResponseDTO<TodoDTO>> => {
  return await axiosInstance.delete(`/todos/${data.id}`);
};
