import { IResponseUserData, IUserData } from "../types/types";
import { instanse } from "../api/axios.api";

export const AuthService ={
    async registration(
        userData : IUserData
    ): Promise<IResponseUserData | undefined>{
        const{data} = await instanse.post<IResponseUserData>('user', userData)
        return data
    },
    async login(){},
    async getMe(){},
}