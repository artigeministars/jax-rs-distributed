import axios from "axios";
import {USER_CONSTANTS} from "@utils/constants";

export const baseAxios = axios.create({
    baseURL: USER_CONSTANTS.POSTBASEURL
});

export interface IAxiosPostsConfig {
    [key: string]: unknown;
   // cancelToken: CancelToken;
    timeout?: number;
}

export const generalAxiosConfig: IAxiosPostsConfig = {
    baseURL: USER_CONSTANTS.POSTBASEURL,
    // cancelToken: cancelTokenSource.token,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
};

/*
export const configBase: IAxiosConfig = {
    baseURL: "https://yoursite.com/api",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
};
*/