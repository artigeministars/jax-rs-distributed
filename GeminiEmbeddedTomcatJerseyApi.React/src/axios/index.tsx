import axios from "axios";
import {POST_CONSTANTS} from "@utils/constants";

export const baseAxios = axios.create({
    baseURL: POST_CONSTANTS.POSTBASEURL
});

export interface IAxiosPostsConfig {
    [key: string]: unknown;
   // cancelToken: CancelToken;
    timeout?: number;
}

export const generalAxiosConfig: IAxiosPostsConfig = {
    baseURL: POST_CONSTANTS.POSTBASEURL,
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