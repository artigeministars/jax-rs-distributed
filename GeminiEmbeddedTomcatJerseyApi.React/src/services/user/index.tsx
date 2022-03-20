import {baseAxios} from "@axios/index";
import {generalAxiosConfig} from "@axios/index";
import IUser from "@models/user";
import {AxiosRequestConfig, AxiosResponse } from "axios";

export const addUser = (user: Omit<IUser, "id">) =>
    baseAxios.post<IUser>("/users", user, generalAxiosConfig as AxiosRequestConfig);

export const addUserAsync = async (user: Omit<IUser, "id">) =>
    await baseAxios.post<IUser>("/users", user, generalAxiosConfig as AxiosRequestConfig);

export const getUsers = () =>
    baseAxios.get<IUser[]>("/users", generalAxiosConfig as AxiosRequestConfig);

export const getUsersAsync = async () =>
    await baseAxios.get<IUser[]>("/users", generalAxiosConfig as AxiosRequestConfig);

export const getUser = (id: string) =>
    baseAxios.get<string>(`/user/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const getUserAsync = async (id: string) =>
    await baseAxios.get<string>(`/user/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const updateUser = (user: IUser) =>
    baseAxios.put<IUser>(`/users/${user.id}`, user, generalAxiosConfig as AxiosRequestConfig);

export const updateUserAsync = async (user: IUser) =>
    await baseAxios.put<IUser>(`/users/${user.id}`, user, generalAxiosConfig as AxiosRequestConfig);

export const deleteUser = (id: string) =>
    baseAxios.delete<string>(`/users/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const deleteUserAsync = async (id: string) =>
    await baseAxios.delete<string>(`/users/${id}`, generalAxiosConfig as AxiosRequestConfig);

export const checkUserAuth = (user: Pick<IUser,"username" | "password" >) => 
    baseAxios.get<IUser>(`/user/${user.username}`, generalAxiosConfig as AxiosRequestConfig);


export const checkUserAuthAsync = async (user: Pick<IUser,"username" | "password" >) => 
    await baseAxios.get<IUser>(`/user/${user.username}` , generalAxiosConfig as AxiosRequestConfig);


export const isUserAvailable = (user: Pick<IUser,"username" | "password" >) => {
    let isAuthenticated = false;
    Promise.resolve(checkUserAuth(user)).then((response) => {
        if(response.status === 200) isAuthenticated = true;
    }).catch((error) => {
        console.log(error);
    });
    
    return isAuthenticated;
}

export const isUserAvailableAsync = (user: Pick<IUser,"username" | "password" >) => {
    let isAuthenticated = false;
    Promise.resolve(checkUserAuthAsync(user)).then((response) => {
        if(response.status === 200) isAuthenticated = true;
    }).catch((error) => {
        console.log(error);
    });    
    return isAuthenticated;
}

    /*
    const fakeAuthProvider = {
        isAuthenticated: false,
        signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
        },
        signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
        },
    };
    
    export { fakeAuthProvider };
    */