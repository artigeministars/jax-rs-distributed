import {baseAxios} from "@axios/index";
import {generalAxiosConfig} from "@axios/index";
import IPost from "@models/general";
import {AxiosRequestConfig} from "axios";

export const addPost = (post: Omit<IPost, "id">) =>
    baseAxios.post<IPost>("/posts", post, generalAxiosConfig as AxiosRequestConfig);

export const addPostAsync = async (post: Omit<IPost, "id">) =>
    await baseAxios.post<IPost>("/posts", post, generalAxiosConfig as AxiosRequestConfig);

export const getPosts = () =>
    baseAxios.get<IPost[]>("/posts", generalAxiosConfig as AxiosRequestConfig);

export const getPostsAsync = async () =>
    await baseAxios.get("/posts", generalAxiosConfig as AxiosRequestConfig);

export const getPost = (id: string) =>
    baseAxios.get<string>(`/post/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const getPostAsync = async (id: string) =>
    await baseAxios.get<string>(`/post/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const updatePost = (post: IPost) =>
    baseAxios.put<IPost>(`/posts/${post.id}`, post, generalAxiosConfig as AxiosRequestConfig);

export const updatePostAsync = async (post: IPost) =>
    await baseAxios.put<IPost>(`/posts/${post.id}`, post, generalAxiosConfig as AxiosRequestConfig);

export const deletePost = (id: string) =>
    baseAxios.delete<string>(`/posts/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const deletePostAsync = async (id: string) =>
    await baseAxios.delete<string>(`/posts/${id}`, generalAxiosConfig as AxiosRequestConfig);