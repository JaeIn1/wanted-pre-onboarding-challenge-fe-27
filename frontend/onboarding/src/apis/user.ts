import type { User } from "../types/user";
import { ResponseDTO } from "../models";
import { userDTO } from "../models/user";
import axiosInstance from "../utils/axios";

export const loginUser = async (data: User): Promise<ResponseDTO<userDTO>> => {
  console.log(data);
  return await axiosInstance.post(`/users/login`, data);
};

export const createUser = async (data: User): Promise<ResponseDTO<userDTO>> => {
  console.log(data);
  return await axiosInstance.post(`/users/create`, data);
};
