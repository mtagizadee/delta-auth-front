import { API_BASE_URL } from "./config"
import axios from 'axios';
import { AccessToken, LoginUserDto } from "../types";

export const login = async (data: LoginUserDto): Promise<AccessToken> => {
    const url: string = API_BASE_URL + '/auth/login';
    const resposne = await axios.post<AccessToken>(url, data);
    return resposne.data;
}